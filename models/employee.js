/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var mongoose                    = require('mongoose');
var Schema                      = mongoose.Schema;

var Company                     = require('./company').Company;
var BranchOffice                = require('./branchOffice').BranchOffice;
var Department                  = require('./department').Department;
var Job                         = require('./job').Job;
var HealthcareCompany           = require('./healthcareCompany').HealthcareCompany;
var RetirementCompany           = require('./retirementCompany').RetirementCompany;
var LaborRiskInsuranceCompany   = require('./laborRiskInsuranceCompany').LaborRiskInsurance;
var CompensationFund         = require('./compensationFund').CompensationFund;


// Define Employee schema
var EmployeeSchema = new Schema({
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
    healthcareCompany:          [HealthcareCompany.schema],
    epsFile:                    String,
    retirementCompany:          [RetirementCompany.schema],
    retirementFile:             String,
    laborRiskInsuranceCompany:  [LaborRiskInsuranceCompany.schema],
    laborRiskInsuranceFile:     String,
    compensationFund:           [CompensationFund.schema],
    compensationFundFile:       String,
    salary:                     Number,
    creationDate:               Date,
    lastEditionDate:            Date,
    enabled:                    Boolean
});

// Export the mongoose model
module.exports.Employee = mongoose.model('Employee', EmployeeSchema);