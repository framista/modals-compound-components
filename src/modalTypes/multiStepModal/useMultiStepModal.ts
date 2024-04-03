import { useCallback, useEffect, useState } from "react"

const firstStep = 1;

export const useMultiStepModal = (stepAmounts: number, isOpen: boolean) => {
    const [step, setStep] = useState(firstStep);
    const isFirstStep = step === firstStep;
    const isLastStep = step === stepAmounts;

    const cancelText = isFirstStep ? 'Cancel' : 'Back';
    const submitText = isLastStep ? 'Submit' : 'Next';

    const goNext = useCallback(() => {
        setStep(prevStep => prevStep < stepAmounts ? prevStep + 1 : prevStep);
    }, [])

    const goBack = useCallback(() => {
        setStep(prevStep => prevStep > 1 ? prevStep - 1 : prevStep);
    }, [setStep])

    useEffect(() => {
        return () => setStep(firstStep);
    }, [isOpen])

    return { cancelText, goBack, goNext, step, submitText }
}