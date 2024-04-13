import { Typography } from "@mui/material"
import './styles.css'

type Props = {
    text?: string;
}

export const ModalBodyTitle = ({ text }: Props) => {
    return (
       <Typography className="modalBody__title" variant="overline" fontWeight={700}>{text}</Typography>
    )
}

export const ModalBodyError = ({ text }: Props) => {
    return (
       <Typography className="modalBody__text--error" variant="caption" color="error">{text}</Typography>
    )
}