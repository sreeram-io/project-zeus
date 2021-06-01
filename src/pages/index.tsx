import React, { Fragment } from 'react';
import { NextPage } from 'next';
import { Navigation } from '@sreeram.io/alpha';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  navigation: {
    width: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}));

const Index: NextPage = () => {
  const classes = useStyles();

  return <Fragment>
      <img className='img img--center animate-up-down' title='blog' loading='lazy' alt='blog' src={'/sections/dev.svg'} height='175' width='300' />
      <Navigation className={classes.navigation} prev={{ route: '/story' , title: 'My Story' }} next={{ route: '/photos' , title: 'Photos' }} />
    </Fragment>
};

export default Index;
