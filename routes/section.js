/**
 * Copyright (c) 2016-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var sectionRouter = express.Router();

/* GET Dashboard Timeline page. */
// Route '/settings/sections'
sectionRouter.get('/ajustes/secciones', function (req, res) {
    res.render('dashboard/section', {
        title: 'Secciones | Panel de control | Dynamite Docs',
        level: '../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

module.exports = sectionRouter;
