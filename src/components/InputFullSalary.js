import React from 'react';
import { TextField } from '@material-ui/core';

const InputFullSalary = (props)=>{

    const [label, value, setValue] = props.props;

    return(
        <TextField 
            autoFocus
            label={label}
            type= "number"
            value={value}
            style={{width: "100%", paddingBottom: '2rem'}}
            onChange={(e)=> setValue(e.target.value)} />
    );
}

export default InputFullSalary