'use strict';
require('dotenv').config();
require('encoding');
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const {google} = require('googleapis');

//define scopes to get metrics from google analytics
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'

const privateKey = process.env.GA_PRIVATE_KEY.replace(/\\n/g, '\n')
const jwt = new google.auth.JWT(process.env.GA_CLIENT_EMAIL, null, privateKey, scopes)

const startDate = '2020-01-01'

/**
 * Retrieves unique page views from Google Analytics
 * @param {*} pagePath the path to filter from results
 */
async function getUniquePageViews(pagePath) {
  const defaults = {
    'auth': jwt,
    'ids': 'ga:' + process.env.GA_VIEW_ID,
  }
  await jwt.authorize()

  const metricRequestOptions = {
    ...defaults,
    'start-date': startDate,
    'end-date': 'today',
    'metrics': 'ga:uniquePageviews',
    'dimensions': 'ga:pagePath'
  };

  if (pagePath)
    metricRequestOptions.filters = `ga:pagePath==${pagePath}`

  const result = await google.analytics('v3').data.ga.get(metricRequestOptions)

  return result.data.rows;
}

const router = express.Router();

/**
 * Get unique page views for all pages
 */
router.get('/getViews', async (req, res) => {
  var data = await getUniquePageViews();
  return res.json(data);
});

/**
 * Get unique page views for specific page
 */
router.get('/getViewsByPagePath', async (req, res) => {
  let pagePath = req.query.pagePath;
  var data = await getUniquePageViews(pagePath);
  return res.json(data);
});


//add json parsing middleware
app.use(bodyParser.json());

//add cors middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
