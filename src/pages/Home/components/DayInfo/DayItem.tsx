import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvgSelector';
import { IThisDayInfoPrecipitation, IThisDayInfoPressure, IThisDayInfoTemp, IThisDayInfoWind } from '../../../../models/interface';
import { pressureNow } from '../../../../untils/pressure';
import { windDirection } from '../../../../untils/windDirection';
import styles from './dayInfo.module.scss';

interface Props {
  temp : IThisDayInfoTemp,
  pressure :  IThisDayInfoPressure,
  precipitation : IThisDayInfoPrecipitation,
  wind: IThisDayInfoWind,
}

export const DayItem = ({temp, pressure, precipitation, wind}: Props) => {

  const pressure__rt = pressure.pressure ? pressureNow(pressure.pressure).pressure__rt: '-';
  const pressure__feels_like = pressure.pressure ? pressureNow(pressure.pressure).pressure__feels_like: '-';
  const windDer = wind.windDeg ? windDirection(wind.windDeg): '-'

  return (
    <ul className={styles.day_list}>
   
      <li className={styles.day_list__item}>
        <div className={styles.day_list__item__icon}>
          <IndicatorSvgSelector id='temp' />
        </div>
        <div className={styles.day_list__item__descr}>
          <span className={styles.day_list__item__descr__name}>{temp.name}: </span>
          <span className={styles.day_list__item__descr__value}>{`${temp.temp?.toFixed()}° - ощущается как ${temp.feels_like?.toFixed()}°` }</span>
        </div>
      </li>
      <li className={styles.day_list__item}>
        <div className={styles.day_list__item__icon}>
          <IndicatorSvgSelector id='pressure' />
        </div>

        <div className={styles.day_list__item__descr}>
          <span className={styles.day_list__item__descr__name}>{pressure.name}:</span>
          <span className={styles.day_list__item__descr__value}>
            {`${pressure__rt} мм - ртутного столба, ${pressure__feels_like}` }
          </span>
        </div>
       
      </li>

      <li className={styles.day_list__item}>
        <div className={styles.day_list__item__icon}>
          <IndicatorSvgSelector id='precipitation' />
        </div>
        <div className={styles.day_list__item__descr}>
          <span className={styles.day_list__item__descr__name}>{precipitation.name}: </span>
          <span className={styles.day_list__item__descr__value}>{precipitation.precipitation ? `${precipitation.precipitation} мм/ч` : 'без осадков'}</span>
        </div>
      </li>

      <li className={styles.day_list__item}>
        <div className={styles.day_list__item__icon}>
          <IndicatorSvgSelector id='wind' />
        </div>

        <div className={styles.day_list__item__descr}>
          <span className={styles.day_list__item__descr__name}>{wind.name}: </span>
          <span className={styles.day_list__item__descr__value}>{` ${windDer}, ${wind.windSpeed} м/с, порывы ${wind.windGust} м/с ` }</span>
        </div>
      </li>
  </ul>
  );
};
