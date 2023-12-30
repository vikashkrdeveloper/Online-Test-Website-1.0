const database = require('../db/connect');
const jwt = require('jsonwebtoken');
const RegistrationDataSchema = new database.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    registrationno: {
        type: Number,
        require: true,
        trim: true,
        unique: true
    }, emailid: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    }, department: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    }



}, { timestamps: true })

const RegistrationDatamodel = database.model('ParticipantData2', RegistrationDataSchema);
module.exports = RegistrationDatamodel;