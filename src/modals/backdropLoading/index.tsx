import { Backdrop, CircularProgress } from "@mui/material"
import { useModalContext } from "../context";
import { selectIsBackdropLoadingShown } from "../reducer";
import './styles.css';

export const BackdropLoading = () => {
    const { state } = useModalContext();
    const isOpen = selectIsBackdropLoadingShown({ modal: state });

    return (
        <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
            open={isOpen}
            classes={{ root: 'backdrop-loading' }}
        >
            <CircularProgress className="backdrop-loading__progress" color="primary" />
        </Backdrop>
    )
}