import React from "react";
import { Divider, Typography } from "@mui/material"
import { isLastElement } from "../../../../../utils/array"
import { grouppedParameters } from "../../data";
import { ParameterItem } from "./parameterItem";

type Props = {
    unit: string;
    unitIndex: number;
}

export const ParameterSection = ({ unit,  unitIndex }: Props) => {
    const relevantParameters = grouppedParameters[unit] || [];

    return (
        <div>
            <Typography className="parameters__group" variant="overline">Unit {unitIndex + 1}</Typography>
            {relevantParameters.map((p, index) => (
                <React.Fragment key={p.id}>
                    <ParameterItem parameter={p} key={p.id}/>              
                    {!isLastElement(relevantParameters, index) && <Divider />}                 
                </React.Fragment>
            ))}
        </div>
    )
}