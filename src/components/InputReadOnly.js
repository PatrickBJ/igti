import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import {calculaPorcentagem, converteValor} from '../utils/calculos';

const InputReadOnly = (props)=>{

  const [label, value, salary, color] = props.props;

  return(
    <>
      <form autoComplete="off">
        <TextField 
            style= {{width: "100%"}} 
            style= {{width: "100%"}} 
            disabled={true}
            value= {`${converteValor(value)} ${calculaPorcentagem(value, salary)}`}
            label= {label}
            style={{color: color, width:'100%'}}
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>
            }}
            />
      </form>
    </>
  );
}

export default InputReadOnly