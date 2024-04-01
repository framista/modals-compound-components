import { Typography } from '@mui/material';
import './styles.css';

type Props = {
    information: string;
}

export const Content = ({ information }: Props) => {
    return (
        <div className="info-modal content__container">
            <Typography variant='body2'>{information}</Typography>
        </div>
    )
}