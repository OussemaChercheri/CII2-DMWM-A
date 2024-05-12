const express = require("express");
const router = express.Router();
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  searchEventWithCategorie,
  searchEventWithTitle,
  searchEventWithDate,
  sortAsc,
  approveEvent,
  getApprovedEvents,
  sortDesc,
  getImage,
} = require("../controllers/event.Controller");
const isAuth = require("../middlewares/isAuth");

router.get("/", getEvents);

router.get("/:id", getEvent);

router.post("/", isAuth, createEvent);

router.patch("/:id", isAuth, updateEvent);

router.delete("/:id", isAuth, deleteEvent);

router.get("/search/:title", isAuth, searchEventWithTitle);

router.get("/categorie/:categorie", isAuth, searchEventWithCategorie);

router.get("/date/:date", isAuth, searchEventWithDate);

router.get("/sort/:price", isAuth, sortAsc);

router.get("/sortdesc/:price", isAuth, sortDesc);

//route to approve the service by admin
router.post("/:id/approve", approveEvent);
router.get("/approved/:isApproved", isAuth, getApprovedEvents);

//route to get image

router.get("/getimage/:id", getImage);

module.exports = router;
