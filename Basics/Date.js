

const now = new Date()

console.log(now)


const specificDate = new Date('2024-11-28');
console.log(specificDate); // e.g., "2024-11-28T00:00:00.000Z"

const detailedDate = new Date(2024, 10, 28, 10, 30, 0); // Month is 0-indexed
console.log(detailedDate); // e.g., "2024-11-28T10:30:00.000Z"

const epochTime = new Date(0);
console.log(epochTime); // "1970-01-01T00:00:00.000Z"

console.log(Date.now()); // e.g., 1732781130123

// Months start from zero-indexed

const date = new Date();
console.log(date.getFullYear()); // e.g., 2024
console.log(date.getMonth());    // e.g., 10 (November, 0-indexed)
console.log(date.getDate());     // e.g., 28 (day of the month)
console.log(date.getDay());      // e.g., 4 (Thursday, 0=Sunday)

console.log(date.getHours());   // e.g., 10
console.log(date.getMinutes()); // e.g., 45
console.log(date.getSeconds()); // e.g., 30
console.log(date.getMilliseconds()); // e.g., 123

