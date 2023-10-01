function isNotLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 !== 0) {
    return true; // It's not a leap year
  } else {
    return false; // It's a leap year
  }
}

// Example usage:
const year = 2023;
const result = isNotLeapYear(year); // This will return true because 2023 is not a leap year
