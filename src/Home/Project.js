import React from 'react';
import { string } from 'prop-types';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Project = ({ image, title, body, link }) => {
  return (
    <Container sx={{
      display: 'flex',
      height: '100%',
      justifyContent: 'space-between',
      flexDirection: 'column'
    }}>
      <Card sx={{
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
        flexDirection: 'column'
      }}>
        {image && (
          <CardMedia
            component="img"
            height="140"
            image={`${window.location.href}media/images/${image}`}
            alt={title}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
          {link && (
            <Button
              variant="contained"
              size="medium"
              href={link}
              sx={{ fontWeight: 600, marginBottom: 2 }}
            >
              View
            </Button>
          )}
        </CardActions>
      </Card>
    </Container>
  );
}

Project.propTypes = {
  image: string,
  title: string.isRequired,
  body: string,
  link: string,
}

Project.defaultProps = {
  image: null,
  body: null,
  link: null,
}

export default Project;
