/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

//
// Module dependencies
//
// Choose the environment to work
var express         = require('express'),
    bodyParser      = require('body-parser'),
    errorHandler    = require('errorhandler'),
    favicon         = require('serve-favicon'),
    hbs             = require('express-hbs'),
    methodOverride  = require('method-override'),
    moment          = require('moment'),
    morgan          = require('morgan'),
    path            = require('path'),
    session         = require('express-session'),

    stormpath       = require('express-stormpath'),

    logger          = require('./config/logger').logger,
    routes          = require('./routes/routes'),

    environment     = 'devLocal',
    config          = require('./config/environment.json')[environment],
    port            = config.port;

logger.info('Enviroment: ' + environment);

// Express app instance
var app = express();

// Load configuration, package and environment to the new express app.
// Port.
app.set('port', port);

// Config views and template engine.
// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Favicon path.
app.use(favicon(__dirname + '/public/favicon.ico'));

// Logger.
// TODO: Arreglar el error entre wiston y morgan
//app.use(morgan('combined', { 'stream': logger.stream }));
app.use(morgan('dev'));

// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
app.use(methodOverride());

// Session.
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: '3f1l 4 73g 0t d33n yll43r u s1ht d43r n4c u f1'
}));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import static files.
app.use(express.static(path.join(__dirname, 'public')));

// Stormpath initialization
app.use(stormpath.init(app, {
    client:{
        apiKey: {
            file: config.auth.ApiKeyFile
        }
    },
    application:{
        href: config.auth.HREF
    },
    website: true,
    expand: {
        customData: true
    }
}));

// Local variables.
// Current year.
app.locals.currentYear = moment().year();

// Setup all routes on express router
routes.setupRouter(app);

// Error handler available environment
var env = process.env.NODE_ENV || environment;
if ('devLocal' === env){
    app.use(errorHandler());
}

// Once stormpath is ready starts the web server
app.on('stormpath.ready', function () {
    // Binds and listens for connections on the specified host and port.
    app.listen(app.get('port'), function(){
        logger.info('Dynamite website id running on http://localhost:' + port + '/');
    });
});
