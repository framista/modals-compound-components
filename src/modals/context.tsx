import React, { createContext, useCallback, useContext, useReducer } from "react";
import { UnknownAction } from "@reduxjs/toolkit";
import { ModalState, closeModal, initialState, modalReducer, openModal, setIsBackdropLoadingShown } from "./reducer";

type ModalContext = {
    state: ModalState;
    dispatch: React.Dispatch<UnknownAction>
}

const ModalContext = createContext<ModalContext>(null!);

type ModalProps = {
    children: React.ReactNode;
}

export const ModalProvider = ({children}: ModalProps) => {
    const [state, dispatch] = useReducer(modalReducer, initialState)

    return (
        <ModalContext.Provider value={{state, dispatch}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    const context = useContext(ModalContext);

    if (!context) throw new Error('You are outside of modal provider')

    return context;
}

export const useOpenModal = () => {
    const { dispatch } = useModalContext();

    const handleOpenModal = useCallback(() => {
        dispatch(openModal());
    }, [dispatch])

    return handleOpenModal;
}

export const useCloseModal = () => {
    const { dispatch } = useModalContext();

    const handleCloseModal = useCallback(() => {
        dispatch(closeModal());
    }, [dispatch])

    return handleCloseModal;
}

export const useChangeBackdropLoadingModal = () => {
    const { dispatch } = useModalContext();

    const handleChangeBackdropLoading = useCallback((v: ModalState['isBackdropLoadingShown']) => {
        dispatch(setIsBackdropLoadingShown(v));
    }, [dispatch])

    return handleChangeBackdropLoading;
}