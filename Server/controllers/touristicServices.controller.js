const Service = require('../modules/touristicServices.model');
const multer = require('multer');

let filename = '';

const mystorage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, redirect) => {
        let date = Date.now();
        let f1 = date + '-' + file.originalname;
        filename = f1; // Move filename assignment here
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

const createService = async (req, res) => { // Move upload.single('image') to here
    try {
        upload.single('image')(req, res, async function (err) {
            if (err) {
                return res.status(400).send(err);
            }
            const data = req.body;
            const service = new Service(data);
            service.image = filename;
            try {
                const saved = await service.save();
                filename = '';
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
        let updatedData = req.body;

        if (req.file) {
            const date = Date.now();
            const newFilename = date + '-' + req.file.originalname;
            const oldService = await Service.findById(id);

            if (!oldService) {
                return res.status(404).json({ message: "Service not found" });
            }

            const filePath = './uploads/' + oldService.image;
            fs.unlinkSync(filePath);

            updatedData.image = newFilename;
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

module.exports = {
    getServices,
    getService,
    createService,
    updateService,
    deleteService,
};
