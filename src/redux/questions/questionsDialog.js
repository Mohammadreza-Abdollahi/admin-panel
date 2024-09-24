import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const questionsDialog = createSlice({
    name: 'QuestionsDialog',
    initialState,
    reducers: {
        questionsOpenClose: (state)=>{
            state.isOpen = !state.isOpen;
        }
    }
})

export default questionsDialog.reducer;

export const {questionsOpenClose} = questionsDialog.actions;