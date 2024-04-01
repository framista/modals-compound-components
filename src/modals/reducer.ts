import { createSlice } from "@reduxjs/toolkit";

export type ModalState = {
    isOpen: boolean;
}

export const initialState: ModalState = {
    isOpen: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        }
    },
     selectors: { 
        selectIsModalOpen: (state) => state.isOpen
     }
})

export const modalReducer = modalSlice.reducer;

export const { selectIsModalOpen } = modalSlice.selectors;

export const { openModal, closeModal } = modalSlice.actions;