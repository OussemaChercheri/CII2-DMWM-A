const express = require('express');
const Service = require('../modules/touristicServices.model');
const router = express.Router();
const {getServices, getService, createService, updateService, deleteService} = require('../controllers/touristicServices.controller');

router.get('/', getServices);
router.get("/:id", getService);

router.post("/", createService);

// update a product
router.put("/:id", updateService);

// delete a product
router.delete("/:id", deleteService);




module.exports = router;