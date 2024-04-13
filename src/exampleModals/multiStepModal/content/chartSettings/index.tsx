import { useCallback } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import Modal from "../../../../modals";
import { useChartModalContext } from "../../context";
import { ChartModalState, changeLeftYAxis, setName } from "../../reducer";
import { createUnit } from "../../utils";
import { noChartNameProvided } from "../../constants";
import './styles.css';

export const ChartSettings = () => {
    const { state: { name, y1Unit, selectedUnits } , dispatch } = useChartModalContext();

    const handleChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(setName(e.target.value))
    }, [dispatch, setName])


    const handleChangeY1Unit = useCallback((event: SelectChangeEvent<ChartModalState['y1Unit']>) => {
        dispatch(changeLeftYAxis(event.target.value))
    }, [dispatch])

    return (
        <div className="chartSettings">
            <Modal.Typography.ModalBodyTitle text="Additional settings"/>
            <TextField className="chartSettings__input" size="small" label="Chart name" value={name} variant="standard" onChange={handleChangeName}/>
            <FormControl fullWidth className="chartSettings__selectForm">
                <InputLabel variant="standard">Unit for left y axis</InputLabel>
                <Select
                    value={y1Unit} 
                    onChange={handleChangeY1Unit}
                    size="small"
                    variant="standard"
                    label="Unit for left y axis"
                >
                    {selectedUnits.map(unit => (
                        <MenuItem key={unit} value={createUnit(unit)}>{createUnit(unit)}</MenuItem>
                        ))}
                </Select> 
            </FormControl>
            <Modal.Typography.ModalBodyError text={!name.trim() ? noChartNameProvided : ''} />
         </div>
    )
}