import { IDayStatisticList } from '../../../../models/interface'
import { WeatherCard } from '../../../../UI'


import styles from './thisDaystatic.module.scss'

export interface IThisDayStatist {
    name: string | null,
    // weather:[ IDayStatisticList[], IDayStatisticList[], IDayStatisticList[], IDayStatisticList[] ]
    weatherDay: [IDayStatisticList] 
}

export function ThisDayStatistic(props: IThisDayStatist) {
  // console.log(props.testDay, 'testDay')
  return (
    <ul className={styles.weather__list}>
      {/* {props.weather[0].map((item: IDayStatisticList) =>  */}
     {props.weatherDay.map((item: IDayStatisticList) => 
     { 
      return (
        <li  key={item.dt} className={styles.li__test} >
         <WeatherCard weather={item} name={props.name}/>
        </li>
      )}
     )}
    </ul>
   )
}
