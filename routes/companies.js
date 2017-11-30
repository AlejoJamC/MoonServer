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
companyRouter.get('/empresa', function (req, res) {
    res.render('dashboard/companies/companyEdit', {
        title: 'Perfil de la empresa  | Dynamite Docs',
        level: '../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Create Branch Office page. */
// Route '/companies/new'
companyRouter.get('/empresa/agregar', function (req, res) {
    res.render('dashboard/companies/companies', {
        title: 'Agregar una empresa | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Update Branch Office page. */
// Route '/companies/:id'
companyRouter.get('/empresa/:id', function (req, res) {
    res.render('dashboard/companies/companyEdit', {
        title: 'Editar la empresa | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Delete Branch Office page. */
// Route '/companies/:id/delete'
companyRouter.get('/empresa/:id/eliminar', function (req, res) {
    res.render('dashboard/companies/companyDelete', {
        title: 'Eliminar la empresa | Dynamite Docs',
        level: '../../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

module.exports = companyRouter;