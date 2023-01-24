import { configureStore } from "@reduxjs/toolkit";
import carReducer from '../redux/car/carSlice'
import otherProductReducer from '../redux/otherProducts/otherProductsSlice'

export const store = configureStore({
    reducer: {
        car: carReducer,
        other: otherProductReducer
    }
})