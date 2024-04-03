import { useMemo } from "react";
import { Step, StepLabel, Stepper } from "@mui/material";
import { createArray } from "../../utils/array";
import './styles.css';

type Props = {
    step: number;
    stepsAmount: number;
}

export const ModalStepper = ({ step, stepsAmount }: Props) => {
    const range = useMemo(() => createArray(stepsAmount, 1), [stepsAmount])

    return (
        <div className="modal-stepper">
             <Stepper activeStep={step - 1 }>
                {range.map((label) => (
                    <Step key={label} >
                        <StepLabel></StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}