import React, { useState } from 'react';
import '../index.css';
import { Divider, Typography, Slider, Grid, Input } from '@material-ui/core';

export default function DesafioCor() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [color, setColor] = useState('rgb('+ [red,green,blue].join(',') + ')');

  const step = 1;
  const min = 0;
  const max = 255;

  function mudarCor() {
    setColor('rgb('+ [red,green,blue].join(',') + ')');
  }

  return (
    <div className = 'App'>
      <Typography variant="h5"> Selecione uma cor</Typography>
      <Divider/>
      <Typography gutterBottom>Vermelho </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={red}
            aria-labelledby="input-slider"
            step={step}
            min={min}
            max={max}
            onChange={(e,v) => {setRed(v); mudarCor()}}
          />
        </Grid>
        <Grid item>
          <Input
            value={red}
            margin="dense"
            disabled
          />
        </Grid>
      </Grid>

      <Typography gutterBottom>Verde </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={green}
            aria-labelledby="input-slider"
            step={step}
            min={min}
            max={max}
            onChange={(e,v) => {setGreen(v); mudarCor()}}
          />
        </Grid>
        <Grid item>
          <Input
            value={green}
            margin="dense"
            disabled
          />
        </Grid>
      </Grid>

      <Typography gutterBottom>Azul </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={blue}
            aria-labelledby="input-slider"
            step={step}
            min={min}
            max={max}
            onChange={(e,v) => {setBlue(v); mudarCor()}}
          />
        </Grid>
        <Grid item>
          <Input
            value={blue}
            margin="dense"
            disabled
          />
        </Grid>
      </Grid>

      <Divider/>
      <div style={{width: 100, height:100, backgroundColor: color}}/>
    </div>
    );
}
