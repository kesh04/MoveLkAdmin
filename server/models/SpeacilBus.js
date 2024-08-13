const mongoose = require('mongoose');

const SPBusSchema = new mongoose.Schema({
    Busname: {
        type: String,
        required: true
    },
    OwnerName: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
        unique: true
    },
    descripe: {
        type: String,
        required: true
    },
  
});

module.exports = mongoose.model('SpecailBus', SPBusSchema);
