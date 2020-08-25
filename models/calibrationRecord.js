const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calibrationRecordSchema = new Schema({
    // foreign key to cal schedule
    calibrationSchedule: {
        type: mongoose.ObjectId,
        ref: "CalibrationSchedule",
        required: true
    },
    // date of calibration
    date: {
        type: Date,
        required: true
    },
    // as found, in tolerance, damaged, or out of tolerance
    conditionReceived: {
        type: String,
        required: true
    },
    // failure mode, if applicable
    failureMode: {
        type: String
    },
    // as left, in tolerance or limited use
    conditionReturned: {
        type: String,
        required: true
    },
    // whether or not the cal was considered a failure for extension purposes
    calibrationFailure: {
        type: Boolean,
        required: true
    },
    // user note
    note: {
        type: String
    }
});

const CalibrationRecord = mongoose.model("CalibrationRecord", calibrationRecordSchema);
module.exports = CalibrationRecord;