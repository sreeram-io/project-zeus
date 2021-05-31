# The tech behind this website

#### *31 May 2020, Berlin*

&nbsp;

As a web developer, I always resisted the temptation to use the readymade templates and solutions to build my own website. Every bit of this website was coded by me in an effort to be the best at what I do. And although this is simply a blog, I took utmost care in making it sleek, performant and SEO friendly.

## Features

I used Github as the source code management tool. All code goes there into a private repository.

First of all, I created a design system called alpha which is publicly available in npm as @sreeram.io/alpha. Every time code is pushed into the master branch, it is tested and then published to npm.

For this website, I used Next.js as the framework. All the pages, apis and middlewares are built using it. It runs inside a docker container and is deployed in Google Cloud.

On every push into the master branch, a set of tests are run. A new docker image is then built and pushed to Google Container Registry.

This docker image is then deployed into a Kubernetes cluser with 3 nodes.

A service created from this and is then exposed to the internet using an Ingress controller.

A https load balancer was created to provide https access. So a static IP had to be reserved for it and a Google mananged SSL certificate was also created.

An A record was created to point the domain to this static ip address.

Mongo DB is used as the database. Every time the page is requested, the users details (if logged in) are requested from this database.

Auth0 is used as the authentication provider. Once the user successfully logs in using a social service like Google/Facebook, he comes to the website where I authenticate him.

Stripe is used as the payment gateway. The premium resources in this blog are priced at a 5€. This payment is taken care of by Stripe.

## Costs

Because this is deployed as a docker image, the only way to deploy is using some cloud provider and they are costly. My choice was between GCP and Heroku. GCP works really well. But I might move to heroky as its more cost effective.
