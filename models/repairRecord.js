const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const repairRecordSchema = new Schema({
    // foreign key to asset
    asset: {
        type: mongoose.ObjectId,
        ref: "CalibrationSchedule",
        required: true
    },
    // date of repair
    date: {
        type: Date,
        required: true
    },
    // description of repair
    description: {
        type: String,
        required: true
    },
    // technician who completed repair
    assignedTech: {
        type: String,
        required: true
    },
    // user notes
    note: {
        type: String,
    }
});

const RepairRecord = mongoose.model("RepairRecord", repairRecordSchema);
module.exports = RepairRecord;