/* eslint-disable camelcase */

const domain = process.env.NEXT_PUBLIC_DOMAIN;

module.exports = {
  title: 'Sreeram Padmanabhan',
  description: 'Web of thoughts',
  seo: {
    author: 'Sreeram Padmanabhan',
    themeColor: '#000000',
    description: '𝘐𝘧 𝘰𝘯𝘭𝘺 𝘰𝘯𝘦 𝘨𝘦𝘵𝘴 𝘪𝘯𝘴𝘱𝘪𝘳𝘦𝘥, 𝘪𝘵𝘴 𝘢 𝘷𝘪𝘤𝘵𝘰𝘳𝘺.',
    domain,
    gtmId: 'GTM-KFQNDM8',
    keywords: 'sreer.am, sreeram.io, sreeram, #sreeram, sreeram padmanabhan, jsdrome, siri, london, berlin, india, uk, germany, trivandrum, web, web developer, web engineer, creativity, Design your life, engineer, frontend, delivery hero, tech lead, wipro, mjam, lloyds bank, leetcode, leetcode solutions, leetcode javascript solutions',
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
    theme_color: "#000000",
    icons: [ {
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
    } ],
    related_applications: [ {
      platform: "play",
      url: "https://play.google.com/store/apps/details?id=io.sreeram.twa",
    } ],
  },
  sections: {
    story: {
      route: "/story",
      title: "My Story",
      img: "/posts/blog/sreeram.jpg",
      hidden: false,
      auth: false,
      paid: false,
      links: [
        { title: 'About me', route: '/story/about-me' },
        { title: 'My professional journey', route: '/story/my-professional-journey' }, // 23/04/21
        { title: 'Life in India, Germany and UK', route: '/story/life-in-de-uk' }, // 30/11/20
        { title: 'The past decade', route: '/story/the-past-decade' }, // 01/12/20
        { title: 'Moving to Germany', route: '/story/moving-to-germany' }, // 09/08/20
        { title: 'Indians in Britian', route: '/story/indians-in-britain' }, // 01/08/17
        { title: 'Moving out of Germany', route: '/story/moving-out-of-germany' }, // 25/07/21
        { title: 'Next big step in life', route: '/story/next-big-step' }, // 02/06/21
        { title: 'First month in Bumble', route: '/story/first-month-in-bumble' }, // 02/06/21
        { title: 'Next adventure - Flying', route: '/story/learning-to-fly' }, // 04/09/21
        // { title: 'How I organize my life', route: '/story/organize' },
        // { title: 'Studio for rent', route: '/story/studio-for-rent-berlin' }, // 01/04/21
      ],
    },
    photos: {
      route: "/photos",
      title: "Photos",
      img: "/sections/photos.svg",
      hidden: false,
      auth: false,
      paid: false,
      links: [
        { title: 'View from my balcony in India', route: '/photos/view-from-my-balcony' }, // 14/02/21
        { title: 'The best photo I ever shot', route: '/photos/best-photo-i-ever-shot' }, // 05/12/18
        { title: 'View from my office desk', route: '/photos/view-from-my-desk' }, // 19/11/18
        { title: 'Paragliding at Interlaken', route: '/photos/paragliding-at-interlaken' }, // 25/06/17
        { title: 'Top of Scotland', route: '/photos/top-of-scotland' }, // 24/04/17
        { title: 'Shard from the tower', route: '/photos/view-of-the-shard' }, // 28/12/2016
      ],
    },
    tech: {
      route: "/tech",
      title: "Tech stuff",
      img: "/sections/cloud.svg",
      hidden: false,
      auth: false,
      paid: false,
      links: [
        { title: 'The biggest carrer landmine', route: '/tech/career-landmine' }, // 15/06/21
        { title: 'What a Web Developer should know', route: '/tech/what-a-web-developer-should-know' }, // 12/06/21
        { title: 'Comparison of cloud providers', route: '/tech/comparing-cloud-providers' }, // 11/06/2021
        { title: 'Tech stack powering my website', route: '/tech/tech-stack-powering-my-website' }, // 07/06/2021
      ],
    },
    // javascript: {
    //   route: "/javascript",
    //   title: "JavaScript",
    //   img: "/sections/js.svg",
    //   hidden: false,
    //   auth: false,
    //   paid: false,
    //   links: [
    //     { title: 'Closures', route: '/javascript/closures' },
    //     { title: 'Constructor', route: '/javascript/constructor' },
    //     { title: 'Rest and Spread', route: '/javascript/rest-spread' },
    //     { title: 'Arguments', route: '/javascript/arguments' },
    //     { title: 'Call method', route: '/javascript/call' },
    //     { title: 'Apply method', route: '/javascript/apply' },
    //     { title: 'Bind method', route: '/javascript/bind' },
    //     { title: 'Implementation of bind', route: '/javascript/bind-implementation' },
    //     { title: 'Context', route: '/javascript/context' },
    //     { title: 'Class', route: '/javascript/class' },
    //     { title: 'Promises', route: '/javascript/promises' },
    //     { title: 'Debounce', route: '/javascript/debounce' },
    //     { title: 'Throttle', route: '/javascript/throttle' },
    //     { title: 'Redux', route: '/javascript/redux' },
    //   ],
    // },
    // react: {
    //   route: "/react",
    //   title: "React",
    //   img: "/sections/react.svg",
    //   hidden: false,
    //   auth: false,
    //   paid: false,
    //   links: [
    //     { title: 'Functional component template', route: '/react/functional-component-template' },
    //     { title: 'Container component template', route: '/react/container-component-template' },
    //     { title: 'Custom hooks in React', route: '/react/custom-hooks' },
    //     { title: 'Debounced fetch', route: '/react/debounced-fetch' },
    //   ],
    // },
    // jest: {
    //   route: "/jest",
    //   title: "Jest",
    //   img: "/sections/jest.svg",
    //   hidden: false,
    //   auth: false,
    //   paid: false,
    //   links: [
    //     { title: 'onChange', route: '/jest/onChange' },
    //     { title: 'useEffect', route: '/jest/useEffect' },
    //   ],
    // },
    // web: {
    //   route: "/web",
    //   title: "Web",
    //   img: "/sections/web.svg",
    //   hidden: false,
    //   auth: false,
    //   paid: false,
    //   links: [
    //     { title: 'Editorconfig', route: '/web/editorconfig' },
    //     { title: 'Eslint', route: '/web/eslint' },
    //     { title: 'Initial commit', route: '/web/initial-commit' },
    //     { title: 'React entry point', route: '/web/react-entry-point' },
    //     { title: 'Babel config', route: '/web/babel-config' },
    //     { title: 'Webpack Dev Setup', route: '/web/webpack-dev-setup' },
    //     { title: 'Webpack Dev Server', route: '/web/webpack-dev-server' },
    //     { title: 'Webpack Prod Setup', route: '/web/webpack-prod-setup' },
    //     { title: 'Webpack Common Setup', route: '/web/webpack-common-config' },
    //     { title: 'Webpack Hot module replacement', route: '/web/webpack-hot-module-replacement' },
    //     { title: 'Webpack bundle analysis', route: '/web/webpack-bundle-analysis' },
    //     { title: 'Webpack Html webpack plugin', route: '/web/webpack-html-webpack-plugin' },
    //     { title: 'Code splitting', route: '/web/optimisation-using-code-splitting' },
    //     { title: 'Sourcemaps', route: '/web/sourcemaps' },
    //     { title: 'Unit testing setup', route: '/web/unit-testing-using-karma-jasmine-enzyme' },
    //     { title: 'Code coverage using Istanbul', route: '/web/code-coverage-using-istanbul' },
    //     // { title: 'Common web vulnerabilities', route: '/web/common-web-vulnerabilities' },
    //   ],
    // },
    // leetcode: {
    //   route: "/leetcode",
    //   title: "Leetcode",
    //   img: "/sections/leetcode.svg",
    //   hidden: false,
    //   auth: false,
    //   paid: false,
    //   links: [
    //     { title: 'Leetcode #1', route: '/leetcode/leetcode-1' },
    //     { title: 'Leetcode #2', route: '/leetcode/leetcode-2' },
    //     { title: 'Leetcode #3', route: '/leetcode/leetcode-3' },
    //     { title: 'Leetcode #4', route: '/leetcode/leetcode-4' },
    //     { title: 'Leetcode #5', route: '/leetcode/leetcode-5' },
    //     { title: 'Leetcode #6', route: '/leetcode/leetcode-6' },
    //     { title: 'Leetcode #7', route: '/leetcode/leetcode-7' },
    //     { title: 'Leetcode #8', route: '/leetcode/leetcode-8' },
    //     { title: 'Leetcode #9', route: '/leetcode/leetcode-9' },
    //     { title: 'Leetcode #10', route: '/leetcode/leetcode-10' },
    //   ],
    // },
    // zaxis: {
    //   route: "/zaxis",
    //   title: "Z-Axis",
    //   img: "/sections/zaxis.png",
    //   hidden: true,
    //   auth: false,
    //   paid: false,
    //   links: [
    //   ],
    // },
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
    interview: {
      route: '/interview',
      title: 'Interview',
      img: '/sections/interview.png',
      hidden: false,
      auth: true,
      paid: true,
      links: [
        { title: 'Top Javascript Interview questions', route: '/interview/javascript-interview-questions' },
        { title: 'The best Javascript Interview question', route: '/interview/best-javascript-interview-question' },
        // { title: 'Top General Web Interview questions', route: '/interview/general-interview-questions' },
        // { title: 'Top HTML Interview questions', route: '/interview/html-interview-questions' },
        // { title: 'Top CSS Interview questions', route: '/interview/css-interview-questions' },
        // { title: 'Top Typescript Interview questions', route: '/interview/typescript-interview-questions' },
        // { title: 'Top Programming Interview questions', route: '/interview/programming-interview-questions' },
        // { title: 'Top React Interview questions', route: '/interview/react-interview-questions' },
        // { title: 'Top System Design Interview questions', route: '/interview/system-design-interview-questions' },
        // { title: 'Top Coding Challenge questions', route: '/interview/coding-challenges' },
        // { title: 'Top NodeJS Interview questions', route: '/interview/nodejs-interview-questions' },
        // { title: 'Top Testing Interview questions', route: '/interview/testing-interview-questions' },
        // { title: 'Top DevOps Interview questions', route: '/interview/devops-interview-questions' },
        // { title: 'Top Performance Interview questions', route: '/interview/performance-interview-questions' },
        // { title: 'Top Behavioural Interview questions', route: '/interview/behavioural-interview-questions' },
        // { title: 'Top Leadership Interview questions', route: '/interview/leadership-interview-questions' },
        // { title: 'Top Accessibility Interview questions', route: '/interview/accessibility-interview-questions' },
        // { title: 'Top Web Securtiy Interview questions', route: '/interview/web-security-interview-questions' },
      ],
    },
  },
};
