import React, { useEffect } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { Layout, LayoutType } from '@sreeram.io/alpha';
import type {
  AppProps as NextAppProps,
  AppContext as NextAppContext,
} from 'next/app';
import { END } from 'redux-saga';

import config from '@/config';
import { wrapper } from '@/store';
import { loadData } from '@/store/app/app.actions';
import { userTierSelector, sessionSelector, avatarSelector } from '@/store/app/app.selectors';
import '@/styles/styles.scss';
import theme from '@/theme';
import { removeJSS } from '@/utils/helpers';

export interface MyAppProps extends NextAppProps {
  layoutProps?: LayoutType,
}

const App = ({ Component, pageProps, layoutProps }: MyAppProps) => {

  useEffect(() => {
    removeJSS();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

App.defaultProps = {
  Component: () => null,
  pageProps: {},
  layoutProps: {},
};

App.getInitialProps = async ({ Component, ctx }: NextAppContext) => {
  const { store, query: { slug = '', post = '' }, req, res } = ctx;
  const { title, description, sections: _sections, seo } = config;

  if (req) store.dispatch(loadData(req, res));
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  store.dispatch(END);
  await (store as any).sagaTask.toPromise();

  const isUserLoggedIn = !!sessionSelector(store.getState());
  const isUserPremium = !!userTierSelector(store.getState());
  const avatarUrl = avatarSelector(store.getState());
  const index = Object.keys(_sections).indexOf(slug.toString());
  const sections = Object.values(_sections);

  const getTitle = () => {
    if (!_sections[slug]) return seo.title;

    if (slug && post) {
      const { title: seoTitle } = _sections[slug.toString()].links.find(link => link.route === `/${slug}/${post}`);
      return `${seoTitle} | ${seo.title}`;
    } else if (slug) {
      const { title: seoTitle } = _sections[slug.toString()];
      return `${seoTitle} | ${seo.title}`;
    }
    return seo.title;
  };

  const currentPath = `${slug ? `/${slug}` : '/'}${post ? `/${post}` : ''}`

  return {
    pageProps,
    layoutProps: {
      sections,
      navbarProps: {
        titleLeftClass: '_shimmer',
        isUserLoggedIn,
        isUserPremium,
        title,
        description,
        loginRedirectUrl: currentPath,
        avatarUrl,
      },
      sidebarProps: {
        title,
      },
      sidebarContentProps: {
        isUserLoggedIn,
        isUserPremium,
        sections: sections.filter(section => !section.hidden),
      },
      bottomBarProps: {
        value: index,
        list: sections.map(section => ({
          ...section,
          showLabel: true,
        })),
      },
      seoProps: {
        ...seo,
        ogUrl: `${seo.domain}${currentPath}`,
        title: getTitle(),
      },
    },
  };
};

export default wrapper.withRedux(App);
