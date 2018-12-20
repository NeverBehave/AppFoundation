const app = require('../app')

// Starts Express App
app.listen(3000, () => {
    // TODO - use Morgan for logging
    console.info(`Koa is running on port 3000`)
})
