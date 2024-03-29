const Category = require('../modules/category.model');
const Service = require('../modules/touristicServices.model');
const mongoose = require('mongoose');

const createCategory = async (req, res) => {
    try {
        const { name, icon, color } = req.body;
        const category = new Category({ name, icon, color });
        const savedCategory = await category.save();

        // Check if services are provided in the request body
        if (req.body.services && req.body.services.length > 0) {
            const services = req.body.services.map(serviceData => ({
                name: serviceData.name,
                description: serviceData.description,
                price: serviceData.price || 0,
                image: serviceData.image || '',
                document: serviceData.document || '',
                contactInfo: serviceData.contactInfo || '',
                category: savedCategory._id,
                location: serviceData.location || '',
            }));

            await Service.insertMany(services);
        }

        res.status(200).json(savedCategory);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.id;

        // Check if the provided ID is a valid ObjectId
        if (!mongoose.isValidObjectId(categoryId)) {
            return res.status(400).json({ message: "Invalid category ID" });
        }

        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json(category);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
module.exports = {
    createCategory, getCategories, getCategoryById
};
