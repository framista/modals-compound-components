import React from "react";
import Modal, { ModalProps } from "../../modals"
import { useMultiStepModal } from "./useMultiStepModal";
import { ModalFooterProps } from "../../modals/footer";

type Props = {
    content: React.ReactElement;
    isOpen: ModalProps['isOpen'];
    isSubmitDisabled?: boolean;
    title?: string;
    subTitle?: string;
    onSubmit: ModalFooterProps['onSubmit'];
    stepsAmount: number;
}

export const MultiStepModal = ({ content, isOpen, isSubmitDisabled, onSubmit, title, subTitle, stepsAmount }: Props) => {
    const { cancelText, goBack, goNext, step, submitText } = useMultiStepModal(stepsAmount, isOpen, onSubmit);

    return(
        <Modal 
            isOpen={isOpen}
            maxWidth="xs"
            header={<Modal.Header title={title} subTitle={subTitle} />}
            stepper={<Modal.Stepper step={step} stepsAmount={stepsAmount}/>}
            body={<Modal.Body content={React.cloneElement(content, { step })} />}
            footer={<Modal.Footer hasCancel cancelText={cancelText} submitText={submitText} onCancel={goBack} onSubmit={goNext} isSubmitDisabled={isSubmitDisabled}/>}
        />
    )
}