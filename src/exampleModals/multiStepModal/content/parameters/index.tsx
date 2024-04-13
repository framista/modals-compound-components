import { FormGroup } from "@mui/material"
import { useChartModalContext } from "../../context";
import { selectParametersError } from "../../reducer";
import { grouppedParameters } from "../data";
import { ParameterSection } from "./parameterSection";
import Modal from "../../../../modals";
import './styles.css';

export const Parameteres = () => {
    const { state } = useChartModalContext();
    const error = selectParametersError({ chartModal: state })

    return (
        <div className="parameters">
            <Modal.Typography.ModalBodyTitle text="Choose parameters"/>
             <FormGroup>
                {Object.keys(grouppedParameters).map((unit, unitIndex) => (
                    <ParameterSection 
                        key={unit}
                        unitIndex={unitIndex}
                        unit={unit}
                    />
                ))}
            </FormGroup>
            <Modal.Typography.ModalBodyError text={error} />
        </div>
    )
}