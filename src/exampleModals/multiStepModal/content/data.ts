import { groupBy, prop } from "ramda";

type Malfunction = {
    id: string;
    name:  string;
    color: string;
}

type Parameter = {
    id: string;
    name:  string;
    color: string;
    unit: string;
    type: ParameterKind;
}

export const malfunctions: Malfunction[] = [
    { id: '1', name: 'Low water level', color: "pink" },
    { id: '2', name: 'Machine failure', color: "blue" },
    { id: '3', name: 'Radiator failure', color: "purple" },
];

enum ChartKind {
    STEP_AFTER = 'step-after',
    BASIC = 'basic',
    MONOTONE = 'monotone',
    BACKGROUND = 'background',
};

enum ParameterKind {
    PERIOD = 'period',
    SINGLE = 'single',
};

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