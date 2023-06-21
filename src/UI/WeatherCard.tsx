import { useState } from 'react';
import { WeatherSvgSelector } from '../assets/icons/weather/WeatherSvgSelector';
import { WeatherModal } from '../modal/WeatherModal';
import { IDayStatisticList } from '../models/interface';
import { dateTime } from '../untils/time';
import { ModalDayInfo } from './modalDayInfo';
import styles from './weatherCards.module.scss';

interface IStatisticDay {
  weather: IDayStatisticList,
  name: string | null
}

// export function WeatherCard({name, temp, icon, dt, item}: any) {
  export function WeatherCard({weather, name}: IStatisticDay) {
  const [isModalOpen ,setIsModalOpen] = useState(false)
  // console.log(weather)

  const dt = weather.dt
  const temp = weather.main.temp
  const icon = weather.weather[0].icon

  
    return (
      
      <div tabIndex={0} className={`${styles.this_day}`}  onClick={() => {setIsModalOpen(true)}}>
        <div className={styles.this_day__top}>
          <div className={styles.this_day__top__wrapper}>
            <div className={styles.this_day__top__wrapper__day_name}>{dt ? `${dateTime(dt).weekDay}` : '_'}</div>
            <div className={styles.this_day__top__wrapper__temp}>{temp?.toFixed() ?? '_'}°</div>  
          </div>
          <span className={styles.this_day__top__wrapper__icon}>
            <WeatherSvgSelector id={icon ?? ''} />
          </span>   
        </div>
        <div className={styles.this_day__bottom}>
          <div className={styles.this__time}>
            <span>{dt ? `${dateTime(dt).hours}: ${dateTime(dt).minutes}` : '_'}</span>
          </div>
        </div>
        {/* <span className={styles.this_day__more}>подробнее</span> */}
        {isModalOpen && <WeatherModal onClose={() => {setIsModalOpen(false)}}>
                  <ModalDayInfo weather={weather} name={name} />
            </WeatherModal>}
      </div>
    )
  }
  