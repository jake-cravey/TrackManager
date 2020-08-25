const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    // Asset ID used for calibration tracking
    calibrationAssetId: {
        type: String,
        required: true
    },
    // Asset ID used in finance
    financialAssetId: {
        type: String
    },
    // Asset ID used in Avante
    avanteAssetId: {
        type: String
    },
    // Brief description of the equipment
    description: {
        type: String,
        required: true
    },
    // Location of the equipment
    location: {
        type: String,
        required: true
    },
    // The equipment's manufacturer
    manufacturer: {
        type: String,
        required: true
    },
    // The equipments given model number
    modelNumber: {
        type: String,
        default: ""
    },
    // The equipments serial number
    serialNumber: {
        type: String,
        default: ""
    },
    // user notes
    note: {
        type: String,
        default: ""
    },
    // status active/inactive
    isActive: {
        type: Boolean,
        default: true
    }
});

const Asset = mongoose.model("Asset", assetSchema);
module.exports = Asset;