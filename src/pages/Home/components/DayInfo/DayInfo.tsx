import cloud from '../../../../assets/images/cloud.png';
import styles from './dayInfo.module.scss';
import { DayItem } from './DayItem';

export interface IDaiInfoProps {
  feels_like: number | null;
  temp: number | null;
  pressure: number | null;
  precipitation: unknown | null
  windSpeed: number | null;
  windDeg: number | null;
  windGust: number | null;

}

export  function DayInfo({feels_like, temp, pressure, precipitation, windSpeed, windDeg, windGust}: IDaiInfoProps) {
  return (
    <div className={styles.day_info}>
          <DayItem  
            temp={ {feels_like: temp, temp: feels_like, name: 'Температура'}}
            pressure={ {pressure: pressure, name: 'Давление'}}
            precipitation={{name: 'Осадки', precipitation: precipitation}}
            wind={{name:'Ветер', windDeg: windDeg, windGust: windGust, windSpeed: windSpeed}}
          />
      <img className={styles.day_info__img} src={cloud} alt="облако" />
  </div>
  )
}
