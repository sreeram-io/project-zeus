import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Markdown,
  Content,
  Navigation,
} from '@sreeram.io/alpha';
import { getSession } from '@auth0/nextjs-auth0';
import isbot from 'isbot';
import { Typography } from '@material-ui/core';

import SocialLinks from '@/components/SocialLinks/SocialLinks';
import { getUserData } from '@/store/app/app.api';
import config from '@/config';
import { scrollToTop } from '@/utils/helpers';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'scroll',
  },
  content: {
    maxWidth: 800,
    padding: 15,
    [theme.breakpoints.up('sm')]: {
      minWidth: 600,
      margin: 20,
    },
    [theme.breakpoints.up('md')]: {
      minWidth: 800,
      margin: '20px auto',
    },
  },
  navigation: {
    position: 'sticky',
    bottom: 0,
    borderRadius: 0,
    background: '#0f1113',
  },
  footer: {
    textAlign: 'center',
    display: 'block',
    width: '100%',
    fontStyle: 'italic',
  }
}));

const Page = ({ content, navigationProps }) => {
  const classes = useStyles();

  useEffect(() => {
    scrollToTop(document.getElementById('content'));
  }, [content]);

  return (
    <div className={classes.root} id='content'>
      <div className={classes.content}>
        <>
          <Markdown>
            {`${content}\nThank you | நன்றி | നന്ദി | धन्यवाद | Dankeschön 🙏`}
          </Markdown>
          <Navigation {...navigationProps} className={classes.navigation} />
          <SocialLinks />
          <Typography variant="caption" className={classes.footer}>If only one gets inspired, its a victory.</Typography>
        </>
      </div>
    </div>
  );
};

export default Page;

/* istanbul ignore next */
export const getServerSideProps = async ({ query: { slug = '', post = '' }, req, res }) => {
  const { sections } = config;
  const currentPath = `/${slug}/${post}`;
  const { paid: isPremiumRequired, auth: isAuthRequired } = sections[slug];
  const index = sections[slug].links.findIndex(link => link.route === currentPath);
  const isBot = isbot(req.headers['user-agent']);
  const session = await getSession(req, res);
  const isUserPremium = session ? (await getUserData(session.user.sub)).tier : false;

  if (isAuthRequired && !session && !isBot) return {
    redirect: {
      destination: `/login?redirectTo=${currentPath}`,
      permanent: false,
    },
  };

  if (isPremiumRequired && !isUserPremium && !isBot) return {
    redirect: {
      destination: '/premium',
      permanent: false,
    },
  };

  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      content: require(`src/data${currentPath}.md`).default,
      navigationProps: {
        prev: null,
        next: sections[slug].links[index + 1] || sections[slug].links[0],
      },
    },
  };
};
