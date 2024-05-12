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
const  isAuth  = require("../middlewares/isAuth");

router.get("/", getServices);
router.get("/:id", getService);
router.post("/", isAuth, createService);
router.patch("/:id", isAuth, updateService);
router.delete("/:id", isAuth, deleteService);

//route for downloading the document
router.get("/download/:id/document", downloadDocument);

router.get("/getimage/:id", getImage);

//route for adding to wishlist by client
router.post("/:id/wishlist", isAuth, addToWishlist);

//route to approve the service by admin
router.post("/:id/approve", approveService);
router.get("/approved/:isApproved", isAuth, getApprovedServices);

//route for calculating statistics by category
router.get("/statistics/:category", getServicesByCategory);

//route to rate the service by client
router.put("/rating", isAuth, rating);

//get the total number of services
router.get("/total", getTotalServicesCount);

module.exports = router;
