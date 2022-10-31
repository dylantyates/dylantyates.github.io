import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Menu = () => {
  return (
    <Box>
      <AppBar sx={{ backgroundColor: '#222'}}>
        <Container>
          <Toolbar disableGutters>
            <Avatar alt="Dylan Yates" src="https://avatars.githubusercontent.com/u/14165879" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
              Dylan Yates
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Menu;
