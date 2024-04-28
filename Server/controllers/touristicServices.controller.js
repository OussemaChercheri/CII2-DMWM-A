const Service = require('../modules/touristicServices.model');
const multer = require('multer');
const fs = require('fs').promises;
const path = require('path');

let filename = '';

const mystorage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, redirect) => {
        let date = Date.now();
        let f1 = date + '-' + file.originalname;
        filename = f1;
        redirect(null, f1);
    }
});
const upload = multer({ storage: mystorage });

const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createService = async (req, res) => {
    try {
        upload.fields([{ name: 'image', maxCount: 1 }, { name: 'document', maxCount: 1 }])(req, res, async function (err) {
            if (err) {
                return res.status(400).send(err);
            }

            console.log(req.files); // Log the files object to inspect

            const data = req.body;
            const service = new Service(data);

            // Check if req.files['image'] exists and has the expected structure
            if (req.files['image'] && req.files['image'][0] && req.files['image'][0].filename) {
                service.image = req.files['image'][0].filename;
            } else {
                console.error('Image file not uploaded or invalid structure:', req.files['image']);
                return res.status(400).json({ message: 'Image file not uploaded or invalid structure' });
            }

            // Other code for handling document upload, category, etc.

            try {
                const saved = await service.save();
                res.status(200).send(saved);
            } catch (err) {
                res.status(400).send(err);
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};
const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        let updatedData = {};

        for (const key in req.body) {
            updatedData[key] = req.body[key];
        }

        if (req.files && req.files['image'] && req.files['image'][0]) {
            const date = Date.now();
            const newFilename = date + '-' + req.files['image'][0].originalname;

            const oldService = await Service.findById(id);
            if (!oldService) {
                return res.status(404).json({ message: "Service not found" });
            }

            const filePath = path.join(__dirname, '..', 'uploads', oldService.image);

            updatedData.image = newFilename;
        }

        // Update category if provided in the request body
        if (req.body.category) {
            const category = await Category.findById(req.body.category);
            if (!category) {
                return res.status(404).json({ message: "Category not found" });
            }
            updatedData.category = req.body.category;
        }

        const service = await Service.findByIdAndUpdate(id, updatedData, { new: true });

        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.status(200).json(service);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};




const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await Service.findByIdAndDelete(id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.status(200).json({ message: "Service deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const downloadDocument = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service || !service.document) {
            return res.status(404).json({ message: "Service or document not found" });
        }
        const filePath = path.join(__dirname, '..', 'uploads', service.document);
        res.download(filePath);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getImage = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service || !service.image) {
            return res.status(404).json({ message: "Service or image not found" });
        }
        const imagePath = path.join(__dirname, '..', 'uploads', service.image);
        res.sendFile(imagePath);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const approveService = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await Service.findById(id);
        if(!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        service.isApproved = true; //Approve the service
        await service.save();

        res.status(200).json({ message: "Service approved" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getApprovedServices = async (req, res) => {
    try{
        const service = await Service.find();
        const {isApproved}=req.params;
        const filtre=[];
        let j=0;
    for(let i in service){
        if(service[i].isApproved){
            filtre[j]=service[i];
            j++;
        }
        
    }
    res.status(200).json(filtre);
    
    }
    catch(error){
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    
};
}

const getServicesByCategory = async (req, res) => {
    try {
        const pipeline = [
            {
                $match: { isApproved: true }
            },
            {
                $group: {
                    _id: '$category',
                    count: { $sum: 1 },
                    totalSales: { $sum: '$price' }
                }
            }
        ];

        const results = await Service.aggregate(pipeline);
        res.status(200).json(results);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    getServices,
    getService,
    createService,
    updateService,
    deleteService,
    downloadDocument,
    getImage,
    approveService,
    getApprovedServices,
    getServicesByCategory
};
