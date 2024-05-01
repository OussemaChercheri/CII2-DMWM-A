const Reservation = require('../model/reservation.js');
const Event = require('../model/events.js');

//get all reservations
const getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get reservation by id
const getReservation = async (req, res) => {
    try {
        const reserv = await Reservation.findById(req.params.id);
        res.status(200).json(reserv);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get reservation by event
const getReservationsByEvent = async (req, res) => {
    try {
      const { eventId } = req.params;
  
      // Check if the event exists
      const event = await Event.findById(eventId);
      if (!event) {
        return res.status(404).send('Event not found');
      }
  
      // Retrieve all reservations for the event
      const reservations = await Reservation.find({ event: eventId }).populate('user');
  
      res.status(200).send(reservations);
    } catch (error) {
      console.error('Error retrieving reservations:', error);
      res.status(500).send('Internal server error');
    }
  };
// Reserve a service
const createReservation = async (req, res) => {
    try {
      const { event_id } = req.body;  
      // Check if the service exists
      if (!event_id) {
        return res.status(400).send('Event ID is required');
      }
  
      const event = await Event.findById(event_id);
      if (!event) {
        return res.status(404).send('Event not found');
      }
  
      // Create the reservation
      const reservation = new Reservation({
        event: event_id,
      });
  
      await reservation.save();
  
      res.status(200).send('Reservation created successfully');
    } catch (error) {
      console.error('Error creating reservation:', error);
      res.status(500).send('Internal server error');
    }
  };

//delete a Reservation
const deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const reserv = await Reservation.findByIdAndDelete(id);
        if (!reserv) {
            return res.status(404).json({ message: "Reservation not found" });
        }
        res.status(200).json({ message: "Reservation deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//sorting 
const sortDate = async (req, res) => {
    try {
      const reservations = await Reservation.find({});
      const sortedDate = reservations.sort((a, b) => {
        return a.dateres.getTime() - b.dateres.getTime();
      });
      res.send(sortedDate);
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "Error sort reservations" });
    }
  };

  //search with event
  const searchEventWithEvent = async (req, res) => {
    try {
        const { event_id } = req.params;
        const reservations = await Reservation.find({ event_id });
        res.status(200).json(reservations);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error search reservations' });
    }
}
  
  //search with date
const searchEventWithDate = async (req, res) => {
    try {
        const { dateres } = req.params;
        const events = await Event.find({ date: new Date(dateres) });
        res.status(200).json(events);
      } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error search events' });
      }
    };
  

module.exports = {
getAllReservations,
    getReservation,
    getReservationsByEvent,
    createReservation,
    deleteReservation,
    searchEventWithEvent,
    searchEventWithDate,
    sortDate,
};