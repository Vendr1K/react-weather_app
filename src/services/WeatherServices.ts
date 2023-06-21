import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDayStatistic, IQuery, IWeather } from '../models/interface';



export const weatherAPI = createApi({
    reducerPath: 'weatherAPI',
    tagTypes: ['weatherPost'],
    baseQuery: fetchBaseQuery({baseUrl: (`https://api.openweathermap.org/data/2.5`)}),
    endpoints: (builder) => ({
        fetchDefaultWeather: builder.query<IWeather, IQuery>({
            // ?q=${city}&appid=410eca8247cda096958ede6c0d087db6&lang=ru&units=metric
            query: ({city, key, lang, units}) => ({
                url: '/weather',
                params: {
                    q: city, 
                    appid:  '410eca8247cda096958ede6c0d087db6' || key,
                    lang: 'ru' || lang,
                    units: 'metric' || units,
                }
            }),
            providesTags: result => ['weatherPost'],
        }),
        // updateWeather: builder.mutation<IWeather, IQuery>({
        //     query: ({city}) => ({
        //         url: `/weather`,
        //         params: {
        //             q: city, 
        //             appid: '410eca8247cda096958ede6c0d087db6' ,
        //             lang:  'ru',
        //             units: 'metric',
        //         }
            
        //     }),
        //     invalidatesTags: ['weatherPost'],
        // }),
    })
})


export const weatherAPIdays = createApi({
    reducerPath: 'weatherAPIdays',
    tagTypes: ['weatherPost'],
    baseQuery: fetchBaseQuery({baseUrl: (`https://api.openweathermap.org/data/2.5`)}),
    endpoints: (builder) => ({
        fetchDaysWeather: builder.query<IDayStatistic, IQuery>({
            // ?q=${city}&appid=410eca8247cda096958ede6c0d087db6&lang=ru&units=metric
            query: ({city, key, lang, units}) => ({
                url: '/forecast',
                params: {
                    q: city, 
                    appid:  '410eca8247cda096958ede6c0d087db6' || key,
                    lang: 'ru' || lang,
                    units: 'metric' || units,
                }
            }),
            providesTags: result => ['weatherPost'],
        })
    })
})