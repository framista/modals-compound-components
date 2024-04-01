import { useCallback } from 'react';
import { TextField, Typography } from '@mui/material';
import { confirmText, confirmationMessage1, confirmationMessage2 } from './constants';
import './styles.css';

type Props = {
    information: string;
    confirmValue: string;
    setConfirmValue: (v: Props['confirmValue']) => void;
}

export const Content = ({ information, confirmValue, setConfirmValue }: Props) => {
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setConfirmValue(e.target.value)
    }, [setConfirmValue]);

    return (
        <div className="confimModal content__container">
            <Typography variant='body2'>{information}</Typography>
            <div className='content__confirmContainer'>
                <Typography className='content__confirmText' variant='caption'>{confirmationMessage1}</Typography>
                <Typography className='content__confirmText' variant='caption' fontWeight={700}>{' '}{confirmText}{' '}</Typography>
                <Typography className='content__confirmText' variant='caption'>{confirmationMessage2}</Typography>
            </div>
            <TextField 
                value={confirmValue}
                onChange={onChange}
                size='small' 
                className='content__confirmField' 
                placeholder={confirmText}
            />
        </div>
    )
}