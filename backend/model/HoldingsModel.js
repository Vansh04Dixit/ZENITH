const mongoose = require("mongoose");
const HoldingsSchema = require('../schemas/HoldingsSchema');

const HoldingsModel = mongoose.model ('holding' , HoldingsSchema);

module.exports = HoldingsModel;