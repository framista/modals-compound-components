import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material"
import { malfunctions } from "../data"

export const Malfunctions = () => {
    return (
        <div>
            <Typography variant="overline" fontWeight={700}>Choose Malfunctions:</Typography>
            <FormGroup>
                {malfunctions.map(m => (
                    <FormControlLabel 
                        key={m.id}
                        control={<Checkbox defaultChecked />} 
                        label={m.name} 
                        classes={{ label: 'label'}}
                    />                    
                ))}
            </FormGroup>
        </div>
    )
}