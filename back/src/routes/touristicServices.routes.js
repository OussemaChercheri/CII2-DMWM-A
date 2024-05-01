const express = require('express');
const router = express.Router();
<<<<<<< HEAD:back/src/routes/touristicServices.routes.js

const {getServices, getService, createService, updateService, deleteService, downloadDocument, getImage, approveService, getApprovedServices} = 
require('../controller/touristicServices.controller');

=======
const {
    getServices,
    getService,
    createService,
    updateService,
    deleteService,
    downloadDocument,
    getImage,
    approveService,
    getApprovedServices,
    getServicesByCategory,
    addToWishlist,
    rating,
    getTotalServicesCount
} = require('../controllers/touristicServices.controller');
>>>>>>> 8abc042b25d79bc46e35cbcefe1833c1611a4e83:Server/routes/touristicServices.routes.js

router.get('/', getServices);
router.get('/:id', getService);
router.post('/', createService);
router.patch('/:id', updateService);
router.delete('/:id', deleteService);

<<<<<<< HEAD:back/src/routes/touristicServices.routes.js
router.get("/:id", getService);

router.post("/", createService);


router.patch("/:id", updateService);

router.delete("/:id", deleteService);

=======
//route for downloading the document
>>>>>>> 8abc042b25d79bc46e35cbcefe1833c1611a4e83:Server/routes/touristicServices.routes.js
router.get('/download/:id/document', downloadDocument);

router.get('/getimage/:id', getImage);

//route for adding to wishlist by client
router.post('/:id/wishlist', addToWishlist);

//route to approve the service by admin
router.post('/:id/approve', approveService);
router.get('/approved/:isApproved', getApprovedServices);

//route for calculating statistics by category
router.get('/statistics/:category', getServicesByCategory);

//route to rate the service by client
router.put("/rating", rating);

<<<<<<< HEAD:back/src/routes/touristicServices.routes.js
router.put("/:id", updateService);




=======
//get the total number of services
router.get("/total", getTotalServicesCount);
>>>>>>> 8abc042b25d79bc46e35cbcefe1833c1611a4e83:Server/routes/touristicServices.routes.js

module.exports = router;
