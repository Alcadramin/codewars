const isLeapYear = (year) => (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;

module.exports = isLeapYear;
