const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')

// // // //

// koa.js App & Configuration
const app = new Koa();

app.proxy = true

// print the request log on console
app.use(logger());

// parse JSON and url-encoded query
app.use(bodyParser());

// Init passport
const passport = require('koa-passport')
app.use(passport.initialize())


// Routes
const route = require('./router')
app.use(route.routes(), route.allowedMethods())

// // // //

// Exports koa app
module.exports = app;
