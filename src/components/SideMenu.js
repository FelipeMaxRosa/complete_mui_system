import { makeStyles, withStyles } from '@material-ui/core';
import React from 'react';

// withStyles & makeStyles
const style = {
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    width: '320px',
    height: '100%',
    backgroundColor: '#253053'
  }
}

const SideMenu = ({classes}) => {
  return (
    <div className={classes.sideMenu}>
      
    </div>
  )
}

export default withStyles(style)(SideMenu);

