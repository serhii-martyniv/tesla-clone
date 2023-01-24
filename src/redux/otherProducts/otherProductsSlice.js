import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    otherProducts: ['Existing inventory', 'Used inventory', 'Trade-in', 'Cybertruck', 'Roadster', 'Existing inventory']
}

const otherProductsSlice = createSlice({
    name: 'other',
    initialState,
    reducers: {}
})

export const selectOtherProducts = state => state.other.otherProducts
export default otherProductsSlice.reducer