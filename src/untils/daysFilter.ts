import { IDayStatistic, IDayStatisticList } from "../models/interface";

export function daysArr( data: IDayStatistic ) {

    const result = data.list.reduce((res: any, el: IDayStatisticList) => {
        const dateKey = el.dt_txt.split(' ')[0];
        if (res[dateKey]) {
          res[dateKey].push(el)
        } else {
          res[dateKey] = [el]
        }
        return res;
      }, {})
   
    return Object.values(result)
    // return result  
}