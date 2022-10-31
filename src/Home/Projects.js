import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Project from './Project';

const Projects = () => (
  <Grid container spacing={2}>
    <Grid xs={12} item>
      <Typography variant="h2" gutterBottom>
        Code
      </Typography>
    </Grid>
    <Grid xs={12} sm={6} item>
      <Project
        image="slot-game.png"
        title="React Slot Game"
        body="Slot machine game"
        link="slot-game"
      />
    </Grid>
    <Grid xs={12} sm={6} item>
      <Project
        image="unity-game.png"
        title="Unity Game"
        body="WebGL Unity Game"
        link="unity-game"
      />
    </Grid>
  </Grid>
)

export default Projects;
