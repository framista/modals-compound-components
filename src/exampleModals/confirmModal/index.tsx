import { useCallback } from "react";
import { Button } from "@mui/material";
import { useCloseModal, useModalContext, useOpenModal } from "../../modals/context";
import { withModalProvider } from "../../modals/hoc";
import { buttonText, information, subTitle, title } from "./constants";
import { ConfirmModal } from "../../modalTypes";

const ConfirmModalComponent = () => {
    const { state } = useModalContext();
    const openModal = useOpenModal();
    const closeModal = useCloseModal();

    const onSubmit = useCallback(() => {
        return new Promise<void>((res) => {
            setTimeout(() => {
                closeModal();
                res();
            }, 4000)
        })
    }, [closeModal])

    return(
        <>
            <Button onClick={openModal} variant="contained">{buttonText}</Button>
            <ConfirmModal
                isOpen={state.isOpen}
                information={information}
                onSubmit={onSubmit}
                subTitle={subTitle}
                title={title}
            />
        </>
    )
}

export const ConfirmModalUsage = withModalProvider(ConfirmModalComponent)