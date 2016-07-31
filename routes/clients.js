/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

/**
 * Module dependencies
 */

var logger = require('../config/logger').Logger;
var Client = require('../models/clients').Client;
// TODO: implementar mas verbos y funciones para administrar los clientes

// ENDPOINT: /clients METHOD: GET
exports.getClientByIdClient = function(req, res){
    // Use the 'Client' model to find the client by his id [userId]
    Client.find({ userId : req.user._id },function(err, client){
        // Check for errors and show message
        if(err){
            logger.error(err);
            return res.send(err);
        }
        // success
        res.json(client);
    });
};

// ENDPOINT: /clients METHOD: POST
exports.postClient = function (req, res) {
    // Create a new instance of the Client model
    var client = new Client();

    // Set the Client properties that came from the POST data
    client.name     = req.body.name;
    client.id       = req.body.id;
    client.secret   = req.body.secret;
    client.userId   = req.user._id;

    client.save(function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            return res.send(err);
        }
        // success
        res.json({ message: 'Client created successfully!', data: client });
    });
};

// ENDPOINT: /clients/:id METHOD: DELETE
exports.deleteClient = function(req, res){
    Client.findByIdAndRemove(req.params.id, function(err){
        // Check for errors and show message
        if(err){
            logger.error(err);
            return res.send(err);
        }
        // success
        res.json({ message: 'Client deleted successfully!' });
    });
};