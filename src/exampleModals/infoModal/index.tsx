import { Button } from "@mui/material";
import { useModalContext, useOpenModal } from "../../modals/context";
import { withModalProvider } from "../../modals/hoc";
import { buttonText, information, subTitle, title } from "./constants";
import { InfoModal } from "..";

const InfoModalComponent = () => {
    const { state } = useModalContext();
    const openModal = useOpenModal();;

    return(
        <>
            <Button onClick={openModal} variant="contained">{buttonText}</Button>
            <InfoModal 
                isOpen={state.isOpen}
                information={information}
                subTitle={subTitle}
                title={title}
            />
        </>
    )
}

export const InfoModalUsage = withModalProvider(InfoModalComponent)