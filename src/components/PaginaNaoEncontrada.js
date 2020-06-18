import React from 'react';
import { Grid } from '@material-ui/core';
import animation from '../assets/not-found.gif'

const PaginaNaoEncontrada = () =>
{
  return (
    <>
      <Grid container >
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <img alt="Not Found" height= "500" style={{marginLeft:"auto", marginRight:"auto", float :"none"}} src={animation}/>
        </Grid>
      </Grid>
    </>
  )
}

export default PaginaNaoEncontrada;
