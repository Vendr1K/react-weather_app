import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

export  function errorFetch(error : FetchBaseQueryError | SerializedError | undefined) {
    if (error) {
        // console.log(error)
        if ('status' in error) {
        const errMsg = error.status === 404 ?  'Город не найден' : 'error' in error ? error.error : JSON.stringify(error.data)
         
            console.log(error.status)
          return (
           errMsg
          )
        } else {
          // you can access all properties of `SerializedError` here
          return error.message
          // console.log(error.message)
        }
      }
}
