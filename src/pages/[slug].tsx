import React, { useEffect } from 'react';
import config from '@/config';
import { useRouter } from 'next/router';
import _get from 'lodash/get';
import { Blinkingcursor } from '@sreeram.io/alpha';

const Index = ({ img, firstRoute }) => {
  const router = useRouter();

  useEffect(() => {
    if(firstRoute) setTimeout(() => router.push(firstRoute), 500);
  }, [ firstRoute ]);

  return (
    <Blinkingcursor className={'img img--center blinkingcursor'} />
  );
};

Index.defaultProps = {
  img: '',
};

/* istanbul ignore next */
export const getServerSideProps = async ({ query: { slug = '' } }) => {
  const { sections } = config;

  if (!sections[slug]) return {
    redirect: {
      destination: '/404',
    },
  };

  return {
    props: {
      img: sections[slug].img,
      firstRoute: _get(sections, [ slug, 'links', '0', 'route' ], null),
    },
  };
};

export default Index;
