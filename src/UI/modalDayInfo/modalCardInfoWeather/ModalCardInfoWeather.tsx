import { WeatherSvgSelector } from '../../../assets/icons/weather/WeatherSvgSelector';
import { IThisDay } from '../../../models/interface';
import { dateTime } from '../../../untils/time';
import styles from './modalCardInfoWeather.module.scss';

export function ModalCardInfoWeather({name, temp, icon, dt}: IThisDay) {
  return (
    <div className={`${styles.modal_day}`}>
      <div className={styles.modal_day__top}>
        <div className={styles.modal_day__top__wrapper}>
          <div className={styles.modal_day__top__wrapper__day_name}>{dt ? `${dateTime(dt).weekDay}` : '_'}</div>
          <div className={styles.modal_day__top__wrapper__temp}>{temp?.toFixed() ?? '_'}°</div>  
        </div>
        <span className={styles.modal_day__top__wrapper__icon}>
          <WeatherSvgSelector id={icon ?? ''} />
        </span>   
      </div>
      <div className={styles.modal_day__bottom}>
        <div className={styles.modal__city}>
          <span>{name ?? '_'}</span>
        </div>
        <div className={styles.modal__time}>
          Время: <span>{dt ? `${dateTime(dt).hours}: ${dateTime(dt).minutes}` : '_'}</span>
        </div>
      </div>
    </div>
  )
}