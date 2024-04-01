import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ModalState = {
    isOpen: boolean;
    isBackdropLoadingShown: boolean;
}

export const initialState: ModalState = {
    isOpen: false,
    isBackdropLoadingShown: false,
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
        },
        setIsBackdropLoadingShown: (state, { payload }: PayloadAction<ModalState['isBackdropLoadingShown']>) => {
            state.isBackdropLoadingShown = payload;
        }
    },
     selectors: { 
        selectIsModalOpen: (state) => state.isOpen,
        selectIsBackdropLoadingShown: (state) => state.isBackdropLoadingShown,
     }
})

export const modalReducer = modalSlice.reducer;

export const { selectIsModalOpen, selectIsBackdropLoadingShown } = modalSlice.selectors;

export const { openModal, closeModal, setIsBackdropLoadingShown } = modalSlice.actions;