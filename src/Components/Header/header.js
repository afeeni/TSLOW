import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';
import {Link} from 'react-router-dom';


export default function ButtonAppBar() {


  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title" component={Link} to={'/'}>
            The Secret Life of Wealth
          </Typography>
          <Button className="login" component={Link} to={'/login'}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
