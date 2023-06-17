import { WeatherSvgSelector } from '../../../../assets/icons/weather/WeatherSvgSelector';
import { IThisDay } from '../../../../models/interface';
import { dateTime } from '../../../../untils/time';
import styles from './thisDay.module.scss';

export function ThisDay({name, temp, icon, dt}: IThisDay) {

  // console.log(data)

  return (
    <div className={`${styles.this_day}`}>
      <div className={styles.this_day__top}>
        <div className={styles.this_day__top__wrapper}>
          <div className={styles.this_day__top__wrapper__day_name}>Сейчас</div>
          <div className={styles.this_day__top__wrapper__temp}>{temp?.toFixed() ?? '_'}°</div>  
        </div>
        <span className={styles.this_day__top__wrapper__icon}>
          <WeatherSvgSelector id={icon ?? ''} />
        </span>   
      </div>
      <div className={styles.this_day__bottom}>
        <div className={styles.this__city}>
          <span>{name ?? '_'}</span>
        </div>
        <div className={styles.this__time}>
          Время: <span>{dt ? `${dateTime(dt).hours}: ${dateTime(dt).minutes}` : '_'}</span>
        </div>
      </div>
    </div>
  )
}
