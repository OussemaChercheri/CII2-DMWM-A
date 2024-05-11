const Service = require("../modules/touristicServices.model");
const Event = require("../modules/event.model");

const getSericeStatistics = async (req, res) => {
  try {
    const totalServices = await Service.countDocuments();
    const approvedServices = await Service.countDocuments({ isApproved: true });
    const totalSales = await Service.aggregate([
      { $group: { _id: null, totalSales: { $sum: "$price" } } },
    ]);
    const highestRatedService = await Service.findOne()
      .sort("-totalrating")
      .populate("ratings.postedby", "username");

    res.status(200).json({
      totalServices,
      approvedServices,
      totalSales: totalSales.length > 0 ? totalSales[0].totalSales : 0,
      highestRatedService,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getEventStatistics = async (req, res) => {
  try {
    const totalEvents = await Event.countDocuments();
    const approvedEvents = await Event.countDocuments({ isApproved: true });
    const totalSales = await Event.aggregate([
      { $group: { _id: null, totalSales: { $sum: "$price" } } },
    ]);
    const highestRatedEvent = await Event.findOne()
      .sort("-totalrating")
      .populate("ratings.postedby", "username");

    res.status(200).json({
      totalEvents,
      approvedEvents,
      totalSales: totalSales.length > 0 ? totalSales[0].totalSales : 0,
      highestRatedEvent,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getSericeStatistics,
  getEventStatistics,
};
