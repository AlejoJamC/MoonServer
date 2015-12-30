/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var dashboardRouter = express.Router();
var passport = require('passport');
var stormpath = require('stormpath');
var config = require('../config/envJamC.json');
var stormpathClient;

/* GET Dashboard page. */
dashboardRouter.get('/dashboard', function (req, res) {
    res.render('dashboard/dashboard', {
        title: 'Panel de control | Dynamite Docs',
        level: '../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Register page. */
dashboardRouter.get('/dashboard/register', function (req, res) {
    res.render('dashboard/register', {
        title: 'Registro | Dynamite Docs',
        level: '',
        error: ''
    });
});

/* POST Register page. */
dashboardRouter.post('/dashboard/register', function (req, res) {
    var email = req.body.email;
    var passwd = req.body.password;

    // Verify is user complete fields
    if(!emaill || !passwd){
        return res.render('register', {
            title: 'Registro | Dynamite Docs',
            level: '',
            error: ''
        });
    }

    // Initialize stormpath client
    var apiKeyFile = config.auth.ApiKeyFile;

    stormpath.loadApiKey(apiKeyFile, function apiKeyFileLoaded(err, apiKey) {
        stormpathClient = new stormpath.Client({ apiKey: apiKey });
    });

    // Try to create a new user
    var spApp = stormpathClient.getApplication(config.auth.HREF, function (err, app) {
        // TODO:// mejorar el sistema de manejor de errores
        // Error using stormpath client
        if(err){
            throw err;
        }
        // TODO:// Enviar los campos personalizados de la creacion de una usuario
        app.createAccount({
            givenName: '',
            surname: '',
            username: email,
            email: email,
            password: passwd
        }, function (err, createdAccount) {
            if(err){
                return res.render('register', {
                    title: 'Registro | Dynamite Docs',
                    level: '',
                    error: err.userMessage
                });
            } else {
                passport.authenticate('stormpath')(req, res, function () {
                    return res.redirect('/dashboard');
                });
            }
        });
    });
});

module.exports = dashboardRouter;