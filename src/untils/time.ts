export function dateTime(UTCtime: number) {

    const days = [
      'Вс',
      'Пн',
      'Вт',
      'Ср',
      'Чт',
      'Пт',
      'Сб'
    ];

    const date = new Date(UTCtime * 1000);  
    const hours =  date.getHours() >= 10 ? date.getHours() : `0` + date.getHours();
    const minutes =  date.getMinutes() >= 10 ? date.getMinutes() : `0` + date.getMinutes();
    // const weekDay = date.getDay() === new Date().getDay() ? 'Сг' : days[date.getDay()]
    const weekDay = days[date.getDay()] 
    
    return {
      hours,
      minutes,
      weekDay
    }
  }