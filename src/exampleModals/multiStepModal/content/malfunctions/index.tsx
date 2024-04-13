import { Checkbox, Divider, Typography } from "@mui/material"
import { isLastElement } from "../../../../utils/array"
import Modal from "../../../../modals"
import { useChartModalContext } from "../../context"
import { selectMalfunctionsError, toogleMalfunction } from "../../reducer"
import { malfunctions } from "../data"
import './styles.css'

export const Malfunctions = () => {
    const { state, dispatch } = useChartModalContext();
    const error = selectMalfunctionsError({ chartModal: state });

    return (
        <>
            <Modal.Typography.ModalBodyTitle text="Choose Malfunctions"/>
            <div className="malfunctions__list">
                {malfunctions.map((m, index) => (
                    <div key={m.id}>
                        <div className="malfunctions__item" onClick={() => dispatch(toogleMalfunction(m.id))}>
                            <Checkbox id={m.id} checked={state.selectedMalfunctions.includes(m.id)}  size="small" />
                            <div className="dot" style={{ background: m.color}} />
                            <Typography className="label" variant="body2">{m.name}</Typography>            
                        </div>
                        {!isLastElement(malfunctions, index) && <Divider />}                 
                    </div>
                ))}
            </div>
            <Modal.Typography.ModalBodyError text={error} />
        </>
    )
}