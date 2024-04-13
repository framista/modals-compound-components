import { Malfunctions } from "./malfunctions";
import { Parameteres } from "./parameters";
import { ChartSettings } from "./chartSettings";

type Props = {
    step?: number;
}

export const Content = ({ step }: Props) => {

    if (step === 1) return <Parameteres />
    if (step === 2) return <Malfunctions />
    if (step === 3) return <ChartSettings />

    console.error(`Not defined step: ${step}`);
    
    return null;
}