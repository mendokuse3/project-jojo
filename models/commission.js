const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    name: String,
    imgPath: String,
    commissionType: String
})

const Commissions = mongoose.model("Commissions", modelSchema);

module.exports = Commissions;