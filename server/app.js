const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('@koa/cors')
const mount = require('koa-mount')

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
const m = require('./mount')
app.use(mount(m))

app.use(cors())

// // // //

// Exports koa app
module.exports = app;
