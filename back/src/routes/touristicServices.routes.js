const express = require('express');
const router = express.Router();

const {getServices, getService, createService, updateService, deleteService, downloadDocument, getImage, approveService, getApprovedServices} = 
require('../controller/touristicServices.controller');


router.get('/', getServices);

router.get("/:id", getService);

router.post("/", createService);


router.patch("/:id", updateService);

router.delete("/:id", deleteService);

router.get('/download/:id/document', downloadDocument);
router.get('/getimage/:id', getImage);

router.post('/:id/approve', approveService);

router.get('/approved/:isApproved', getApprovedServices);



router.put("/:id", updateService);






module.exports = router;