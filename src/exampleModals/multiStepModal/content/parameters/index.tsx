import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material"
import { parameters } from "../data"

export const Parameteres = () => {
    return (
        <div>
            <Typography variant="overline" fontWeight={700}>Choose Malfunctions:</Typography>
            <FormGroup>
                {parameters.map(p => (
                    <FormControlLabel
                        key={p.id}
                        control={<Checkbox defaultChecked />} 
                        label={p.name} 
                        classes={{ label: 'label'}}
                    />                    
                ))}
            </FormGroup>
        </div>
    )
}