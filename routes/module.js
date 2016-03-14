/**
 * Copyright (c) 2016-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var moduleRouter = express.Router();

/* GET Dashboard Timeline page. */
// Route '/settings/sections'
moduleRouter.get('/ajustes/modulos', function (req, res) {
    res.render('dashboard/module', {
        title: 'Modulos | Panel de control | Dynamite Docs',
        level: '../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

module.exports = moduleRouter;