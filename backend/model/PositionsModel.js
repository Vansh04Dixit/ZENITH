const mongoose = require("mongoose");
const PositionsSchema = require('../schemas/PositionsSchema');

const Position = mongoose.model('position', PositionsSchema);

module.exports = Position;