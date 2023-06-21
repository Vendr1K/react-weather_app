
import { IDayStatisticList } from '../../models/interface'
import { ModalCardInfoStatistic } from './modalCardInfoStatistic/ModalCardInfoStatistic'
import { ModalCardInfoWeather } from './modalCardInfoWeather'
import styles from './modalDayInfo.module.scss'

interface IStatisticDay {
  weather: IDayStatisticList,
  name: string | null
}


export function ModalDayInfo({weather, name}: IStatisticDay) {

  const rain = weather?.rain ? Object.values(weather?.rain)[0] : null


  return (
    <div className={styles.modalDay_info}> 
      <ModalCardInfoWeather name={name ?? null} temp={weather?.main.temp ?? null} icon={weather?.weather[0].icon ?? null } dt={weather?.dt ?? null}/>
      <ModalCardInfoStatistic
          temp={weather?.main.temp ?? null} 
          feels_like={weather?.main.feels_like ?? null}
          pressure={weather?.main.pressure ?? null}
          precipitation={rain}
          windDeg={weather?.wind.deg ?? null}
          windSpeed={weather?.wind.speed ?? null}
          windGust={weather?.wind.gust ?? null}
      />
    </div>
  )
}
