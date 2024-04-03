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
}

export const malfunctions: Malfunction[] = [
    { id: '1', name: 'Low water level', color: "pink" },
    { id: '2', name: 'Machine failure', color: "blue" },
    { id: '3', name: 'Radiator failure', color: "purple" },
];

export const parameters: Parameter[] = [
    { id: 'a', name: 'Outside temperature', unit: '°C', color: 'green'},
    { id: 'b', name: 'Inner temperature', unit: '°C', color: 'light-green'},
    { id: 'c', name: 'Fans amount', unit: '-', color: 'bronze'},
    { id: 'd', name: 'Status', unit: '-', color: 'yellow'},
    { id: 'e', name: 'Heater percentage', unit: '%', color: 'wheat'},
    { id: 'f', name: 'Cooler percentage', unit: '%', color: 'beige'},
]
