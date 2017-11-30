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
var stormpath = require('stormpath');


/* ---------- MAIN MENU ---------- */

/* GET home page. */
indexRouter.get('/', function (req, res) {
    res.render('landing/index', {
        title: 'Dynamite Docs | Administracion y almacenamiento inteligente.',
        level: 'landing/',
        layout: 'landing/struct',
        isHome: true
    });
});

/* GET Pricing page. */
indexRouter.get('/pricing', function (req, res) {
    res.render('landing/pricing', {
        title: 'Precios | Dynamite Docs',
        level: 'landing/',
        layout: 'landing/struct'
    });
});

/* GET Contact page. */
indexRouter.get('/contact', function (req, res) {
    res.render('landing/contact', {
        title: 'Contacto | Dynamite Docs',
        level: 'landing/',
        layout: 'landing/struct'
    });
});

/* ---------- END MAIN MENU ---------- */

/* ---------- FOOTER MENU ---------- */

/* GET Help page. */
indexRouter.get('/help', function (req, res) {
    res.render('landing/help', {
        title: 'Ayuda | Dynamite Docs',
        level: 'landing/',
        layout: 'landing/struct'
    });
});

/* GET Privacy page. */
indexRouter.get('/privacy', function (req, res) {
    res.render('landing/privacy', {
        title: 'Privacidad | Dynamite Docs',
        level: 'landing/',
        layout: 'landing/struct'
    });
});

/* GET Sitemap page. */
indexRouter.get('/sitemap', function (req, res) {
    res.render('landing/sitemap', {
        title: 'Mapa del sitio | Dynamite Docs',
        level: 'landing/',
        layout: 'landing/struct'
    });
});

/* GET Terms page. */
indexRouter.get('/terms', function (req, res) {
    res.render('landing/terms', {
        title: 'Terminos y condiciones | Dynamite Docs',
        level: 'landing/',
        layout: 'landing/struct'
    });
});

/* ---------- END FOOTER MENU ---------- */

/* ---------- CROSS-PLATFORM ---------- */

/* GET Confirmation email page. */
indexRouter.get('/confirmation/:funct', function (req, res) {
    res.render('landing/confirmation', {
        title: 'Confirmación '+ req.params.funct + ' | Dynamite Docs',
        level: '../landing/',
        layout: 'landing/struct'
    });
});

/* POST Confirmation email page. */
indexRouter.post('/confirmation/:funct', function (req, res) {
    res.redirect('/');
});

/* GET Login page. */
indexRouter.get('/login', function (req, res) {
    res.render('dashboard/login', {
        title: 'Iniciar sesión | Dynamite Docs',
        level: '',
        isLogin: true
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

/* GET Reset Password page. */
indexRouter.get('/password/reset', function (req, res) {
    res.render('landing/passwordReset', {
        title: 'Recuperar contraseña | Dynamite Docs',
        level: '../landing/',
        layout: 'landing/struct'
    });
});

/* POST Confirmation email page. */
indexRouter.post('/password/reset', function (req, res) {
    res.redirect('/');
});

/* GET 404 page not found. */
//indexRouter.get("/*", function(req, res) {
//    res.render('landing/404', {
//        title: 'Oopsss página no encontrada | Dynamite Docs',
//        level: '../landing/',
//        layout: 'landing/struct'
//    });
//});

/* ---------- END CROSS-PLATFORM ---------- */

module.exports = indexRouter;