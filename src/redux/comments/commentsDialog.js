import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const commentsDialog = createSlice({
    name: 'CommentsDialog',
    initialState,
    reducers: {
        commentsOpenClose: (state)=>{
            state.isOpen = !state.isOpen;
        }
    }
})

export default commentsDialog.reducer;

export const {commentsOpenClose} = commentsDialog.actions;