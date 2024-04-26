const Service =require('../modules/touristicServices.model')
const multer = require('multer');
/*  const fs = require('fs');  */
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
        /*services.forEach((element) => {
            const imagePath = path.join(__dirname, '..', 'uploads', element.image);
            element.image = imagePath
        });*/
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

       /*  upload.fields([{ name: 'image', maxCount: 1 }, { name: 'document', maxCount: 1 }])(req, res, async function (err) {
            if (err) {
                return res.status(400).send(err);
            }
            const data = req.body;
            const service = new Service(data);
            
            if (req.files['image'] && req.files['image'][0]) {
                service.image = req.files['image'][0].filename;
            }

            if (req.files['document'] && req.files['document'][0]) {
                service.document = req.files['document'][0].filename;
            } */

           /*  // Add category ID to the service
            if (data.category) {
                const category = await Category.findById(data.category);
                if (!category) {
                    return res.status(404).json({ message: "Category not found" });
                }
                service.category = data.category;
            } */


const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        let updatedData = req.body;

         for (const key in req.body) {
            updatedData[key] = req.body[key];
        } 

            if (req.files && req.files['image'] && req.files['image'][0]) 
       if (req.file) {
            const date = Date.now();
            const newFilename = date + '-' + req.files.originalname;

            const oldService = await Service.findById(id);
            if (!oldService) {
                return res.status(404).json({ message: "Service not found" });
            }

       /*      const filePath = path.join(__dirname, '..', 'uploads', oldService.image); */
       const filePath = './uploads/' + oldService.image;
       fs.unlinkSync(filePath);
            updatedData.image = newFilename;
        }

       /*  // Update category if provided in the request body
        if (req.body.category) {
            const category = await Category.findById(req.body.category);
            if (!category) {
                return res.status(404).json({ message: "Category not found" });
            }
            updatedData.category = req.body.category;
        } */

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
//search with title
const searchServiceWithName = async (req, res) => {
    try {
        const service = await Event.find();
        const {name}=req.params;
        const filtre=[];
        let j=0;
        for(let i in service){
            if(service[i].name==name){
                filtre[j]=service[i];
                j++;
            }
        }
        res.status(200).json(filtre);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Error search service' });
    }
  }
  //search with categorie
  const searchServiceWithCategorie = async (req, res) => {
    try {
        const { categorie } = req.params;
        const service = await Service.find({ categorie });
        res.status(200).json(service);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error search service' });
    }
}

module.exports = {
    getServices,
    getService,
    createService,
    updateService,
    deleteService,
    downloadDocument, 
    getImage,
    approveService,
    searchServiceWithName,
    searchServiceWithCategorie,
    getApprovedServices
};
