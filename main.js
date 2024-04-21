"use strict";
//          100 days of coding challenge ( DAY 33 )
Object.defineProperty(exports, "__esModule", { value: true });
// Question 01
// --This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted());
// Question 02
// --Calculates how many days are left until New Year's Day
function daysUntilNewYear() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
    const diff = newYear.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + "days until new year");
// Tells us how many days there are until the next New Year's Day.
//   Question 03 
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); // Months are 0-indexed
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// Replace with your birth month and day
const nextBirthday = getNextBirthday(10, 10); // Example: October 10th
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
// Shows the date of the next birthday.
