/**
 * Copyright (c) 2016-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */
/**
 * Module dependencies
 */
var logger = require('./logger').Logger;
var mongoose = require('mongoose');

/**
 * SetupMongoDB
 *
 * @description Configures and initiates the connection with the NoSQL MongoDB database.
 *
 * @param {string}      database    Name of the database to connect.
 * @param {string}      hostUri     Connection Uri to MongoDB server.
 * @param {string}      serverType  Type of server it should connect local | remote
 */

function SetupMongoDB (hostUri, database, serverType)
{
    var con = mongoose.connection;
    if(serverType === 'remote'){
        var connstring = 'mongodb://' + process.env.REMOTE_MONGODB_USER + ':' + process.env.REMOTE_MONGODB_PASSWORD
            + '@' + process.env.REMOTE_MONGODB_SERVER + ':'
            + process.env.REMOTE_MONGODB_PORT + '/' + process.env.MONGODB_NAME;

        mongoose.connect(connstring, { useMongoClient: true });
        logger.info('Connecting to Remote MongoDB server, database: ' + database);


        // logger conexión con la base de datos
        con.once('open', function () {
            logger.info('Connected to Remote MongoDB successfully!');
        });
    }else{
        mongoose.connect(hostUri + database, { useMongoClient: true });
        logger.info('Connecting to MongoDB server, database: ' + database);

        // logger conexión con la base de datos
        con.once('open', function () {
            logger.info('Connected to MongoDB successfully!');
        });
    }
}

/**
 * Export the function that initialize the connection
 */

module.exports.SetupMongoDB = SetupMongoDB;