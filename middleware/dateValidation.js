const validateDate = (req, res, next) => {
    const { birthday } = req.query;
    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(birthday)) {
        return res.status(400).json({
            success: false,
            input: { birthday },
            result: null,
            error: {
                message: "Invalid date format. Use DD.MM.YYYY"
            }
        });
    }
    next();
}

module.exports = {validateDate}