export interface IQuery {
    city: string,
    key?: string,
    lang?: string,
    units?: string,
}

export interface IWeatherDescr {
    id: number,
    main: string,
    description: string,
    icon: string,
}
export interface IWeatherWind {
    deg: number,
    gust: number,
    speed: number,
}

export interface IWeatherMain {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_max: number,
    temp_min: number,
}



export interface IWeather { 
    id: number,
    name: string,
    main: IWeatherMain,
    cod: number,
    dt: number,
    rain?: undefined | unknown,
    // snow?: undefined | unknown,
    weather: [
        IWeatherDescr
    ],
    wind: IWeatherWind
  
}

export interface IThisDay {
    name:  string | null,
    temp: number | null,
    icon: string | null,
    dt: number | null,
  }


export interface IThisDayInfo {
    icon_id: string;
    name: string;
    value: unknown;
}  

export interface IThisDayInfoTemp {
    name: 'Температура',
    temp: number | null,
    feels_like: number | null
}  

export interface IThisDayInfoPressure {
    name: 'Давление',
    pressure: number | null,
}  

export interface IThisDayInfoPrecipitation {
    name: 'Осадки',
    precipitation: unknown | null,
}

export interface IThisDayInfoWind {
    name: 'Ветер',
    windDeg: number | null,
    windSpeed: number | null,
    windGust: number | null,
}
  