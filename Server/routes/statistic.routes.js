const express = require('express');
const router = express.Router();
const { getStatistics } = require('../controllers/statistic.controller');

/*get statistiques:
    1.Total Services Count: Retrieves the total number of services in the database.
    2.Approved Services Count: Retrieves the count of services that are approved (isApproved: true).
    3.Total Sales: Calculates the sum of prices from all services.
    4.Highest Rated Service: Finds the service with the highest rating (totalrating) and includes information about the user who posted the rating.
*/
router.get('/',getStatistics);

module.exports = router;