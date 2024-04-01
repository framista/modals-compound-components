import { useEffect, useState } from "react";
import Modal, { ModalProps } from "../../modals"
 import { Content } from "./content";
import { confirmText } from "./content/constants";

type Props = {
    isOpen: ModalProps['isOpen']
    title?: string;
    subTitle?: string;
    information: string;
    onSubmit: () => void | Promise<void>
}

export const ConfirmModal = ({ isOpen, onSubmit, title, subTitle, information}: Props) => {
    const [confirmValue, setConfirmValue] = useState('');

    const isSubmitDisabled = confirmValue !== confirmText;

    useEffect(() => {
        return () => setConfirmValue('');
    }, [isOpen])

    return(
        <Modal 
            isOpen={isOpen}
            maxWidth="xs"
            header={<Modal.Header title={title} subTitle={subTitle} />}
            body={<Modal.Body content={<Content {...{information, confirmValue, setConfirmValue}} />} />}
            footer={<Modal.Footer hasCancel cancelText="No" submitText="Yes" onSubmit={onSubmit} isSubmitDisabled={isSubmitDisabled}/>}
        />
    )
}