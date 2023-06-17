import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICity {
    city: string
}

const initialState: ICity ={
    city: 'Moscow'
}


const cityReducer = createSlice({
    name: 'city',
    initialState,
    reducers: {
        changeInputValue( state, action: PayloadAction<string>) {
            state.city = action.payload
        }
    }
});

export const {
    changeInputValue
} = cityReducer.actions

export default cityReducer.reducer;