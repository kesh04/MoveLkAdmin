
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
    }
});

module.exports = mongoose.model('UserDetails', UserDetailSchema);
