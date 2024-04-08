import { FormGroup, Typography } from "@mui/material"
import { useChartModalContext } from "../../context";
import { selectParametersError } from "../../reducer";
import { grouppedParameters } from "../data";
import { ParameterSection } from "./parameterSection";
import './styles.css';

export const Parameteres = () => {
    const { state } = useChartModalContext();
    const error = selectParametersError({ chartModal: state })

    return (
        <div className="parameters">
            <Typography className="parameters__title" variant="overline" fontWeight={700}>Choose parameters</Typography>
            <FormGroup>
                {Object.keys(grouppedParameters).map((unit, unitIndex) => (
                    <ParameterSection 
                        key={unit}
                        unitIndex={unitIndex}
                        unit={unit}
                    />
                ))}
            </FormGroup>
           <Typography className="parameters__text--error" variant="caption" color="error">{error}</Typography>        
        </div>
    )
}