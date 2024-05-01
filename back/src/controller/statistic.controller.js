const Service = require('../modules/touristicServices.model');

const getStatistics = async (req, res) => {
    try {
        const totalServices = await Service.countDocuments();
        const approvedServices = await Service.countDocuments({ isApproved: true });
        const totalSales = await Service.aggregate([{ $group: { _id: null, totalSales: { $sum: '$price' } } }]);
        const highestRatedService = await Service.findOne().sort('-totalrating').populate('ratings.postedby', 'username');

        res.status(200).json({
            totalServices,
            approvedServices,
            totalSales: totalSales.length > 0 ? totalSales[0].totalSales : 0,
            highestRatedService
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getStatistics
};
