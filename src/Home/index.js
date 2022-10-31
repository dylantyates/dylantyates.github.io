import React from 'react';
import Grid from '@mui/material/Grid';
import Projects from './Projects';
import Tracks from './Tracks';

const Home = () => (
  <Grid container spacing={6} sx={{ position: 'relative', top: 20 }}>
    <Grid xl={6} item>
      <Projects />
    </Grid>
    <Grid xl={6} item>
      <Tracks />
    </Grid>
    <Grid item>
    </Grid>
  </Grid>
)

export default Home;
