import {useAppDispatch, useAppSelectior} from '../../../hooks/ReduxHook';
import { GlobalSvgSelector } from '../../../assets/icons/global/GlobalSvgSelector';
import  {changeInputValue}  from '../../../store/Reducers/cityReducer';
import { weatherAPI } from "../../../services/WeatherServices"
import { FormEvent, useRef } from 'react';
import { Loader } from '../../../assets/icons/loader';
import { errorFetch } from '../../../untils/errorFetch';
import styles from './header.module.scss';

export function Header() {

  const dispatch = useAppDispatch();
  
  const cityName = useAppSelectior(state => state.inputCity.city);
  const {isError, isFetching, error} = weatherAPI.useFetchDefaultWeatherQuery({city: cityName}); 

  const ref = useRef<HTMLInputElement>(null)

  async function handleSubmit(event: FormEvent) {
      event.preventDefault();
      if (ref.current?.value.length) {
        // setSkip(false)
        dispatch(changeInputValue(ref.current.value));
        ref.current.value = '';
        // refetch()
      }
  }

  return (
    <div className={`container ${styles.header}`}>
      
        <div className={styles.header__wrapper}>
            <div className={styles.header__wrapper__logo}>{GlobalSvgSelector({id: 'header-logo', height: '65', width: '65'})}</div>
            <div className={styles.header__wrapper__title}>React weather</div>
        </div>
        <div className={styles.header__wrapper}>
            <div className={`${styles.header__wrapper__theme} ${styles.change_theme}`}>{GlobalSvgSelector({id: 'change-theme', height: '35', width: '35'})}</div>
            <div className={styles.header__wrapper__select}>
              <form className={styles.header__form} onSubmit={handleSubmit}>
              <label className={styles.header__form__label}>
                <input className={styles.header__form__input} type="text" ref={ref}/>
                {isFetching && <span className={styles.header__form__loader}>
                  <Loader/>
                </span>}
                {isError && <span className={styles.header__form__error}>{errorFetch(error)}</span>} 
              </label>
              <button className={styles.header__form__btn} disabled={isFetching} > Найти </button>
              </form>
            </div>
        </div>
    </div>
  )
}
