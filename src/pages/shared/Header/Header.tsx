import {useAppDispatch, useAppSelectior} from '../../../hooks/ReduxHook';
import { GlobalSvgSelector } from '../../../assets/icons/global/GlobalSvgSelector';
import  {changeInputValue}  from '../../../store/Reducers/cityReducer';
import { weatherAPI } from "../../../services/WeatherServices"
import { FormEvent, useEffect, useRef } from 'react';
import { Loader } from '../../../assets/icons/loader';
import { errorFetch } from '../../../untils/errorFetch';
import styles from './header.module.scss';
import { useTheme } from '../../../hooks/useTheme';
import { Theme } from '../../../context/ThemeContext';

export function Header() {
  const dispatch = useAppDispatch();
  const cityName = useAppSelectior(state => state.inputCity.city);
  const {isError, isFetching, error} = weatherAPI.useFetchDefaultWeatherQuery({city: cityName}); 
  // console.log(data)
  const ref = useRef<HTMLInputElement>(null)
  const localValue = localStorage.getItem('deafultCity') ?? 'Moscow';
  const theme = useTheme();


  const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      if (ref.current?.value.length) {
        dispatch(changeInputValue(ref.current.value));
        ref.current.value = '';
      }
  }

  const handlPromt = () => {
    const city =  prompt('Введите название города');
    if(city) {
      console.log(city)
      localStorage.setItem('deafultCity', `${city}`)
      console.log(localStorage)
    } else {
      console.log('nothing')
    }
  }

  const changeTheme = () =>  {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  useEffect(() => {
    dispatch(changeInputValue(localValue));
  }, [])

  return (
    <div className={`container ${styles.header}`}>
        <div className={styles.header__wrapper}>
            <div className={styles.header__wrapper__logo}>{GlobalSvgSelector({id: 'header-logo', height: '65', width: '65'})}</div>
            <div className={styles.header__wrapper__title}>React weather</div>
        </div>
        
        <div className={`${styles.header__wrapper} ${styles.header__wrapper_right}`} >
       
        <div  className={styles.header__wrapper_right__bottom}>
        <div className={`${styles.header__wrapper__theme} ${styles.change_theme}`} onClick={changeTheme}>{GlobalSvgSelector({id: 'change-theme', height: '35', width: '35'})}</div>
            <div className={styles.header__wrapper__select}>
              <form className={styles.header__form} onSubmit={handleSubmit}>
              <label className={styles.header__form__label}>
                <input className={styles.header__form__input} type="text" ref={ref}/>
                {isFetching && <span className={styles.header__form__loader}>
                  <Loader/>
                </span>}
                
              </label>
              <button className={`${styles.header__form__btn} btn`} disabled={isFetching} > Найти </button>
              
              </form>
            </div>
        </div>
        <div className={styles.header__wrapper_right__top}>
            <button className={`${styles.btn__promt}`} onClick={() => handlPromt()}>Город по умолчанию</button>
        </div>
        {isError && <span className={styles.header__form__error}>{errorFetch(error)}</span>} 
        </div>
    </div>
  )
}
