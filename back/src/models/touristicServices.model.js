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
            type: String
        },
        document: {
            type: String,
            require: true
        },
        
        category: {
            type: String
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
<<<<<<< HEAD:back/src/models/touristicServices.model.js

        
            // timestamps: true
=======
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
>>>>>>> 8abc042b25d79bc46e35cbcefe1833c1611a4e83:Server/modules/touristicServices.model.js
    }
);

const Service = mongoose.model('Service', ServiceSchema);


module.exports = Service;

