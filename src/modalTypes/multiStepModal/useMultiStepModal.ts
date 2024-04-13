import { useCallback, useEffect, useState } from "react"
import { useCloseModal } from "../../modals/context";
import { ModalProps } from "../../modals";
import { ModalFooterProps } from "../../modals/footer";

const firstStep = 1;

export const useMultiStepModal = (stepAmounts: number, isOpen: ModalProps['isOpen'], onSubmit: ModalFooterProps['onSubmit']) => {
    const [step, setStep] = useState(firstStep);

    const closeModal = useCloseModal();

    const isFirstStep = step === firstStep;
    const isLastStep = step === stepAmounts;

    const cancelText = isFirstStep ? 'Cancel' : 'Back';
    const submitText = isLastStep ? 'Submit' : 'Next';

    const goNext = useCallback(async () => {
        if (isLastStep && onSubmit) {
           await onSubmit();
        }
        setStep(prevStep => !isLastStep ? prevStep + 1 : prevStep);
    }, [isLastStep])

    const goBack = useCallback(() => {
        if (isFirstStep) return closeModal();
        setStep(prevStep => prevStep - 1);
    }, [setStep, closeModal, isFirstStep])

    useEffect(() => {
        return () => setStep(firstStep);
    }, [isOpen])

    return { cancelText, goBack, goNext, step, submitText }
}