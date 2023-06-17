import { combineReducers, configureStore } from "@reduxjs/toolkit";
import inputCityReducer from './Reducers/cityReducer'
import { weatherAPI, weatherAPIdays } from "../services/WeatherServices";
// import userReducer from './Reducers/UserSlice'


const rootReducer =  combineReducers({
    inputCity: inputCityReducer,
    [weatherAPI.reducerPath]: weatherAPI.reducer,
    [weatherAPIdays.reducerPath]: weatherAPIdays.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherAPI.middleware, weatherAPIdays.middleware),

    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
