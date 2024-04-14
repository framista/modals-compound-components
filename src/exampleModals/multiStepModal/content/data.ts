import { groupBy, prop } from "ramda";
import { ChartKind, ChartSettings, Malfunction, Parameter, ParameterKind } from "../types";
import { createUnit } from "../utils";

export const malfunctions: Malfunction[] = [
    { id: 'x1', name: 'Low water level', color: "pink" },
    { id: 'x2', name: 'Machine failure', color: "blue" },
    { id: 'x3', name: 'Radiator failure', color: "purple" },
    { id: 'x4', name: 'Device failure', color: "orange" },
];

export const chartForParameter: Record<ParameterKind, ChartKind[]> = {
    [ParameterKind.PERIOD]: [ChartKind.STEP_AFTER, ChartKind.BACKGROUND],
    [ParameterKind.SINGLE]: [ChartKind.MONOTONE, ChartKind.BASIC]
}

export const parameters: Parameter[] = [
    { id: 'c', name: 'Fans amount', unit: '-', color: 'aqua', type: ParameterKind.PERIOD},
    { id: 'd', name: 'Status', unit: '-', color: 'teal', type: ParameterKind.PERIOD},
    { id: 'g', name: 'Mode', unit: '-', color: 'lightblue', type: ParameterKind.PERIOD},
    { id: 'e', name: 'Heater percentage', unit: '%', color: 'purple', type: ParameterKind.SINGLE},
    { id: 'a', name: 'Outside temperature', unit: '°C', color: 'navy', type: ParameterKind.SINGLE },
    { id: 'b', name: 'Inner temperature', unit: '°C', color: 'blue', type: ParameterKind.SINGLE },
    { id: 'f', name: 'Cooler percentage', unit: '%', color: 'indigo', type: ParameterKind.SINGLE},
]

export const grouppedParameters = groupBy(prop('unit'), parameters);

export const initialChartSettings: ChartSettings = {
    malfunctions: [malfunctions[1].id],
    name: 'Chart',
    order: 1,
    y1Unit: createUnit(parameters[0].unit),
    parameters: [
        { id: parameters[0].id, chartKind: chartForParameter[parameters[0].type][0] },
        { id: parameters[5].id, chartKind: chartForParameter[parameters[5].type][0] },
    ]
}
