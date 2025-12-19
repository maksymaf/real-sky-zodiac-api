const { JD } = require('../services/jdConverter');
const { convertToDate } = require('../services/dateConverter');

class ZodiacController{
    async getRealSign(req, res){
        const { birthday } = req.query;

        const date = convertToDate(birthday);

        const rad = (deg) => deg * Math.PI / 180;

        const D = JD(date) - 2451545.0;
            const g = 357.529 + 0.98560028 * D;
            const q = 280.459 + 0.98564736 * D;

            let L = q + 1.915 * Math.sin(rad(g)) + 0.020 * Math.sin(rad(2 * g));
            L = L % 360;
            if (L < 0) L += 360;

        const zodiacSigns = [
                { name: "Овен", start: 0, end: 30 },
                { name: "Телець", start: 30, end: 60 },
                { name: "Близнюки", start: 60, end: 90 },
                { name: "Рак", start: 90, end: 120 },
                { name: "Лев", start: 120, end: 150 },
                { name: "Діва", start: 150, end: 180 },
                { name: "Терези", start: 180, end: 210 },
                { name: "Скорпіон", start: 210, end: 240 },
                { name: "Змієносець", start: 240, end: 255 },
                { name: "Стрілець", start: 255, end: 285 },
                { name: "Козоріг", start: 285, end: 315 },
                { name: "Водолій", start: 315, end: 345 },
                { name: "Риби", start: 345, end: 360 },
        ];

        for (const sign of zodiacSigns) {
            if (L >= sign.start && L < sign.end) {
                return res.status(200).json({
                    success: true,
                    input: {
                        birthday: birthday,
                    },
                    result: {
                        sign: sign.name,
                    },
                    error: null
                });
            }
        }

        return res.status(404).json({
            "message": "zodiac sign is undefined"
        })
    }
}

module.exports = new ZodiacController();