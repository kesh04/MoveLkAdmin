const mongoose = require('mongoose');

const RouteBus = new mongoose.Schema({
    
    Busname: {
        type: String,
        required: true
    },
    To: {
        type: String,
        required: true
    },
   
    where: {
        type: String,
        required: true
    },
    arrival: {
        type: String,
        required: true,
     
    },
    departure : {
        type: String,
        required: true
    },
     Nextarrival: {
        type: String,
        required: true,
        unique: true
    },
    Nextdeparture: {
        type: String,
        required: true
    },
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDetails',
        required: true
    },
});

module.exports = mongoose.model('RouteBusShema', RouteBus);
