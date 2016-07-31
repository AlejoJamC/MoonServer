/**
 * Copyright (c) 2016-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var moduleRouter = express.Router();

var logger = require('../config/logger').logger;
var Module = require('../models/modules').Module;

/* GET Dashboard Timeline page. */
// Route '/settings/modules'
moduleRouter.get('/ajustes/modulos', function (req, res) {
    res.render('dashboard/modules/module', {
        title: 'Modulos | Panel de control | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET module edit option page */
// Route '/settings/modules/:id'
moduleRouter.get('/ajustes/modulos/:id', function (req, res) {
    var data = '';
    var error = '';
    Module.findById(req.params.id, function (err, section) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            error = 'Error: obteniendo la sección de los paises';
        }
        // Success
        data = JSON.parse(section);
    });
    res.render('dashboard/modules/moduleEdit',{
        title: 'Editar modulos | Panel de control | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error: error,
        data: data
    });
});

/* GET module delete option page */
// Route '/settings/modules/:id/delete'
moduleRouter.get('/ajustes/modulos/:id/eliminar', function (req, res) {
    var data = '';
    var error = '';
    Module.findById(req.params.id, function (err, section) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            error = 'Error: obteniendo la sección de los paises';
        }
        // Success
        data = JSON.parse(section);
    });
    res.render('dashboard/modules/moduleDelete',{
        title: 'Eliminar modulos | Panel de control | Dynamite Docs',
        level: '../../../',
        layout: 'dashboard/mainStruct',
        error: error,
        data: data
    });
});


module.exports = moduleRouter;