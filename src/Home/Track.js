import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Media = ({url}) => (
  <iframe
    width="100%"
    height="100%"
    src={url}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
)

const Track = ({artist, track, mediaSrc}) => {
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid xs={6} item>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {track}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {artist}
            </Typography>
          </CardContent>
        </Grid>
        <Grid xs={6} item>
          <CardMedia
            component={() => <Media url={mediaSrc} />}
            height="100%"
            alt={`${artist}-${track}`}
          ></CardMedia>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Track;
