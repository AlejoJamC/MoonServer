/**
 * Copyright (c) 2016-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var timelineRouter = express.Router();

/* GET Dashboard Timeline page. */
timelineRouter.get('/dashboard/timeline', function (req, res) {
    res.render('dashboard/timeline', {
        title: 'Timeline | Panel de control | Dynamite Docs',
        level: '../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

module.exports = timelineRouter;