/* eslint-disable camelcase */

const domain = process.env.NEXT_PUBLIC_DOMAIN;

module.exports = {
  title: 'Sreeram Padmanabhan',
  description: 'Web of thoughts',
  seo: {
    author: 'Sreeram Padmanabhan',
    themeColor: '#0563d8',
    description: 'An artist of the web, perfectionist engineering the web using JavaScript. I emphasise on creativity, time management and efficiency.',
    domain,
    gtmId: 'GTM-KFQNDM8',
    keywords: 'sreer.am, sreeram, #sreeram, sreeram padmanabhan, sreeram god, sreeram movie, sreeram actor, jsdrome, siri, london, berlin, india, uk, germany, trivandrum, web, web developer, web engineer, creativity, Design your life, engineer, frontend, delivery hero, tech lead, wipro, mjam, lloyds bank, leetcode, leetcode solutions, leetcode javascript solutions',
    ogImage: `${domain}/img/og_image.jpg`,
    ogImageAlt: 'Sreeram Padmanabhan',
    ogSiteName: 'Sreeram Padmanabhan | Web of thoughts',
    ogType: 'website',
    ogUrl: domain,
    title: 'Sreeram Padmanabhan | Web of thoughts',
    twitterId: "",
    org: 'jsDrome',
    orgImage: `${domain}/img/icon-256.png`,
  },
  seed: {
    short_name: "sreeram.io",
    name: "sreeram.io",
    start_url: "/",
    background_color: "#000000",
    display: "standalone",
    description: "Sreeram Padmanabhan's app.",
    theme_color: "#0563d8",
    icons: [{
      src: "/img/icon-22.png",
      type: "image/png",
      sizes: "22x22",
    }, {
      src: "/img/icon-32.png",
      type: "image/png",
      sizes: "32x32",
    }, {
      src: "/img/icon-64.png",
      type: "image/png",
      sizes: "64x64",
    }, {
      src: "/img/icon-100.png",
      type: "image/png",
      sizes: "100x100",
    }, {
      src: "/img/icon-512.png",
      type: "image/png",
      sizes: "512x512",
    }, {
      src: "/img/maskable_icon.png",
      sizes: "196x196",
      type: "image/png",
      purpose: "maskable",
    }],
    related_applications: [{
      platform: "play",
      url: "https://play.google.com/store/apps/details?id=io.sreeram.twa"
    }]
  },
  sections: {
    story: {
      route: "/story",
      title: "My Story",
      img: "/sections/blog.svg",
      hidden: true,
      auth: false,
      paid: false,
      links: [
        { title: 'About me', route: '/story/about-me' },
        { title: 'Next big step in life', route: '/story/next-big-step' }, // 02/06/21
        { title: 'My professional journey', route: '/story/my-professional-journey' }, // 23/04/21
        { title: 'Studio for rent', route: '/story/studio-for-rent-berlin' }, // 01/04/21
        { title: 'Life in IN/DE/UK', route: '/story/life-in-de-uk' }, // 30/11/20
        { title: 'The past decade', route: '/story/the-past-decade' }, // 01/12/20
        { title: 'Moving to Germany', route: '/story/moving-to-germany' }, // 09/08/20
        { title: 'Indians in Britian', route: '/story/indians-in-britain' }, // 01/08/17
        // { title: 'How I organize my life', route: '/story/organize' },
      ],
    },
    photos: {
      route: '/photos',
      title: 'Photos',
      img: '/sections/photos.svg',
      hidden: true,
      auth: false,
      paid: false,
      links: [
        { title: 'Best photo I\'ve ever taken', route: '/photos/best-photo-I\'ve-ever-taken' }, // 05/12/18
        { title: 'View from my desk', route: '/photos/view-from-my-desk' }, // 19/11/18
        { title: 'My balcony in India', route: '/photos/view-from-my-balcony' }, // 09/09/18
        { title: 'Paragliding at Interlaken', route: '/photos/paragliding-at-interlaken'}, // 25/06/17
        { title: 'Top of Scotland', route: '/photos/top-of-scotland' }, // 24/04/17
        { title: 'Shard from the tower', route: '/photos/view-of-the-shard' }, // 28/12/2016
      ],
    },
    javascript: {
      route: "/javascript",
      title: "JavaScript",
      img: "/sections/js.svg",
      hidden: false,
      auth: true,
      paid: true,
      links: [
        { title: 'Closures', route: '/javascript/closures' },
        { title: 'Constructor', route: '/javascript/constructor' },
        { title: 'Rest and Spread', route: '/javascript/rest-spread'},
        { title: 'Arguments', route: '/javascript/arguments' },
        { title: 'Call method', route: '/javascript/call' },
        { title: 'Apply method', route: '/javascript/apply' },
        { title: 'Bind method', route: '/javascript/bind' },
        { title: 'Implementation of bind', route: '/javascript/bind-implementation'},
        { title: 'Context', route: '/javascript/context' },
        { title: 'Class', route: '/javascript/class' },
        { title: 'Promises', route: '/javascript/promises' },
        { title: 'Debounce', route: '/javascript/debounce' },
        { title: 'Throttle', route: '/javascript/throttle' },
        { title: 'Redux', route: '/javascript/redux' },
      ],
    },
    // node: {
    //   route: "/nodejs",
    //   title: "Node",
    //   img: "/sections/node.svg",
    //   hidden: false,
    //   auth: true,
    //   paid: true,
    //   links: [
    //   ],
    // },
    // css: {
    //   route: "/css",
    //   title: "CSS",
    //   img: "/sections/css.svg",
    //   hidden: false,
    //   auth: true,
    //   paid: true,
    //   links: [
    //   ],
    // },
    react: {
      route: "/react",
      title: "React",
      img: "/sections/react.svg",
      hidden: false,
      auth: true,
      paid: true,
      links: [
        { title: 'Functional component template', route: '/react/functional-component-template' },
        { title: 'Container component template', route: '/react/container-component-template' },
        { title: 'Custom hooks in React', route: '/react/custom-hooks' },
        { title: 'Debounced fetch', route: '/react/debounced-fetch' },
      ],
    },
    jest: {
      route: "/jest",
      title: "Jest",
      img: "/sections/jest.svg",
      hidden: false,
      auth: true,
      paid: true,
      links: [
        { title: 'onChange', route: '/jest/onChange' },
        { title: 'useEffect', route: '/jest/useEffect' },
      ],
    },
    // devops: {
    //   route: "/devops",
    //   title: "DevOps",
    //   img: "/sections/devops.svg",
    //   hidden: false,
    //   auth: true,
    //   paid: true,
    //   links: [
    //   ],
    // },
    web: {
      route: "/web",
      title: "Web",
      img: "/sections/web.svg",
      hidden: false,
      auth: true,
      paid: true,
      links: [
        { title: 'Editorconfig', route: '/web/editorconfig' },
        { title: 'Eslint', route: '/web/eslint' },
        { title: 'Initial commit', route: '/web/initial-commit' },
        { title: 'React entry point', route: '/web/react-entry-point' },
        { title: 'Babel config', route: '/web/babel-config' },
        { title: 'Webpack Dev Setup', route: '/web/webpack-dev-setup' },
        { title: 'Webpack Dev Server', route: '/web/webpack-dev-server' },
        { title: 'Webpack Prod Setup', route: '/web/webpack-prod-setup' },
        { title: 'Webpack Common Setup', route: '/web/webpack-common-config' },
        { title: 'Webpack Hot module replacement', route: '/web/webpack-hot-module-replacement' },
        { title: 'Webpack bundle analysis', route: '/web/webpack-bundle-analysis' },
        { title: 'Webpack Html webpack plugin', route: '/web/webpack-html-webpack-plugin' },
        { title: 'Code splitting', route: '/web/optimisation-using-code-splitting' },
        { title: 'Sourcemaps', route: '/web/sourcemaps' },
        { title: 'Unit testing setup', route: '/web/unit-testing-using-karma-jasmine-enzyme' },
        { title: 'Code coverage using Istanbul', route: '/web/code-coverage-using-istanbul' },
        { title: 'Common web vulnerabilities', route: '/web/common-web-vulnerabilities' },
        { title: 'The tech behind this website', route: '/web/tech-behind-this-website'}
      ],
    },
    // interview: {
    //   route: '/interview',
    //   title: 'Interviews',
    //   img: '/sections/dev.svg',
    //   hidden: false,
    //   auth: true,
    //   paid: true,
    //   links: [
    //     { title: 'Wayfair 2020 - I', route: '/interview/wayfair-1' },
    //     { title: 'Wayfair 2020 - II', route: '/interview/wayfair-2' },
    //     { title: 'Bulb 2021 - I', route: '/interview/bulb-1' },
    //     { title: 'Bulb 2021 - II', route: '/interview/bulb-2' },
    //   ],
    // },
  leetcode: {
    route: "/leetcode",
    title: "Leetcode",
    img: "/sections/leetcode.svg",
    hidden: false,
    auth: true,
    paid: true,
    links: [
      { title: 'Leetcode #1', route: '/leetcode/leetcode-1' },
      { title: 'Leetcode #2', route: '/leetcode/leetcode-2' },
      { title: 'Leetcode #3', route: '/leetcode/leetcode-3' },
      { title: 'Leetcode #4', route: '/leetcode/leetcode-4' },
      { title: 'Leetcode #5', route: '/leetcode/leetcode-5' },
      { title: 'Leetcode #6', route: '/leetcode/leetcode-6' },
      { title: 'Leetcode #7', route: '/leetcode/leetcode-7' },
      { title: 'Leetcode #8', route: '/leetcode/leetcode-8' },
      { title: 'Leetcode #9', route: '/leetcode/leetcode-9' },
      { title: 'Leetcode #10', route: '/leetcode/leetcode-10' },
    ],
  },
  },
};
