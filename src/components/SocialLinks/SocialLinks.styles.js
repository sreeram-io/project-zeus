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
    margin: 1,
    fontSize: 0,
  },
  socialIcon: {
    height: 30,
    width: 30,
  },
});
