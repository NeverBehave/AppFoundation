const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('@koa/cors')

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
const authRouter = require('./router/auth')
app.use(authRouter.routes(), authRouter.allowedMethods())

const route = require('./router/router')
app.use(route.routes(), route.allowedMethods())

app.use(cors())

// // // //

// Exports koa app
module.exports = app;
