import Modal, { ModalProps } from "../../modals"
 import { Content } from "./content";

type Props = {
    isOpen: ModalProps['isOpen']
    title?: string;
    subTitle?: string;
    information: string;
}

export const InfoModal = ({ isOpen, title, subTitle, information}: Props) => {
    return(
        <Modal 
            isOpen={isOpen}
            maxWidth="sm"
            body={<Modal.Body content={<Content information={information} />} />}
            header={<Modal.Header title={title} subTitle={subTitle} />}
        />
    )
}