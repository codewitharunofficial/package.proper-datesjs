
---

# @codewitharun/proper-dates.js

`@codewitharun/proper-dates.js` is a lightweight, TypeScript-based date formatting and manipulation library. It provides an intuitive `DateFormatter` class that makes working with dates and times in JavaScript simple and efficient. Whether you need to format dates, calculate relative times, or parse date inputs, `@codewitharun/proper-dates.js` has you covered.

## Features
- **Date Formatting**: Format dates using flexible patterns like `YYYY-MM-DD HH:mm:ss`.
- **Relative Time**: Calculate time differences like "2 days ago" or "in 3 hours".
- **Date Parsing**: Automatically handle Unix timestamps, date strings, or `Date` objects.

## Installation

Install the package using npm or yarn:

```bash
npm install @codewitharun/proper-dates.js
# or
yarn add @codewitharun/proper-dates.js
```

## Usage

Start by importing the `DateFormatter` class and using it to work with dates.

### Basic Example

```javascript
import {DateFormatter} from '@codewitharun/proper-dates.js';

// Initialize the DateFormatter with a date input
const formatter = new DateFormatter('2024-11-30T12:00:00Z');

// Format the date
console.log(formatter.formatDate('YYYY-MM-DD HH:mm:ss')); // Outputs: "2024-11-30 12:00:00"

// Calculate relative time
const pastDate = new DateFormatter(Date.now() - 1000 * 60 * 60 * 24); // 1 day ago
console.log(pastDate.fromNow()); // Outputs: "1 day ago"

// Parse a date
const parsedDate = new DateFormatter(1700000000000); // Unix timestamp
console.log(parsedDate.formatDate('YYYY-MM-DD')); // Outputs: "2024-11-14"
```

### API Reference

#### **Constructor**

```typescript
new DateFormatter(input: Date | number | string)
```

- `input`: The date to initialize the formatter with. Accepts:
  - A `Date` object.
  - A Unix timestamp (number).
  - A date string (e.g., `"2024-11-30T12:00:00Z"`).

#### **Methods**

1. **`formatDate(format: string): string`**
   - Formats the date into a custom string.
   - **Parameters**:
     - `format`: The format string. Supports:
       - `YYYY` - Full year
       - `MM` - Month (2-digit)
       - `DD` - Day (2-digit)
       - `HH` - Hours (24-hour format, 2-digit)
       - `mm` - Minutes (2-digit)
       - `ss` - Seconds (2-digit)
   - **Returns**: The formatted date string.

   **Example**:
   ```javascript
   const formatter = new DateFormatter(new Date());
   console.log(formatter.formatDate('YYYY-MM-DD')); // "2024-11-30"
   ```

2. **`fromNow(): string`**
   - Calculates the relative time from the current date to the initialized date.
   - **Returns**: A string representing the relative time (e.g., `"2 days ago"`, `"in 3 hours"`).

   **Example**:
   ```javascript
   const pastDate = new DateFormatter(Date.now() - 1000 * 60 * 60 * 24);
   console.log(pastDate.fromNow()); // "1 day ago"
   ```

3. **Static Method: `toDate(input: string | number): Date`**
   - Parses a string or Unix timestamp into a `Date` object.
   - **Parameters**:
     - `input`: The date string or Unix timestamp to parse.
   - **Returns**: A `Date` object.

   **Example**:
   ```javascript
   const parsed = DateFormatter.toDate('2024-11-30T12:00:00Z');
   console.log(parsed); // Outputs: Date object
   ```

  4. **Static Method: `toLongDate(input: Date | number | string): string`**
  - **Parameters**:
     - `input`: The date string or Unix timestamp to parse.
  - Retrun Log Date String like **`December 1, 2024`**


## Error Handling

- If the `DateFormatter` constructor receives an invalid input, it will throw an error.
  ```javascript
  const invalidDate = new DateFormatter('invalid-date'); // Throws: "Invalid date input"
  ```

## License

This package is licensed under the MIT License. See the LICENSE file for details.

---

Let me know if you'd like to adjust or expand the content!

## **Acknowledgments**
Inspired by popular date libraries like Moment.js and Day.js. Built with ❤️ for developers.

---