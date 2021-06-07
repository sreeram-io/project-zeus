# The tech stack behind this website

#### *07 Jun 2021, Berlin*

&nbsp;

As a web developer, I always resisted the temptation to use the readymade templates and solutions to build my own website. What good is a web developer tag if I cant build my own website? Hence, every bit of this website was coded by me in an effort to be the best at what I do. And although this is simply a blog, I took utmost care in making it sleek, performant and SEO friendly.

## Features

I wanted the following features built into it.

**SCM** - I use Github as the source code management tool. All of the code goes there into a private repository. Github Actions takes it and runs a bunch of test.

**Frontend** - I use Next.JS, React, Redux Saga and Jest for writing the frontend. Integrating with Typescript soon.

**Backend** - I used Next.JS apis and middlewares. This is written in Node.JS.

**Design system** - I created a design system called alpha which is publicly available in npm as @sreeram.io/alpha. Every time code is pushed into the master branch, it is tested and then published to npm automatically using Github actions.

**Progressive Web App** - I use a service worker to achieve this and an mixture of load time and run time caching strategies. I used lighthouse to run the performance tests. The scores are reasonably good.

**Serverside rendering** - Thanks to Next.JS, the website is rendered serverside.

**Responsive Design** - Nothing fancy here, just media queries and stuff to make sure that the website looked good on all form factors.

**SEO Optimization** - I made sure that all pages are serverside rendered and have the appropriate meta tags for this purpose. I used Google Search console to have my website crawled and indexed.

**Containerized** - The application is dockerized into a container. On every push into the master branch, a set of tests are run. A new docker image is then built and pushed to Google Container Registry. It is then deployed into a Kubernetes cluser.

**Cloud compatible** - Google Cloud is my favourite cloud provider. I used terraform for infrastructure as code. In GCP, I used Compute Engine, Kubernetes Cluser with 3 nodes, exposed a service and created an ingress controller to expose it to the internet, a HTTP loadbalancer to redirect to HTTPS, a HTTPS loadbalancer for https access, a Google managed SSL Certificate, static IP address, Container registry and Cloud build. An A record was created in my DNS to point the domain to this static ip address. But, I soon realized that running and maintaining GCP is expensive for my needs. Hence I moved to Heroku and then subsequently to Vercel.

**Authentication** - Auth0 is used as the authentication provider. Once the user successfully logs in using a social service like Google/Facebook, he is sent back to the website where I authenticate him.

**Database** - Mongo DB is used as the database. Every time the page is requested, the users details (if he is logged in) are requested from this database.

**Payment Gateway** - I use Stripe as the payment gateway. A sole proprietary business was created and my TAX details provided.

**TWA** - I use Bubblewrap to convert my PWA into a TWA. It is available in playstore as [android.sreeram.io](android.sreeram.io).

**Google Tag manager** - I use GTM for tagging.

**Logging** - A Logflare drain was created for this purpose.

## Costs

Because I use vercel, all it cost me was the domain related charges. I moved away from GCP as the costs were simply huge. But Vercel seems be less performant. I might move to Heroku soon. As of today, the entire infrastructure is running on free tiers, but that will soon run out of steam.
