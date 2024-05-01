const express = require('express');
const router = express.Router();
    const {getEvents,
        getEvent,
        createEvent,
        updateEvent,
        deleteEvent,
        searchEventWithTitle,
        searchEventWithCategorie,
        sortAsc,
        sortDesc,getImage,} = require('../controller/eventController');


router.get('/', getEvents);

router.get("/:id", getEvent);

router.post("/", createEvent);

router.patch("/:id", updateEvent);

router.delete("/:id", deleteEvent);

router.get("/search/:title", searchEventWithTitle);

router.get("/categorie/:categorie", searchEventWithCategorie);
router.get("/sort/:price", sortAsc);

router.get("/sortdesc/:price", sortDesc);

router.get("/getimage/:id", getImage);

module.exports = router;