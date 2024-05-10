const express = require("express");
const router = express.Router();
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
  getTotalServicesCount,
} = require("../controllers/touristicServices.controller");

router.get("/", getServices);
router.get("/:id", getService);
router.post("/", createService);
router.patch("/:id", updateService);
router.delete("/:id", deleteService);

//route for downloading the document
router.get("/download/:id/document", downloadDocument);

router.get("/getimage/:id", getImage);

//route for adding to wishlist by client
router.post("/:id/wishlist", addToWishlist);

//route to approve the service by admin
router.post("/:id/approve", approveService);
router.get("/approved/:isApproved", getApprovedServices);

//route for calculating statistics by category
router.get("/statistics/:category", getServicesByCategory);

//get the total number of services
router.get("/total", getTotalServicesCount);

module.exports = router;
