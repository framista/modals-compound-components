import React, { useCallback } from 'react';
import { Button, Divider } from '@mui/material';
import cx from 'clsx';
import { useChangeBackdropLoadingModal, useCloseModal } from '../context';
import './styles.css';

type Props = {
    cancelText?: string;
    hasCancel?: boolean;
    isSubmitDisabled?: boolean;
    onCancel?: () => void;
    onSubmit?: () => void | Promise<void>;
    option?: React.ReactNode;
    submitText?: string;
}

export const ModalFooter = ({ 
        cancelText = "Cancel",
        hasCancel, 
        isSubmitDisabled = false,
        onCancel, 
        onSubmit,
        option,
        submitText = "Submit",  
    }: Props) => {
    const handleCloseModal = useCloseModal();
    const handleChangeBackdropLoading = useChangeBackdropLoadingModal();

    const handleCancel = useCallback(() => {
        if (onCancel) return onCancel();
        handleCloseModal()
    }, [handleCloseModal])

    const handleSubmit = useCallback(async () => {
        try {
            if (isSubmitDisabled) return
            handleChangeBackdropLoading(true);
            {onSubmit && await onSubmit()}
        } catch (e) {
            console.log(e);
        } finally {
            handleChangeBackdropLoading(false);
        }
    }, [handleCloseModal, isSubmitDisabled, handleChangeBackdropLoading])
    

    return (
        <>
            <Divider />
            <div className="modal-footer">
                {option}
                <div className={cx('modal-footer__actions', option && 'modal-footer__actions--withOption')}>
                    {hasCancel && <Button onClick={handleCancel} variant='outlined'>{cancelText}</Button>}
                    {onSubmit && <Button onClick={handleSubmit} variant='contained' disabled={isSubmitDisabled}>{submitText}</Button>}
                </div>
            </div>
        </>
    )
}