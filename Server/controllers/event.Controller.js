const Event = require('../modules/event.model');
const multer = require('multer');
const path = require('path');

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

//get all events
const getEvents = async (req, res) => {
    try {
        const evenements = await Event.find();
        res.status(200).json(evenements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get event by id
const getEvent = async (req, res) => {
    try {
        const evenement = await Event.findById(req.params.id);
        res.status(200).json(evenement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//create event
const createEvent = async (req, res) => { // Move upload.single('image') to here
    try {
        upload.single('image')(req, res, async function (err) {
            if (err) {
                return res.status(400).send(err);
            }
            const data = req.body;
            const evenement = new Event(data);
            evenement.image = filename;
            try {
                const saved = await evenement.save();
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

//update event
const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        let updatedData = req.body;

        if (req.file) {
            const date = Date.now();
            const newFilename = date + '-' + req.file.originalname;
            const oldevent = await Event.findById(id);

            if (!oldevent) {
                return res.status(404).json({ message: "Event not found" });
            }

            const filePath = './uploads/' + oldevent.image;
            fs.unlinkSync(filePath);

            updatedData.image = newFilename;
        }

        const evenement = await Event.findByIdAndUpdate(id, updatedData, { new: true });

        if (!evenement) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json(evenement);
    } catch (error) {

        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//delete an event
const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const evenement = await Event.findByIdAndDelete(id);
        if (!evenement) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json({ message: "Event deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//get image

//sorting creesing,(price)
const sortAsc = async (req, res) => {
    try {
      const events = await Event.find({});
      const sortedEvents = events.sort((a, b) => {
        return a.price - b.price;
      });
      res.send(sortedEvents);
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "Error sort events" });
    }
  };

  //sorting decreesing,(price)
const sortDesc = async (req, res) => {
    try {
      const events = await Event.find({});
      const sortedEvents = events.sort((a, b) => {
        return  b.price - a.price ;
      });
      res.send(sortedEvents);
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "Error sort events" });
    }
  };


//search with title
const searchEventWithTitle = async (req, res) => {
    try {
        const evenements = await Event.find();
        const {title}=req.params;
        const filtre=[];
        let j=0;
        for(let i in evenements){
            if(evenements[i].title==title){
                filtre[j]=evenements[i];
                j++;
            }
        }
        res.status(200).json(filtre);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Error search events' });
    }
  }
 
  //search with categorie
  const searchEventWithCategorie = async (req, res) => {
    try {
        const { categorie } = req.params;
        const evenements = await Event.find({ categorie });
        res.status(200).json(evenements);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error search events' });
    }
}
  
  //search with date
const searchEventWithDate = async (req, res) => {
    try {
        const { date } = req.params;
        const events = await Event.find({ date: new Date(date) });
        res.status(200).json(events);
      } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error search events' });
      }
    };
  


const approveEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);
        if(!event) {
            return res.status(404).json({ message: "event not found" });
        }

        event.isApproved = true; //Approve the event
        await event.save();

        res.status(200).json({ message: "event approved" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getApprovedEvents = async (req, res) => {
    try{
        const event = await Event.find();
        const {isApproved}=req.params;
        const filtre=[];
        let j=0;
    for(let i in event){
        if(event[i].isApproved){
            filtre[j]=event[i];
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


const getImage = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event || !event.image) {
            return res.status(404).json({ message: "Eevent or image not found" });
        }
        const imagePath = path.join(__dirname, '..', 'uploads', event.image);
        res.sendFile(imagePath);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    searchEventWithTitle,
    searchEventWithCategorie,
    searchEventWithDate,
    sortAsc,
    sortDesc,
    approveEvent,
    getApprovedEvents,
    getImage
};