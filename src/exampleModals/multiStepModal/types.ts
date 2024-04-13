export enum ChartKind {
    STEP_AFTER = 'step-after',
    BASIC = 'basic',
    MONOTONE = 'monotone',
    BACKGROUND = 'background',
};

export enum ParameterKind {
    PERIOD = 'period',
    SINGLE = 'single',
};

export type Malfunction = {
    id: string;
    name:  string;
    color: string;
}

export type Parameter = {
    id: string;
    name:  string;
    color: string;
    unit: string;
    type: ParameterKind;
}

export type ChartSettings = {
    name: string;
    order: number;
    y1Unit: string;
    malfunctions: Malfunction['id'][];
    parameters: { id: Parameter['id'], chartKind: ChartKind }[];
}