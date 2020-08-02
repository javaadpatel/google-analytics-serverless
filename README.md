# Serverless Function for Google Analytics

[![Netlify Status](https://api.netlify.com/api/v1/badges/208a627a-1398-422d-81c2-dafef64ce7cd/deploy-status)](https://app.netlify.com/sites/reverent-golick-6e4d9c/deploys)

[![Deploy to
Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/javaadpatel/google-analytics-serverless)

A simple serverless function, using Express.js, that retrieves Google Analytics Page View results, and can be deployed to Netlify.


The solution is inspired by this [Netlify blog post](https://www.netlify.com/blog/2018/09/13/how-to-run-express.js-apps-with-netlify-functions/).

The app is hosted at `/.netlify/functions/server`. Examples of
how to access the Express.js endpoints:

```sh
* curl https://netlify-express.netlify.com/.netlify/functions/server/getViews

* curl https://netlify-express.netlify.com/.netlify/functions/server/getViewsByPagePath?pagePath=/securing-traefik-dashboard-with-azure-ad/

```

## Running locally
In order to run locally, rename the file `.env.bak` to `.env` and fill in the required secrets, which you can obtain by following this [blog post](https://flaviocopes.com/google-api-authentication/).

## Deploying to Netlify
You can use the Netlify Deployment button to deploy the function to your Netlify account. After deploying your function you will need to set the environment variables so that the function works correctly.

