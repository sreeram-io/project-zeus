import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core';
import {
  Alert,
} from '@sreeram.io/alpha';
import { NextPage } from 'next';

const useStyles = makeStyles(theme => ({
  navigation: {
    width: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  alert: {
    top: 'initial',
    bottom: 60,
  },
}));

const Index: NextPage = () => {
  const classes = useStyles();

  return <Fragment>
    <img className='img img--center animate-up-down' title='blog' loading='lazy' alt='blog' src={'/sections/dev.svg'} height='175' width='300' />
    <Alert duration={3000} type='success' className={classes.alert}>Choose one of the sections below.</Alert>
  </Fragment>
};

export default Index;
