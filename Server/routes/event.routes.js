const express = require('express');
const router = express.Router();
    const {getEvents,getEvent,createEvent,
        updateEvent,deleteEvent,
        searchEventWithCategorie,
        searchEventWithTitle,
        searchEventWithDate,sortAsc,
        approveEvent,
        getApprovedEvents,
        sortDesc,} = require('../controllers/event.Controller');


router.get('/', getEvents);

router.get("/:id", getEvent);

router.post("/", createEvent);

router.patch("/:id", updateEvent);

router.delete("/:id", deleteEvent);

router.get("/search/:title", searchEventWithTitle);

router.get("/categorie/:categorie", searchEventWithCategorie);

router.get("/date/:date", searchEventWithDate);

router.get("/sort/:price", sortAsc);

router.get("/sortdesc/:price", sortDesc);

//route to approve the service by admin
router.post('/:id/approve', approveEvent);
router.get('/approved/:isApproved', getApprovedEvents);






module.exports = router;