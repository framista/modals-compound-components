import { errorTwoManyUnits, noParameterChoosen } from "./constants";
import { ChartModalState } from "./reducer";
import { ChartSettings } from "./types";

export const getParameterError = (selectedParameters: ChartModalState['selectedParameters'], selectedUnits: ChartModalState['selectedUnits']) => {
    if (selectedParameters.length === 0) return noParameterChoosen;
    if (selectedUnits.length > 2) return errorTwoManyUnits;
}

export const createUnit = (unit: string) => `UNIT [${unit}]`;

export const transformStateToChartSettings = (state: ChartModalState): ChartSettings => ({
    name: state.name,
    malfunctions: state.selectedMalfunctions,
    order: 1,
    parameters: state.selectedParameters.map(p => ({ id: p.id, chartKind: state.chartKindForParameterId[p.id]})),
    y1Unit: state.y1Unit,
})