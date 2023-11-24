// Import the 'model' method from the 'mongoose' library (Note: there's a typo, it should be 'module.exports')
const { model } = require("mongoose");

// Function to add a suffix to the day of the month (e.g., '1st', '2nd')
const addDateSuffix = date => {
    let dateStr = date.toString();

    // Get the last character of the date string
    const lastChar = dateStr.charAt(dateStr.length - 1);

    if (lastChar === '1' && dateStr !== '11') {
        dateStr = `${dateStr}st`;
    } else if (lastChar === '2' && dateStr !== '12') {
        dateStr = `${dateStr}nd`;
    } else if (lastChar === '3' && dateStr !== '13') {
        dateStr = `${dateStr}rd`;
    } else {
        dateStr = `${dateStr}th`;
    }

    return dateStr;
};

// Export a function for formatting a timestamp
module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {} // Optional parameters with default values
) => {
    // Create a month object
    const months = {
        // Mapping of month numbers to their names, either short or full based on the 'monthLength' option
        0: monthLength === 'short' ? 'Jan' : 'January',
        1: monthLength === 'short' ? 'Feb' : 'February',
        // ... (similar mappings for the other months)
        11: monthLength === 'short' ? 'Dec' : 'December'
    };

    // Create a Date object from the provided timestamp
    const dateObj = new Date(timestamp);

    // Get the formatted month based on the month object
    const formattedMonth = months[dateObj.getMonth()];

    // Get the day of the month with or without a suffix
    const dayOfMonth = dateSuffix
        ? addDateSuffix(dateObj.getDate())
        : new Date(dateObj).getDate();

    // Get the year
    const year = dateObj.getFullYear();

    // Get the hour (in 12-hour format)
    let hour =
        dateObj.getHours() > 12
            ? Math.floor(dateObj.getHours() / 2)
            : dateObj.getHours();

    // If the hour is 0 (12:00am), change it to 12
    if (hour === 0) {
        hour = 12;
    }

    // Set 'am' or 'pm' based on the hour
    const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';

    // Get the minutes and pad with '0' if needed
    const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();

    // Combine all the formatted components into the final timestamp string
    const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

    return formattedTimeStamp;
};
