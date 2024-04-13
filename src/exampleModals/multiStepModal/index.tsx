import { useCallback } from "react";
import { Button } from "@mui/material";
import { useCloseModal, useModalContext, useOpenModal } from "../../modals/context";
import { withModalProvider } from "../../modals/hoc";
import { MultiStepModal } from "../../modalTypes";
import { buttonText, stepAmounts, subTitle, title } from "./constants";
import { Content } from "./content";
import { ChartModalProvider, useChartModalContext } from "./context";
import { transformStateToChartSettings } from "./utils";
 
const MultiStepModalComponent = () => {
    const { state } = useModalContext();
    const { state: chartModalState } = useChartModalContext();
    const openModal = useOpenModal();
    const closeModal = useCloseModal();

    const onSubmit = useCallback(() => {
        return new Promise<void>(res => {
            console.log(transformStateToChartSettings(chartModalState))
            setTimeout(() => {
                closeModal();
                res();
            }, 2000)
        })
    }, [chartModalState, closeModal])


    return(
        <>
            <Button onClick={openModal} variant="contained">{buttonText}</Button>
            <MultiStepModal
                content={<Content />}
                onSubmit={onSubmit}
                stepsAmount={stepAmounts}
                isOpen={state.isOpen}
                isSubmitDisabled={chartModalState.isSubmitDisabled}
                subTitle={subTitle}
                title={title}
            />
        </>
    )
}

export const MultiStepModalUsage = withModalProvider(() => 
    <ChartModalProvider>
        <MultiStepModalComponent/>
    </ChartModalProvider>
)