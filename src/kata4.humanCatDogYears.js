const humanCatDogYears = number => {
    if (number > 2) {
        return [number, 24 + (4 * (number - 2)), 24 + (5 * (number - 2))];
    } else if (number = 2) {
        return [2, 24, 24];
    } else return [1, 15, 15];
};

module.exports = humanCatDogYears;
