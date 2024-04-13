import { Button } from "@mui/material";
import { useModalContext, useOpenModal } from "../../modals/context";
import { withModalProvider } from "../../modals/hoc";
import { MultiStepModal } from "../../modalTypes";
import { buttonText, stepAmounts, subTitle, title } from "./constants";
import { Content } from "./content";
import { ChartModalProvider, useChartModalContext } from "./context";
 
const MultiStepModalComponent = () => {
    const { state } = useModalContext();
    const { state: chartModalState } = useChartModalContext();
    const openModal = useOpenModal();

    return(
        <>
            <Button onClick={openModal} variant="contained">{buttonText}</Button>
            <MultiStepModal
                content={<Content />}
                onSubmit={() => { console.log(chartModalState) }}
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