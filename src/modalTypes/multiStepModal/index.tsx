import React from "react";
import Modal, { ModalProps } from "../../modals"
import { useMultiStepModal } from "./useMultiStepModal";

type Props = {
    content: React.ReactElement;
    isOpen: ModalProps['isOpen'];
    title?: string;
    subTitle?: string;
    onSubmit: () => void | Promise<void>;
    stepsAmount: number;
}

export const MultiStepModal = ({ content, isOpen, onSubmit, title, subTitle, stepsAmount }: Props) => {
    const { cancelText, goBack, goNext, step, submitText } = useMultiStepModal(stepsAmount, isOpen);

    return(
        <Modal 
            isOpen={isOpen}
            maxWidth="xs"
            header={<Modal.Header title={title} subTitle={subTitle} />}
            stepper={<Modal.Stepper step={step} stepsAmount={stepsAmount}/>}
            body={<Modal.Body content={React.cloneElement(content, { step })} />}
            footer={<Modal.Footer hasCancel cancelText={cancelText} submitText={submitText} onCancel={goBack} onSubmit={goNext}/>}
        />
    )
}