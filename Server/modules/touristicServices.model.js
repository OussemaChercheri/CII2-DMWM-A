const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a service name"]
        },
        description: {
            type: String,
            required: [true, "Please enter a service description"]
        },
        price: {
            type: Number,
            default: 0
        },
        image: {
            type: String,
            required: false
        },
        document: {
            type: String,
        },
        contactInfo: {
            type: String
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        location: {
            type: String,
            required: [true, "Please enter a service location"]
        },
        isApproved: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
);

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;
