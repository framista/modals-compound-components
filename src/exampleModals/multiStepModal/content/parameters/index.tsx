import { Checkbox, Divider, FormGroup, MenuItem, Select, Typography } from "@mui/material"
import { chartForParameter, grouppedParameters } from "../data";
import './styles.css';
import { isLastElement } from "../../../../utils/array";

export const Parameteres = () => {
    return (
        <div className="parameters">
            <Typography className="parameters__title" variant="overline" fontWeight={700}>Choose parameters</Typography>
            <FormGroup>
                {Object.keys(grouppedParameters).map((unit, unitIndex) => {
                    return (
                        <div key={unit}>
                            <Typography className="parameters__group" variant="overline">Group {unitIndex + 1}</Typography>
                            {
                                (grouppedParameters[unit] || []).map((p, index) => (
                                    <>
                                       <div key={p.id} className="parameters__row">
                                            <Checkbox defaultChecked size="small" />
                                            <div className="parameters__dot" style={{ background: p.color}} />
                                            <Typography variant="body2">{p.name}</Typography>
                                            <Select
                                                value={chartForParameter[p.type][0]}
                                                onChange={() => {}}
                                                size="small"
                                                variant="standard"
                                                sx={{ fontSize: '12px', margin: 0, paddingTop: '4px'}}
                                            >
                                                {chartForParameter[p.type].map(chartType => (
                                                    <MenuItem key={chartType} value={chartType}>{chartType}</MenuItem>
                                                ))}
                                            </Select> 
                                        </div>                
                                        {!isLastElement(grouppedParameters[unit] || [], index) && <Divider />}                 
                                    </>
                                ))
                            }
                        </div>
                    )
                    })
                }
                
            </FormGroup>
            <Typography className="parameters__text--error" variant="caption" color="error">Please choose parameters from one or two groups only</Typography>
        </div>
    )
}