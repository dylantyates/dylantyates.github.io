import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Track from './Track';

const Tracks = () => (
  <Grid container spacing={2}>
    <Grid xs={12} item>
      <Typography variant="h2" gutterBottom>
        Music
      </Typography>
    </Grid>
    <Grid xs={12} md={6} lg={12} item>
      <Track
        artist="Khruangbin"
        track="Dern Kala"
        mediaSrc="https://www.youtube.com/embed/X3yHzw_JHTY"
      />
    </Grid>
    <Grid xs={12} md={6} lg={12} item>
      <Track
        artist="Orgone"
        track="Sophisticated Honky"
        mediaSrc="https://www.youtube.com/embed/g5M3KYB-VX0"
      />
    </Grid>
    <Grid xs={12} md={6} lg={12} item>
      <Track
        artist="The Littles"
        track="Fatemah Sultan"
        mediaSrc="https://www.youtube.com/embed/4AudlBsOQ7E"
      />
    </Grid>
    <Grid xs={12} md={6} lg={12} item>
      <Track
        artist="The Sweet Enoughs"
        track="Dream Puppy"
        mediaSrc="https://www.youtube.com/embed/gcAGL4BK__c"
      />
    </Grid>
    <Grid xs={12} md={6} lg={12} item>
      <Track
        artist="Dabeull &amp; Holybrune"
        track="Day &amp; Night"
        mediaSrc="https://www.youtube.com/embed/rDVOqLGZgW0"
      />
    </Grid>
    <Grid xs={12} md={6} lg={12} item>
      <Track
        artist="Magic Sam"
        track="All Of Your Love"
        mediaSrc="https://www.youtube.com/embed/SvzPNBDt7Eo"
      />
    </Grid>
    <Grid xs={12} md={6} lg={12} item>
      <Track
        artist="Homeshake"
        track="Anything At All"
        mediaSrc="https://www.youtube.com/embed/KpwWgwe869g"
      />
    </Grid>
    <Grid xs={12} md={6} lg={12} item>
      <Track
        artist="Skinshape"
        track="After Midnight"
        mediaSrc="https://www.youtube.com/embed/EuZlv1r2Fl0"
      />
    </Grid>
  </Grid>
)

export default Tracks;
