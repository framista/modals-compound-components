import { transformToDict } from "../../utils/object";
import { errorTwoManyUnits, noParameterChoosen } from "./constants";
import { chartForParameter } from "./content/data";
import { ChartModalState } from "./reducer";
import { ChartSettings, Parameter } from "./types";

export const getParameterError = (selectedParameters: ChartModalState['selectedParameters'], selectedUnits: ChartModalState['selectedUnits']) => {
    if (selectedParameters.length === 0) return noParameterChoosen;
    if (selectedUnits.length > 2) return errorTwoManyUnits;
}

export function createUnit (unit: string) { return `UNIT [${unit}]`};

export const transformStateToChartSettings = (state: ChartModalState): ChartSettings => ({
    name: state.name,
    malfunctions: state.selectedMalfunctions,
    order: 1,
    parameters: state.selectedParameters.map(p => ({ id: p.id, chartKind: state.chartKindForParameterId[p.id]})),
    y1Unit: state.y1Unit,
})

export const transformChartSettingsToState = (chartSettings: ChartSettings, parameters: Parameter[]): ChartModalState => {
    const parametersDict = transformToDict(parameters, 'id');

    return {
        name: chartSettings.name,
        isSubmitDisabled: false,
        order: chartSettings.order,
        chartKindForParameterId: parameters.reduce((prev, p) => ({ ...prev, [p.id]: chartForParameter[p.type][0] }), {}),
        selectedMalfunctions: chartSettings.malfunctions,
        selectedUnits: [... new Set(chartSettings.parameters.map(p => parametersDict[p.id].unit))],
        selectedParameters: chartSettings.parameters.map(p => parametersDict[p.id]),
        y1Unit: chartSettings.y1Unit,
    }
} 