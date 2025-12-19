const JD = (date) => {
    const y = date.getUTCFullYear();
    const m = date.getUTCMonth() + 1; // місяці 1-12
    const d = date.getUTCDate() + date.getUTCHours() / 24 + date.getUTCMinutes() / 1440;
    let A = Math.floor(y / 100);
    let B = 2 - A + Math.floor(A / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
};

module.exports = {JD};