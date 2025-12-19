const { Router } = require('express');
const { getRealSign, compareSigns, getConstellationInfo } = require('../controllers/zodiac.controller');
const { validateDate } = require('../middleware/dateValidation');

const router = Router();

router.get('/real-sign', validateDate, getRealSign);
router.get('/compare-signs', validateDate, compareSigns);
router.get('/constellation/:constellation', getConstellationInfo);

module.exports = router;