export function pressureNow(pressure: number) {

    const divinder = 0.750062;
    const pressure__rt = (pressure * divinder).toFixed()
    let pressure__feels_like = ''
   
    if ( pressure__rt === '760' ) { 
        pressure__feels_like = 'нормальное'
    }

    if ( pressure__rt > '760' ) { 
        pressure__feels_like = 'повышеное'
    }
    if ( pressure__rt < '760' ) { 
        pressure__feels_like = 'пониженое'
    }
  

    return {
      pressure__rt,
      pressure__feels_like
    }
  }