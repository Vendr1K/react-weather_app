import { DayInfo } from './DayInfo';
import { ThisDay } from './ThisDay';
import { useAppSelectior}  from '../../../hooks/ReduxHook';
import { weatherAPI } from '../../../services/WeatherServices';
import styles from './home.module.scss';


export  function Home() {
const cityName = useAppSelectior(state => state.inputCity.city);
const {data} = weatherAPI.useFetchDefaultWeatherQuery({city: cityName});

// console.log(data)

const rain = data?.rain ? Object.values(data?.rain)[0] : null


  return (
    <div className={`container ${styles.home}`}>
      <div className={styles.home__wrapper}>
          <ThisDay name={data?.name ?? null} temp={data?.main.temp ?? null} icon={data?.weather[0].icon ?? null } dt={data?.dt ?? null}/>
          <DayInfo 
            temp={data?.main.temp ?? null} 
            feels_like={data?.main.feels_like ?? null}
            pressure={data?.main.pressure ?? null}
            precipitation={rain}
            windDeg={data?.wind.deg ?? null}
            windSpeed={data?.wind.speed ?? null}
            windGust={data?.wind.gust ?? null}
          />
      </div>
    </div>
  )
}

