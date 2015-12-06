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
branchOfficeRouter.get('/branch/office', function (req, res) {
    res.render('dashboard', {
        title: 'Registro | Dynamite Docs',
        level: '../../',
        error: ''
    });
});

module.exports = branchOfficeRouter;