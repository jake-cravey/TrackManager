const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipmentNoteSchema = new Schema({
    // foreign key to asset
    asset: {
        type: mongoose.ObejctId,
        ref: "Asset",
        required: true
    },
    // note title
    title: {
        type: String,
        required: true
    },
    // note body
    body: {
        type: String,
        required: true
    }
});

const EquipmentNote = mongoose.model("EquipmentNote", equipmentNoteSchema);
module.exports = EquipmentNote;