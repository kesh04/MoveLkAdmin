
const mongoose = require('mongoose');

const UserDetailSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    Busname: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    BusNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    To: {
        type: String,
        required: true
    },
   
    Where: {
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
    }
});

module.exports = mongoose.model('UserDetails', UserDetailSchema);
