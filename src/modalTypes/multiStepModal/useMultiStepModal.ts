import { useCallback, useEffect, useState } from "react"
import { useCloseModal } from "../../modals/context";

const firstStep = 1;

export const useMultiStepModal = (stepAmounts: number, isOpen: boolean) => {
    const [step, setStep] = useState(firstStep);

    const closeModal = useCloseModal();

    const isFirstStep = step === firstStep;
    const isLastStep = step === stepAmounts;

    const cancelText = isFirstStep ? 'Cancel' : 'Back';
    const submitText = isLastStep ? 'Submit' : 'Next';

    const goNext = useCallback(() => {
        setStep(prevStep => prevStep < stepAmounts ? prevStep + 1 : prevStep);
    }, [step])

    const goBack = useCallback(() => {
        if (isFirstStep) return closeModal();
        setStep(prevStep => prevStep - 1);
    }, [setStep, closeModal, isFirstStep])

    useEffect(() => {
        return () => setStep(firstStep);
    }, [isOpen])

    return { cancelText, goBack, goNext, step, submitText }
}