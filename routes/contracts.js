/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var contractRouter = express.Router();


/* GET Branch Office page. */
contractRouter.get('/contracts', function (req, res) {
    res.render('dashboard/dashboard', {
        title: 'Registro | Dynamite Docs',
        level: '../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Create Branch Office page. */
contractRouter.get('/contracts/new', function (req, res) {
    res.render('dashboard/dashboard', {
        title: 'Registro | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Update Branch Office page. */
contractRouter.get('/contracts/:id', function (req, res) {
    res.render('dashboard/dashboard', {
        title: 'Registro | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Delete Branch Office page. */
contractRouter.get('/contracts/:id/delete', function (req, res) {
    res.render('dashboard/dashboard', {
        title: 'Registro | Dynamite Docs',
        level: '../../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

module.exports = contractRouter;