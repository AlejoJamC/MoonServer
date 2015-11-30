/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var routerIndex = express.Router();

/* GET home page. */
routerIndex.get('/', function (req, res) {
    res.render('index', {
        title: 'Dynamite Docs | Administracion y almacenamiento inteligente.',
        level: ''
    });
});

module.exports = routerIndex;