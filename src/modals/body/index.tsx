import React from "react"
import './styles.css'

type Props = {
    content: React.ReactNode;
}

export const ModalBody = ({content}: Props) => {
    return (
        <div className="modal-body">
            {content}
        </div>
    )
}