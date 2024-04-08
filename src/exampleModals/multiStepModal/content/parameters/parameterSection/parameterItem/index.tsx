import { useCallback, useMemo } from "react";
import { Checkbox, MenuItem, Select, Typography } from "@mui/material"
import { chartForParameter } from "../../../data"
import { Parameter } from "../../../../types"
import { useChartModalContext } from "../../../../context";
import { toogleParameter } from "../../../../reducer";

type Props = {
    parameter: Parameter;
}

export const ParameterItem = ({ parameter }: Props) => {
    const { id, color, type, name } = parameter;
    const { state: { selectedParameters } , dispatch } = useChartModalContext();

    const onClickCheckbox = useCallback(() => {
        dispatch(toogleParameter(parameter));
    }, [dispatch, parameter])

    const isSelected = useMemo(() => selectedParameters.some(p => p.id === id), [selectedParameters, id]);

    return (
        <div key={id} className="parameters__row">
            <Checkbox checked={isSelected} onChange={onClickCheckbox} size="small" />
            <div className="parameters__dot" style={{ background: color}} />
            <Typography onClick={onClickCheckbox} className="parameters__label" variant="body2">{name}</Typography>
            <Select
                value={chartForParameter[type][0]}
                onChange={() => {}}
                size="small"
                variant="standard"
                sx={{ fontSize: '12px', margin: 0, paddingTop: '4px'}}
            >
                {chartForParameter[type].map(chartType => (
                    <MenuItem key={chartType} value={chartType}>{chartType}</MenuItem>
                ))}
            </Select> 
        </div>  
    )
}