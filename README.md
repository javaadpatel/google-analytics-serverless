# Serverless Function for Google Analytics

[![Netlify
Status](https://api.netlify.com/api/v1/badges/9aaef7de-1e5d-4fda-bc39-faa10a68b35b/deploy-status)](https://app.netlify.com/sites/netlify-express/deploys)

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

