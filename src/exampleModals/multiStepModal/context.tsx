import React, { createContext,  useContext, useReducer } from "react";
import { UnknownAction } from "@reduxjs/toolkit";
import { ChartModalState, chartModalReducer, initialState } from "./reducer";
 
type ChartModalContext = {
    state: ChartModalState;
    dispatch: React.Dispatch<UnknownAction>
}

const ChartModalContext = createContext<ChartModalContext>(null!);

type ChartModalProps = {
    children: React.ReactNode;
}

export const ChartModalProvider = ({children}: ChartModalProps) => {
    const [state, dispatch] = useReducer(chartModalReducer, initialState)

    return (
        <ChartModalContext.Provider value={{state, dispatch}}>
            {children}
        </ChartModalContext.Provider>
    )
}

export const useChartModalContext = () => {
    const context = useContext(ChartModalContext);

    if (!context) throw new Error('You are outside of chart modal provider')

    return context;
}