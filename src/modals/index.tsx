import React from "react";
import { Dialog, DialogProps } from "@mui/material"
import { ModalHeader } from "./header";
import { ModalBody } from "./body";
import { ModalFooter } from "./footer";
import { BackdropLoading } from "./backdropLoading";
import { ModalStepper } from "./stepper";
import * as ModalTypography from './typography';
import './styles.css';

export type ModalProps = {
    isOpen: boolean;
    header: React.ReactNode;
    stepper?: React.ReactNode;
    body: React.ReactNode;
    footer?: React.ReactNode;
    maxWidth?: DialogProps['maxWidth'];
}

const Modal = ({ body, header, footer, stepper, isOpen, maxWidth = 'md' }: ModalProps) => {

    return (
        <div className="dialog">
            <Dialog 
                classes={{ paper: 'dialog-container'}}
                open={isOpen}
                fullWidth
                maxWidth={maxWidth}
            > 
                <div className="dialog-content">
                    <BackdropLoading />
                    {header}
                    {stepper}
                    {body}
                    {footer}
                </div>
            </Dialog>
        </div>
    )
}

Modal.Header = ModalHeader;
Modal.Stepper = ModalStepper;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Typography = ModalTypography;

export default Modal;