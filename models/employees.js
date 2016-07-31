/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

/**
 * Module dependencies.
 */

var mongoose             = require('mongoose');
var Company              = require('./companies').Company;
var BranchOffice         = require('./branchOffices').BranchOffice;
var Department           = require('./departments').Department;
var Job                  = require('./jobs').Job;
var Healthcare           = require('./healthcares').Healthcare;
var Retirement           = require('./retirements').Retirement;
var LaborRiskInsurance   = require('./laborRiskInsurances').LaborRiskInsurance;
var CompensationFund     = require('./compensationFunds').CompensationFund;

/**
 * Define 'Employee' schema.
 */

var EmployeeSchema = new mongoose.Schema({
    name:                       String,
    lastName:                   String,
    identification:             String,
    identificationFile:         String,
    photo:                      String,
    address:                    String,
    telephone:                  String,
    email:                      String,
    personalEmail:              String,
    contact:                    String,
    ContactTelephone:           String,
    curriculumFile:             String,
    profession:                 String,
    company:                    [Company.schema],
    branchOffice:               [BranchOffice.schema],
    department:                 [Department.schema],
    job:                        [Job.schema],
    healthcareCompany:          [Healthcare.schema],
    epsFile:                    String,
    retirementCompany:          [Retirement.schema],
    retirementFile:             String,
    laborRiskInsuranceCompany:  [LaborRiskInsurance.schema],
    laborRiskInsuranceFile:     String,
    compensationFund:           [CompensationFund.schema],
    compensationFundFile:       String,
    salary:                     Number,
    creationDate:               Date,
    lastEditionDate:            Date,
    enabled:                    Boolean
});

/**
 * Expose 'Employee'.
 */

module.exports.Employee = mongoose.model('Employee', EmployeeSchema);