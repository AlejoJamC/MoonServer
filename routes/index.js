/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var indexRouter = express.Router();
var passport = require('passport');

/* GET home page. */
indexRouter.get('/', function (req, res) {
    res.render('index', {
        title: 'Dynamite Docs | Administracion y almacenamiento inteligente.',
        level: 'landing/'
    });
});


/* GET Login page. */
indexRouter.get('/login', function (req, res) {
    res.render('login', {
        title: 'Iniciar sesión | Dynamite Docs',
        level: ''
    });
});

/* POST Login page. */
indexRouter.post('/login', passport.authenticate('stormpath',{
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: 'Email o contraseña invalida.'
}));


/* GET Logout page. */
indexRouter.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = indexRouter;