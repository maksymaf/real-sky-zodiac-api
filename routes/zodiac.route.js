const { Router } = require('express');
const { getRealSign, compareSigns } = require('../controllers/zodiac.controller');
const { validateDate } = require('../middleware/dateValidation');

const router = Router();

router.get('/real-sign', validateDate, getRealSign);
router.get('/compare-signs', validateDate, compareSigns);

module.exports = router;