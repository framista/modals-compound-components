import { useCallback } from "react";
import { Button } from "@mui/material";
import { useCloseModal, useModalContext, useOpenModal } from "../../modals/context";
import { withModalProvider } from "../../modals/hoc";
import { MultiStepModal } from "../../modalTypes";
import { buttonText, stepAmounts, subTitle, title } from "./constants";
import { Content } from "./content";
import { ChartModalProvider, useChartModalContext } from "./context";
import { transformChartSettingsToState, transformStateToChartSettings } from "./utils";
import { initialChartSettings, parameters } from "./content/data";
  
const MultiStepModalComponent = () => {
    const { state } = useModalContext();
    const { state: chartModalState } = useChartModalContext();
    const closeModal = useCloseModal();

    const onSubmit = useCallback(() => {
        return new Promise<void>(res => {
            setTimeout(() => {
                console.log(transformStateToChartSettings(chartModalState))
                closeModal();
                res();
            }, 2000)
        })
    }, [chartModalState, closeModal])

    return(
        <MultiStepModal
        content={<Content />}
        onSubmit={onSubmit}
        stepsAmount={stepAmounts}
        isOpen={state.isOpen}
        isSubmitDisabled={chartModalState.isSubmitDisabled}
        subTitle={subTitle}
        title={title}
     />
    )
}

export const MultiStepModalUsage = withModalProvider(() => {
    const { state } = useModalContext();
    const openModal = useOpenModal();

    const btn = <Button onClick={openModal} variant="contained">{buttonText}</Button>

    if (!state.isOpen) 
        return btn;

    return (
        <ChartModalProvider initialChartModalProps={transformChartSettingsToState(initialChartSettings, parameters)}>
            {btn}
            <MultiStepModalComponent/>
        </ChartModalProvider>
    )}
)