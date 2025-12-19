const { convertToDate } = require('../services/dateConverter');
const { getAstronomicalSign } = require('../services/getAstronomicalSign');
const { getAstrologicalSign } = require('../services/getAstrologicalSign');

class ZodiacController{
    async getRealSign(req, res){
        const { birthday } = req.query;
        const date = convertToDate(birthday);
        const zodiacSign = getAstronomicalSign(date);

        if (zodiacSign){
            return res.status(200).json({
                success: true,
                input: {
                    birthday: birthday,
                },
                result: {
                    sign: zodiacSign,
                },
                error: null
            });
        }else{
            return res.status(404).json({
                success: false,
                input: {
                    birthday: birthday,
                },
                result: null,
                error: "no zodiac found"
            });
        }
    }

    async compareSigns(req, res){
        try{
            const { birthday } = req.query;
            const date = convertToDate(birthday);

            const realZodiacSign = getAstronomicalSign(date);
            const astroZodiacSign = getAstrologicalSign(date);

            return res.status(200).json({
                success: true,
                input: {
                    birthday: birthday,
                },
                result: {
                    realZodiacSign: realZodiacSign,
                    astroZodiacSign: astroZodiacSign,
                    match: astroZodiacSign === realZodiacSign,
                },
                error: null
            })
        }catch(err){
            res.status(500).json({
                success: false,
                input: {
                    birthday: birthday,
                },
                result: null,
                error: err.message
            });
        }
    }
}

module.exports = new ZodiacController();