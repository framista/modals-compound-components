import { Malfunctions } from "./malfunctions";
import { Parameteres } from "./parameters";
import { Units } from "./units";

type Props = {
    step?: number;
}

export const Content = ({ step }: Props) => {

    if (step === 1) return <Parameteres />
    if (step === 2) return <Malfunctions />
    if (step === 3) return <Units />

    console.error(`Not defined step: ${step}`);
    
    return null;
}