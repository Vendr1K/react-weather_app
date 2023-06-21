import React from 'react'
import { ModalCardInfoItem } from './ModalCardInfoItem';
import cloud from '../../../assets/images/cloud.png';

import styles from './modalCardInfoStatistic.module.scss'


export interface IDaiInfoProps {
    feels_like: number | null;
    temp: number | null;
    pressure: number | null;
    precipitation: unknown | null
    windSpeed: number | null;
    windDeg: number | null;
    windGust: number | null;
  
  }



export function ModalCardInfoStatistic({feels_like, temp, pressure, precipitation, windSpeed, windDeg, windGust}: IDaiInfoProps) {
  return (
    <div className={styles.modal_info}>
    <ModalCardInfoItem  
      temp={ {feels_like: temp, temp: feels_like, name: 'Температура'}}
      pressure={ {pressure: pressure, name: 'Давление'}}
      precipitation={{name: 'Осадки', precipitation: precipitation}}
      wind={{name:'Ветер', windDeg: windDeg, windGust: windGust, windSpeed: windSpeed}}
        />
    <img className={styles.modal_info__img} src={cloud} alt="облако" />
    </div>
  )
}
