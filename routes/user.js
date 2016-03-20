/**
 * Copyright (c) 2016-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var UserRouter = express.Router();

/* GET User profile account settings */
// Route '/user/profile'
UserRouter.get('/usuarios/perfil', function (req, res) {
    res.render('dashboard/users/profile',{
        title: 'Perfil del usuario | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error:'',
        data:''
    });
});

/* GET User overview  */
// Route '/user/overview'
UserRouter.get('/usuarios/resumen', function (req, res) {
    res.render('dashboard/users/overview',{
        title: 'Perfil del usuario | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error:'',
        data:''
    });
});

module.exports = UserRouter;