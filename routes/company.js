/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var companyRouter = express.Router();


/* GET Branch Office page. */
// Route '/companies'
companyRouter.get('/empresas', function (req, res) {
    res.render('dashboard/companies/companies', {
        title: 'Registro | Dynamite Docs',
        level: '../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Create Branch Office page. */
// Route '/companies/new'
companyRouter.get('/empresas/agregar', function (req, res) {
    res.render('dashboard/companies/companies', {
        title: 'Registro | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Update Branch Office page. */
// Route '/companies/:id'
companyRouter.get('/empresas/:id', function (req, res) {
    res.render('dashboard/companies/companyEdit', {
        title: 'Registro | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Delete Branch Office page. */
// Route '/companies/:id/delete'
companyRouter.get('/empresas/:id/eliminar', function (req, res) {
    res.render('dashboard/companies/companyDelete', {
        title: 'Registro | Dynamite Docs',
        level: '../../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

module.exports = companyRouter;