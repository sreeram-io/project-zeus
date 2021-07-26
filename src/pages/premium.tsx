import React from 'react';

import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { StripeCheckout } from '@sreeram.io/alpha';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  div: {
    padding: 20,
    display: 'flex',
    margin: 'auto',
    flexWrap: 'wrap',
  },
  card: {
    maxWidth: 280,
    padding: 10,
    margin: 'auto',
    '&:first-child': {
      marginRight: 20,
      [theme.breakpoints.down('sm')]: {
        margin: 'auto',
        marginBottom: 20,
      },
    },
    background: 'transparent',
    boxShadow: 'none',
  },
}));

const Premium = () => {
  const classes = useStyles();
  const router = useRouter();
  const promise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  return (
    <div className={classes.div}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Sreeram Padmanabhan'
            image='/sections/dev.svg'
            title='Sreeram Padmanabhan' />
          <CardContent>
            <Typography gutterBottom variant='h6' component='h2'>
            Membership <span style={{ float: 'right' }}>£49</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <Elements stripe={promise}>
          <StripeCheckout onSuccess={() => router.push('/api/stripe/callback')} />
        </Elements>
      </Card>
    </div>
  );
};

export default Premium;
