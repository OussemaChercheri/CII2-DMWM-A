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
            type: String
        },
        document: {
            type: String,
            require: true
        },
        contactInfo: {
            type: String
        },
        category: {
            type: String
        },
        location: {
            type: String,
            required: [true, "Please enter a service location"]
        },
        isApproved: {
            type: Boolean,
            default: false
        },
        ratings: [
            {
                star: Number,
                comment: String,
                postedby: {type: mongoose.Schema.Types.ObjectId, ref: "Auth"},
            },
        ],
        totalrating: {
            type: String,
            default: 0,
        },
    },
    {
        timestamps: true
    }
);

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;
