const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    name: String,
    img: String,
    commissionType: String
})

const Commissions = mongoose.model("Commissions", modelSchema);

module.exports = Commissions;