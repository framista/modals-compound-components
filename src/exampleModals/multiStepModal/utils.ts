import { errorTwoManyUnits, noParameterChoosen } from "./constants";
import { ChartModalState } from "./reducer";

export const getParameterError = (selectedParameters: ChartModalState['selectedParameters'], selectedUnits: ChartModalState['selectedUnits']) => {
    if (selectedParameters.length === 0) return noParameterChoosen;
    if (selectedUnits.length > 2) return errorTwoManyUnits;
}

export const createUnit = (unit: string) => `UNIT [${unit}]`;