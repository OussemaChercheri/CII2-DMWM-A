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
const {
  isAuthenticatedUser,
  isAdmin,
} = require("../middlewares/app.authentification");

router.get("/", getServices);
router.get("/:id", getService);
router.post("/", isAuthenticatedUser, createService);
router.patch("/:id", isAuthenticatedUser, updateService);
router.delete("/:id", isAuthenticatedUser, deleteService);

//route for downloading the document
router.get("/download/:id/document", downloadDocument);

router.get("/getimage/:id", getImage);

//route for adding to wishlist by client
router.post("/:id/wishlist", isAuthenticatedUser, addToWishlist);

//route to approve the service by admin
router.post("/:id/approve", approveService);
router.get("/approved/:isApproved", isAuthenticatedUser, getApprovedServices);

//route for calculating statistics by category
router.get("/statistics/:category", isAdmin, getServicesByCategory);

//route to rate the service by client
router.put("/rating", isAuthenticatedUser, rating);

//get the total number of services
router.get("/total", isAdmin, getTotalServicesCount);

module.exports = router;
