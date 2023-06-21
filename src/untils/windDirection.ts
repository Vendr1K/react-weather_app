export function windDirection(windDeg: number) {

    if ((windDeg >= 340 && windDeg <= 360) ||  (windDeg >= 0 && windDeg <= 20) ) {
        return 'северный'
    }

    if (windDeg > 20 && windDeg < 70) {
        return 'северо-восточный'
    }

    if ((windDeg >= 70 && windDeg <= 110) ) {
        return 'Восточный'
    }

    if (windDeg > 110 && windDeg < 160) {
        return 'юго-восточный'
    }

    if ((windDeg >= 160 && windDeg  <= 200) ) {
        return 'южный'
    }

    if (windDeg > 200 && windDeg < 250) {
        return 'юго-западный'
    }

    if ((windDeg >= 250 && windDeg <= 290) ) {
        return 'западный'
    }

    if ((windDeg > 290 && windDeg < 340) ) {
        return 'cеверо-западный'
    }

    return 'не определено'
     
  }