const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maintenanceRecordSchema = new Schema({
    // foreign key to pm schedule
    maintenanceSchedule: {
        type: mongoose.ObjectId,
        ref: "MaintenanceSchedule",
        required: true
    },
    // date PM was performed
    date: {
        type: Date,
        required: true
    },
    // user note
    note: {
        type: String
    }
});

const MaintenanceRecord = mongoose.model("MaintenanceRecord", maintenanceRecordSchema);
module.exports = MaintenanceRecord;