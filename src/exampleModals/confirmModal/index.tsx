import { Button } from "@mui/material";
import { useModalContext, useOpenModal } from "../../modals/context";
import { withModalProvider } from "../../modals/hoc";
import { buttonText, information, subTitle, title } from "./constants";
import { ConfirmModal } from "../../modalTypes";

const ConfirmModalComponent = () => {
    const { state } = useModalContext();
    const openModal = useOpenModal();;

    return(
        <>
            <Button onClick={openModal} variant="contained">{buttonText}</Button>
            <ConfirmModal
                isOpen={state.isOpen}
                information={information}
                subTitle={subTitle}
                title={title}
            />
        </>
    )
}

export const ConfirmModalUsage = withModalProvider(ConfirmModalComponent)