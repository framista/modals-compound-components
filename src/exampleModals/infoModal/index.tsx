import { Button } from "@mui/material";
import Modal from "../../modals"
import { useModalContext, useOpenModal } from "../../modals/context"
import { withModalProvider } from "../../modals/hoc";
import { Content } from "./content";
import { buttonText, subTitle, title } from "./constants";

const InfoModalComponent = () => {
    const { state } = useModalContext();
    const openModal = useOpenModal();;

    return(
        <>
            <Button onClick={openModal} variant="contained">{buttonText}</Button>
            <Modal 
                isOpen={state.isOpen}
                maxWidth="sm"
                body={<Modal.Body content={<Content />} />}
                header={<Modal.Header title={title} subTitle={subTitle} />}
            />
        </>
    )
}

export const InfoModal = withModalProvider(InfoModalComponent)