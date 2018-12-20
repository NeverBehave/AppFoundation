const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')

// // // //

// koa.js App & Configuration
const app = new Koa();

// print the request log on console
app.use(logger());

// parse JSON and url-encoded query
app.use(bodyParser());


// Routes
const route = require('./router')
app.use(route.routes(), route.allowedMethods())

// // // //

// Exports koa app
module.exports = app;
