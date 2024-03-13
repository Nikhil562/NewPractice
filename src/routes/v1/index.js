const express = require('express');

const { FlightMiddlewares } = require('../../middlewares/index');

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

// router.post('/flights', FlightController.create);
router.post(
    '/flights', 
    FlightMiddlewares.validateCreateFlight, 
    FlightController.create
);//now before creating a fligth u r going to hit validateFlightController
router.get('/flights', FlightController.getAll);

router.post('/airports', AirportController.create);
module.exports = router;