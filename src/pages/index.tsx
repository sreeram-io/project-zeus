import React from 'react';
import { NextPage } from 'next';

const Index: NextPage = () => {
  return <img className='img img--center animate-up-down' title='blog' loading='lazy' alt='blog' src={'/sections/dev.svg'} height='200' width='375' />
};

export default Index;
