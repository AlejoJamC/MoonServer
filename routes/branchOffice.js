/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var branchOfficeRouter = express.Router();


/* GET Branch Office page. */
branchOfficeRouter.get('/branch/offices', function (req, res) {
    res.render('dashboard/dashboard', {
        title: 'Registro | Dynamite Docs',
        level: '../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Create Branch Office page. */
branchOfficeRouter.get('/branch/offices/new', function (req, res) {
    res.render('dashboard/dashboard', {
        title: 'Registro | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Update Branch Office page. */
branchOfficeRouter.get('/branch/offices/:id', function (req, res) {
    res.render('dashboard/dashboard', {
        title: 'Registro | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Delete Branch Office page. */
branchOfficeRouter.get('/branch/offices/:id/delete', function (req, res) {
    res.render('dashboard/dashboard', {
        title: 'Registro | Dynamite Docs',
        level: '../../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

module.exports = branchOfficeRouter;