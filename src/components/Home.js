import React from 'react';
import {Typography, Grid, Card, CardContent, CardMedia, Divider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import igti from '../assets/igti.png';
import me from '../assets/me.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 1 auto',
  },
  cover: {
    width: '30%',
  },
}));

const cardStyle = {
  display: 'block',
  width: '30vw',
  transitionDuration: '0.3s',
  height: '45vw'
}

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4"> Exercícios práticos e desafios do bootcamp</Typography>
      <Divider/>
      {/* <Grid container> */}
        {/* <Grid item xs={6} style={{textAlign: 'center'}}> */}
          <Card className={classes.root} style={{height: '400px'}}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Patrick Brison Januario
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <a href="https://github.com/PatrickBJ" target="_blank">Meu GitHub</a>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <a href="https://www.linkedin.com/in/patrick-brison-januario-02871912a" target="_blank">Meu Linkedln</a>
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.cover}
              image={me}
              title="Eu"
            />
          </Card>
        {/*</Grid>
        <Grid item xs={6} style={{textAlign: 'center'}}>
          <Card className={classes.root}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                IGTI
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <a href="https://www.igti.com.br" target="_blank">Link site</a>
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.cover}
              image={igti}
              title="Eu"
            />
          </Card>
        </Grid>
         <Grid item xs={6} style={{textAlign: 'center'}}>
          <Card className={classes.root}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                IGTI
              </Typography>
              <a href="https://www.igti.com.br" target="_blank">Link site</a>
            </CardContent>
            <CardMedia
            className={classes.cover}
            image={igti}
            title="Eu"
          />
          </Card>
        </Grid> 
      // </Grid>*/}
    </div>
    );
}
