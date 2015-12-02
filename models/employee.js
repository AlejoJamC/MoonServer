/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;

var Company         = require('./company').Company;
var BranchOffice    = require('./branchOffice').BranchOffice;
var Department      = require('./department').Department;
var Job             = require('./job').Job;

// Define Employee schema
var EmployeeSchema = new Schema({
    name:                   String,
    lastName:               String,
    identification:         String,
    identificationFile:     String,
    photo:                  String,
    address:                String,
    telephone:              String,
    email:                  String,
    personalEmail:          String,
    contact:                String,
    ContactTelephone:       String,
    curriculumFile:         String,
    profession:             String,
    company:                [Company.schema],
    branchOffice:           [BranchOffice.schema],
    department:             [Department.schema],
    job:                    [Job.schema],
    eps:                    String,
    epsFile:                String,
    pension:                String,
    pensionFile:            String,
    arl:                    String,
    arlFile:                String,
    compensationFund:       String,
    compensationFundFile:   String,
    salary:                 Number,
    creationDate:           Date,
    lastEditionDate:        Date,
    enabled:                Boolean
});

// Export the mongoose model
module.exports.Employee = mongoose.model('Employee', EmployeeSchema);