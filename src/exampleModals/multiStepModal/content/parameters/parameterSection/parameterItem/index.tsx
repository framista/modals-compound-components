import { useCallback, useMemo } from "react";
import { Checkbox, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { chartForParameter } from "../../../data"
import { ChartKind, Parameter } from "../../../../types"
import { useChartModalContext } from "../../../../context";
import { changeChartKindForParameterId, toogleParameter } from "../../../../reducer";

type Props = {
    parameter: Parameter;
}

export const ParameterItem = ({ parameter }: Props) => {
    const { id, color, type, name } = parameter;
    const { state: { selectedParameters, chartKindForParameterId } , dispatch } = useChartModalContext();

    const onClickCheckbox = useCallback(() => {
        dispatch(toogleParameter(parameter));
    }, [dispatch, parameter])

    const isSelected = useMemo(() => selectedParameters.some(p => p.id === id), [selectedParameters, id]);

    const onChangeKind = useCallback((event: SelectChangeEvent) => {
        const kind = event.target.value as ChartKind;
        dispatch(changeChartKindForParameterId({ id, kind }))
    }, [dispatch, id])

    return (
        <div key={id} className="parameters__row">
            <Checkbox checked={isSelected} onChange={onClickCheckbox} size="small" />
            <div className="parameters__dot" style={{ background: color}} />
            <Typography onClick={onClickCheckbox} className="parameters__label" variant="body2">{name}</Typography>
            <Select
                value={chartKindForParameterId[id] || chartForParameter[type][0]} // TODO: remove or
                onChange={onChangeKind}
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