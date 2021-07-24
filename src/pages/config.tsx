import React, { useEffect, useState } from 'react';

import { Content } from '@sreeram.io/alpha';
import { NextPage } from 'next';

const Config: NextPage = () => {

  const [ data, setData ] = useState({});

  useEffect(() => {
    setData(window.__NEXT_DATA__);
  });

  return <Content>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </Content>
};

export default Config;
