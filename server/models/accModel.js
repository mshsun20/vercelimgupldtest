const mongoose = require('mongoose')

const AccSchema = mongoose.Schema({
    acc_unique_code: {
        type: String,
        required: true,
        unique: true
    },
    acc_name: {
        type: String,
        required: true
    },
    acc_phone: {
        type: String,
        required: true
    },
    acc_email: {
        type: String
    },
    acc_type: {
        type: String,
        required: true
    },
    acc_cat:{
        type: String,
        required: true
    },
    acc_subcat:{
        type: String,
        required: true
    },
    acc_status: {
        type: String,
        required: true
    },
    added_by: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    booked_tckt: {
        type: Number
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Account', AccSchema);
