import React from 'react';
import { NextPage } from 'next';

const Index: NextPage = () => {
  return <img className='img img--center animate-up-down' title='blog' loading='lazy' alt='blog' src={'/sections/dev.svg'} height='175' width='300' />
};

export default Index;
