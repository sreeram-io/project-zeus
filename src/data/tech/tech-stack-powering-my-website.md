<img class='img img--left img--grow' src='/posts/blog/tech-stack.png' alt='tech stack' title='tech stack' />

# Tech stack powering my website

#### *07 Jun 2021, Berlin*

&nbsp;

As a web developer, I always resisted the temptation to use the readymade templates and solutions to build my own website. Afterall, what good is a web developer who can't build his own website? Hence, every bit of this website was coded by me in an effort to be the best at what I do. And although this is simply a blog, I took utmost care in making it sleek, performant and SEO friendly. You might not notice it. But what if I say that this website is available as an app in Playstore?

## Features

I wanted the following features built into it.

**Source Code Management** - I use Github as the source code management tool. All of the code goes there into a private repository. Github Actions takes it and runs a bunch of tests.

**Frontend stuff** - I use Next.JS, React, Redux Saga and Jest for writing the frontend. Integrating with Typescript soon.

**Backend stuff** - I use Next.JS apis and middlewares. This is written in Node.JS.

**Design system** - I created a design system called alpha which is publicly available in npm as @sreeram.io/alpha. Every time code is pushed into the master branch, it is tested and then published to npm automatically using Github actions bot.

**Progressive Web App** - I use a service worker to achieve this and a mixture of load time and run time caching strategies. I used lighthouse to run the performance tests. The scores are reasonably good.

**Serverside rendering** - Thanks to Next.JS, the website is rendered serverside.

**Responsive Design** - Nothing fancy here, just media queries and stuff to make sure that the website looks good on all form factors.

**SEO Optimization** - I made sure that all pages are serverside rendered and have the appropriate meta tags for this purpose. I used Google Search console to have my website crawled and indexed.

**Containerized** - The application is dockerized into a container. On every push into the master branch, a set of tests are run. A new docker image is then built and pushed to Google Container Registry. It is then deployed into a Kubernetes cluser.

**Cloud compatible** - Google Cloud is my favourite cloud provider. I used terraform for infrastructure as code. In GCP, I used Compute Engine, Kubernetes Cluser with 3 nodes, exposed a service and created an ingress controller to expose it to the internet, a HTTP loadbalancer to redirect to HTTPS, a HTTPS loadbalancer for https access, a Google managed SSL Certificate, static IP address, Container registry and Cloud build. An "A" record was created in my DNS to point the domain to this static ip address.

**Authentication** - Auth0 is used as the authentication provider. Once the user successfully logs in using a social service like Google/Facebook, he is sent back to the website where I authenticate him.

**Database** - Mongo DB is used as the database. Every time the page is requested, the users details (if he is logged in) are requested from this database.

**Payment Gateway** - I use Stripe as the payment gateway. A sole proprietary business was created for this and my Tax details provided.

**Trusted Web Activity** - I use Bubblewrap to convert my PWA into a TWA. It is available in playstore as [http://android.sreeram.io](http://android.sreeram.io). If you havent tried TWA, I suggest you to give it a try. It is the next big step to bridging the gap between web and native apps.

**Google Tag manager** - I use GTM for tagging.

**Logging** - A Logflare drain was created for this purpose.

## Costs

I am planning to move away from GCP as the costs are simply huge. I am looking at the vercel platform but it seems be less performant. I ran some tests and the initial load is super slow which wasn't the case in GCP. I guess thats what you get for free. Hence I might move to Heroku with a paid plan. It seems to have the best of both worlds.

&nbsp;
