/**
 * Copyright (c) 2016-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express         = require('express');
var sectionRouter   = express.Router();
var logger          = require('../config/logger').logger;
var Section         = require('../models/section').Section;

/* GET sidebar section page. */
// Route '/settings/sections'
sectionRouter.get('/ajustes/secciones', function (req, res) {
    var data    = '';
    var error   = '';
    // Use the model to find all records
    Section.find(function (err, sections) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            error = 'Error: obteniendo la lista de los paises';
        }
        // Success
        data = JSON.parse(sections);
    });

    res.render('dashboard/sections/section', {
        title:  'Secciones | Panel de control | Dynamite Docs',
        level:  '../../',
        layout: 'dashboard/mainStruct',
        error:  error,
        data:   data
    });
});

/* GET section edit option page */
// Route '/settings/sections/:id'

sectionRouter.get('/ajustes/secciones/:id', function (req, res) {
    var data = '';
    var error = '';
    Section.findById(req.params.id, function (err, section) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            error = 'Error: obteniendo la sección de los paises';
        }
        // Success
        data = JSON.parse(section);
    });
    res.render('dashboard/sections/sectionEdit',{
        title: 'Editar Secciones | Panel de control | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error: error,
        data: data
    });
});

sectionRouter.get('/ajustes/secciones/:id/eliminar', function (req, res) {
    var data = '';
    var error = '';
    Section.findById(req.params.id, function (err, section) {
        // Check for errors and show message
        if(err){
            logger.error(err);
            error = 'Error: obteniendo la sección de los paises';
        }
        // Success
        data = JSON.parse(section);
    });
    res.render('dashboard/sections/sectionDelete',{
        title: 'Eliminar Secciones | Panel de control | Dynamite Docs',
        level: '../../../',
        layout: 'dashboard/mainStruct',
        error: error,
        data: data
    });
});


module.exports = sectionRouter;
