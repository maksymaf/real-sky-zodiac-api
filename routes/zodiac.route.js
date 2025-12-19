const { Router } = require('express');
const { getRealSign } = require('../controllers/zodiac.controller');
const { validateDate } = require('../middleware/dateValidation');

const router = Router();

router.get('/real-sign', validateDate, getRealSign)

module.exports = router;