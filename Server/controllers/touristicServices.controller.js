const Service = require('../modules/touristicServices.model');

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
}

const  createService = async (req, res) => {
    try {
        const service = await Service.create(req.body);
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
};


const updateService = async (req, res) => {
    try {
        const {id} = req.params;
        const service = await Service.findByIdAndUpdate(id, req.body);
        if (!service) {
            return res.status(404).json({ message: "Service not found"});
        }
        
        const updateService = await Service.findById(id);
        res.status(200).json(updateService);

    } catch (error) {
        
    }
};

const deleteService = async (req, res) => {
    try{
        const {id} = req.params;
        const service = await Service.findByIdAndDelete(id);
        if (!service) {
            return res.status(404).json({ message: "Service not found"});
        }
        res.status(200).json({ message: "Service deleted"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};
module.exports = {
    getServices,
    getService,
    createService,
    updateService,
    deleteService
}

