/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

//
// Module dependencies
//
var fs          = require('fs'),
    path        = require('path'),
    winston     = require('winston'),

    filedebug   = path.join(__dirname,'..','logs','debuglogs.log'),
    filerror    = path.join(__dirname,'..','logs','errorlogs.log'),
    fileinfo    = path.join(__dirname,'..','logs','infologs.log');

// Activate winston emitter
winston.emitErrs = true;

// Remove the file, ignoring any errors
try {
    fs.unlinkSync(fileinfo);
    fs.unlinkSync(filedebug);
    fs.unlinkSync(filerror);
}
catch (ex) { }

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.File)({
            level: 'info',
            name: 'info-file',
            filename: fileinfo,
            handleExceptions: true,
            maxsize: 5242880, // 5 MB
            maxFiles: 5,
            colorize: false
        }),
        new (winston.transports.File)({
            level: 'error',
            name: 'error-file',
            filename: filerror,
            handleExceptions: true,
            maxsize: 5242880, // 5 MB
            maxFiles: 5,
            colorize: false
        }),
        new (winston.transports.File)({
            level: 'debug',
            name: 'debug-file',
            filename:filedebug,
            handleExceptions: true,
            maxsize: 5242880, // 5 MB
            maxFiles: 5,
            colorize: false
        }),
        new (winston.transports.Console)({
            level: 'info',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports.logger = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};