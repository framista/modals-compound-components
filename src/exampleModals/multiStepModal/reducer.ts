import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChartKind, Parameter } from "./types";
import { getParameterError } from "./utils";

export type ChartModalState = {
    isSubmitDisabled: boolean;
    name: string;
    selectedUnits: Parameter['unit'][];
    selectedParameters: Parameter[];
    chartKindForParameterId: Record<Parameter['id'], ChartKind>
}

export const initialState: ChartModalState = {
    isSubmitDisabled: true,
    name: '',
    selectedUnits: [],
    selectedParameters: [],
    chartKindForParameterId: {},
}

export const chartModalSlice = createSlice({
    name: 'chartModal',
    initialState,
    reducers: {
        setIsSubmitDisabled: (state, { payload }: PayloadAction<ChartModalState['isSubmitDisabled']>) => {
            state.isSubmitDisabled = payload;
        },
        setName: (state, { payload }: PayloadAction<ChartModalState['name']> ) => {
            state.name = payload;
        },
        toogleParameter: (state, { payload: parameter }: PayloadAction<Parameter>) => {
            const isExist = state.selectedParameters.some(p => p.id === parameter.id);
            if (isExist) {
                state.selectedParameters = state.selectedParameters.filter(p => p.id !== parameter.id)
            } else {
                state.selectedParameters = [...state.selectedParameters, parameter];
            }
            state.selectedUnits = [...new Set(state.selectedParameters.map(p => p.unit))];
            state.isSubmitDisabled = !!getParameterError(state.selectedParameters, state.selectedUnits);
        },
        changeChartKindForParameterId: (state, { payload: { id, kind } } : PayloadAction<{ id: Parameter['id'], kind: ChartKind }>) => {
            state.chartKindForParameterId[id] = kind;
        }
    },
    selectors: {
        selectParametersError: (state) => getParameterError(state.selectedParameters, state.selectedUnits),
    }
})

export const chartModalReducer = chartModalSlice.reducer;

export const { 
    changeChartKindForParameterId, 
    setIsSubmitDisabled, 
    setName, 
    toogleParameter } = chartModalSlice.actions;

export const { selectParametersError } = chartModalSlice.selectors;