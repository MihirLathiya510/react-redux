import { createSlice } from "@reduxjs/toolkit"

// reducer functions
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value+=1
        },
        decrement: state => {
            state.value-=1
        },
        addBy10: state => {
            state.value+=10
        },
        removeBy10: state => {
            state.value-=10
        }, 
        addByValue: (state, action) => {
            state.value+=action.payload
        }, 
        removeByValue: (state, action) => {
            state.value-=action.payload
        }
    }
})

// exporting slice functions
export const {increment, decrement, addBy10, removeBy10, addByValue, removeByValue} = counterSlice.actions
export const count = state => state.counter.value
