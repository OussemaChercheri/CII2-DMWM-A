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
        duration: {
            type: Number
        },

        image: {
            type: String,
            required: false
        },
        document: {
            type: String,
        },
        
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        video: {
            type: String,
            required: false
        },
        contactInfo: {
            type: String,
            required: [true, "Please enter a contact information"]
        },
        // category: {
        //     type: String,
        //     required: [true, "Please enter a service category"]

        // },
        location: {
            type: String,
            required: [true, "Please enter a service location"]

        },
        isApproved: {
            type: Boolean,
            default: false
        },

        
            // timestamps: true
    }
);

const Service = mongoose.model('Service', ServiceSchema);


module.exports = Service;

