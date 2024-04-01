import CloseIcon from '@mui/icons-material/Close';
import { Divider, IconButton, Typography } from '@mui/material';
import { useCloseModal } from '../context';
import './styles.css';

type Props = {
    title?: string;
    subTitle?: string;
}

export const ModalHeader = ({ title, subTitle }: Props) => {
    const handleCloseModal = useCloseModal();

    return (
        <>
            <div className='modal-header'>
                <div className='modal-header__titles'>
                    {title && <Typography variant='h5' className='modal-header__title'>{title}</Typography>}
                    {subTitle && <Typography variant='caption' className='modal-header__subtitle'>{subTitle}</Typography>}
                </div>
                <IconButton onClick={handleCloseModal}>
                    <CloseIcon />
                </IconButton>
            </div>
            <Divider />
        </>
    )
}