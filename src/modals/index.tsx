import React from "react";
import { Dialog, DialogProps, Divider } from "@mui/material"
import { ModalHeader } from "./header";
import { ModalBody } from "./body";

type Props = {
    isOpen: boolean;
    header: React.ReactNode;
    body: React.ReactNode;
    maxWidth?: DialogProps['maxWidth'];
}

const Modal = ({ body, header, isOpen, maxWidth = 'md' }: Props) => {

    return (
        <Dialog 
            open={isOpen}
            fullWidth
            maxWidth={maxWidth}
         > 
            {header}
            <Divider />
            {body}
        </Dialog>
    )
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;