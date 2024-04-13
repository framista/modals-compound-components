import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { isEmptyArray } from "../../utils/array";
import { ChartKind, Malfunction, Parameter } from "./types";
import { getParameterError } from "./utils";
import { noMalfunctionChoosen } from "./constants";

export type ChartModalState = {
    isSubmitDisabled: boolean;
    name: string;
    selectedUnits: Parameter['unit'][];
    selectedParameters: Parameter[];
    chartKindForParameterId: Record<Parameter['id'], ChartKind>;
    selectedMalfunctions: Malfunction['id'][]
}

export const initialState: ChartModalState = {
    isSubmitDisabled: true,
    name: '',
    selectedUnits: [],
    selectedParameters: [],
    chartKindForParameterId: {},
    selectedMalfunctions: [],
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
        toogleMalfunction: (state, { payload: id }: PayloadAction<Malfunction['id']>) => {
            state.selectedMalfunctions = state.selectedMalfunctions.includes(id) ? 
                state.selectedMalfunctions.filter(malId => malId !== id) : [...state.selectedMalfunctions, id];
            state.isSubmitDisabled = isEmptyArray(state.selectedMalfunctions);
        },
        changeChartKindForParameterId: (state, { payload: { id, kind } } : PayloadAction<{ id: Parameter['id'], kind: ChartKind }>) => {
            state.chartKindForParameterId[id] = kind;
        }
    },
    selectors: {
        selectParametersError: (state) => getParameterError(state.selectedParameters, state.selectedUnits),
        selectMalfunctionsError: (state) => isEmptyArray(state.selectedMalfunctions) ? noMalfunctionChoosen : undefined,
    }
})

export const chartModalReducer = chartModalSlice.reducer;

export const { 
    changeChartKindForParameterId, 
    setIsSubmitDisabled, 
    setName, 
    toogleMalfunction,
    toogleParameter }
     = chartModalSlice.actions;

export const { selectMalfunctionsError, selectParametersError } = chartModalSlice.selectors;