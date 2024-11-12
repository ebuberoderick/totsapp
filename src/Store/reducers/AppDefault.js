import { createSlice } from "@reduxjs/toolkit";


const x = {
    location: "",
}
export const appDefaultSlice = createSlice({
    name: "appDefault",
    initialState: x,
    reducers: {
        updateAppState: (state, action) => {
            for (const key in action.payload) {
                state[key] = action.payload[key]
            }
        },
        resetAppState: (state, action) => {
            state = {}
        }
    },
});

export const { updateAppState, resetAppState } = appDefaultSlice.actions;

export default appDefaultSlice.reducer;