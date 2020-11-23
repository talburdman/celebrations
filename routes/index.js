module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/', require('./auth.routes.js'))
    app.use('/admin', require('./admin.routes.js'))
    app.use('/celebrations', require('./celebrations.routes.js'))
}