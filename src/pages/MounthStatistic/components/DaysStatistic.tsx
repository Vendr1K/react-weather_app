import React, { useEffect, useState } from 'react'
import { Loader } from '../../../assets/icons/loader';
import { useAppSelectior } from '../../../hooks/ReduxHook';
import { IDayStatisticList } from '../../../models/interface';
import { weatherAPIdays } from '../../../services/WeatherServices';
import { daysArr } from '../../../untils/daysFilter';
import { errorFetch } from '../../../untils/errorFetch';
import styles from './daysStatistic.module.scss'
import { ThisDayStatistic } from './ThisDayStatic';


// Черапунджи

export  function MounthStatistic() {

  const [skipData, setSkipData] = useState(true);
  const [thisDayStatistic, setThisDayStatistic] = useState(false);
  const [daysStatistic, setDaysStatistic] = useState(false);
  const [test, setTest] = useState('first')
 

  const cityName = useAppSelectior(state => state.inputCity.city);
  const {data, isFetching, isError, error} = weatherAPIdays.useFetchDaysWeatherQuery({city: cityName}, {skip: skipData});

  const fullDay = data ? data.list.slice(0, 8) : []

  // console.log(fullDay, 'fullday')

  const res = data ? daysArr(data) : []

  const handleClickThisDay = () => {
    setThisDayStatistic(!thisDayStatistic)
    setSkipData(thisDayStatistic)
    setDaysStatistic(false)
  }

  const handleClickDays = () => {    
    setDaysStatistic(!daysStatistic)
    setSkipData(daysStatistic)
    setThisDayStatistic(false)
  }


  return (
    <div className={styles.weather_statistic}>
      <div className={`container ${styles.weather_statistic_container}`}>
        <div className={styles.weather_statistic__buttons}>
          {isError && <span className={styles.weather_statistic__error}>{errorFetch(error)}</span>}
          {isFetching && <span className={styles.weather_statistic__loader}>
                  <Loader/>
                </span>}
                {/* <Loader/> */}
          <button className={`${styles.weather_statistic__buttons__btn} btn`} disabled={isFetching} onClick={() => handleClickThisDay()}>
            {thisDayStatistic && !isError ? 'Суточный прогноз: скрыть' : 'Суточный прогноз: показать'}
          </button>
          <button className={`${styles.weather_statistic__buttons__btn} btn`} disabled={true} onClick={() => handleClickDays()}>В разработке</button>
        </div>

        {thisDayStatistic && <h2 className={styles.weather_statistic_title}>{data?.city.name}</h2>}
       
        {thisDayStatistic && (res.length ? <ThisDayStatistic weatherDay={fullDay as [IDayStatisticList]} name={data?.city.name ?? null}/> : null)}
        
        {/* {thisDayStatistic && (res.length ? <ThisDayStatistic weather={res as [IDayStatisticList[], IDayStatisticList[], IDayStatisticList[] , IDayStatisticList[]]} name={data?.city.name ?? null}/> : null)}  */}
        {/* {thisDayStatistic && isSuccess ? thisDayStatistic && (res.length ? <ThisDayStatistic weather={res as [IDayStatisticList[], IDayStatisticList[], IDayStatisticList[] , IDayStatisticList[]]} name={data?.city.name ?? null}/> : null) : thisDayStatistic && (!isFetching) && (res.length ? <ThisDayStatistic weather={res as [IDayStatisticList[], IDayStatisticList[], IDayStatisticList[] , IDayStatisticList[]]} name={data?.city.name ?? null}/> : null)} */}
        {/* {daysStatistic && (res.length ? <ThisDayStatistic weather={res as [IDayStatisticList[], IDayStatisticList[], IDayStatisticList[] , IDayStatisticList[]]} name={data?.city.name ?? null}/> : null)} */}
        
      </div>
    </div>
  )
}

