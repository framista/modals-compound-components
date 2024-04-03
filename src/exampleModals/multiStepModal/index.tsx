import { Button } from "@mui/material";
import { useModalContext, useOpenModal } from "../../modals/context";
import { withModalProvider } from "../../modals/hoc";
import { MultiStepModal } from "../../modalTypes";
import { buttonText, stepAmounts, subTitle, title } from "./constants";
import { Content } from "./content";

const MultiStepModalComponent = () => {
    const { state } = useModalContext();
    const openModal = useOpenModal();;

    return(
        <>
            <Button onClick={openModal} variant="contained">{buttonText}</Button>
            <MultiStepModal
                content={<Content />}
                onSubmit={() => {}}
                stepsAmount={stepAmounts}
                isOpen={state.isOpen}
                subTitle={subTitle}
                title={title}
            />
        </>
    )
}

export const MultiStepModalUsage = withModalProvider(MultiStepModalComponent)