
import {createSlice, configureStore} from "@reduxjs/toolkit";
import {InitialState} from './store'


const AppReducer = createSlice({
    name: "Shopping-basket",
    initialState: InitialState,
    reducers: {
        add: (state, action) => {
           return state.map((item) => {
            if(item.id !== action.payload.id){
                return item
            }
            return {
                ...item,
                added: true,
                quantity: item.quantity + 1
            }
           })
        },
        remove: (state, action) => {
            return state.map((item) => {
                if(item.id !== action.payload.id){
                    return item
                }
                else if (item.quantity <= 1){
                    return {
                        ...item,
                        quantity: 0,
                        added: false
                    }
                }
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            })
        },
        increament: (state, action) => {
            return state.map((item) => {
                if( item.id !== action.payload.id){
                    return item
                }
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            })
        },
        clear: (state, action) => {
        return state.map((item) => {
            if(item.id !== action.payload.id){
                return item
            }
            return {
                ...item,
                quantity:0,
                added: false,
            }
        })
        }
    }
})

const store = configureStore({
    reducer: AppReducer.reducer
})

export const {add, remove, clear, increament} = AppReducer.actions

export {AppReducer, store}