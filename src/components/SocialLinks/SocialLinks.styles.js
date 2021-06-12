export default theme => ({
  social: {
    display: 'flex',
    marginTop: 15,
    [theme.breakpoints.up('sm')]: {
      marginTop: 20,
    },
    justifyContent: 'center',
    width: '100%',
  },
  socialLink: {
    margin: 4,
    fontSize: 0,
  },
  socialIcon: {
    height: 24,
    width: 24,
    color: 'white',
  },
});
