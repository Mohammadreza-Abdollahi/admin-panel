import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dialogIsOpen: false,
    addAttrDialog: false,
    editId: null,
}

const categorySlice = createSlice({
    name: 'categoryDialog',
    initialState,
    reducers: {
        openCloseDialog: (state)=>{
            state.dialogIsOpen = !state.dialogIsOpen;
        },
        AttributeOpenCloseDialog: (state)=>{
            state.addAttrDialog = !state.addAttrDialog;
        },
        setEditId: (state , action)=>{
            state.editId = action.payload;
        }
    }
})

export default categorySlice.reducer;

export const {openCloseDialog , AttributeOpenCloseDialog , setEditId} = categorySlice.actions;