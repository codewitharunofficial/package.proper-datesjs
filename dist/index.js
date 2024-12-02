'use strict';

const months = [
    {
        month_no: 1,
        name: "January"
    },
    {
        month_no: 2,
        name: "February"
    }, {
        month_no: 3,
        name: "March"
    }, {
        month_no: 4,
        name: "April"
    }, {
        month_no: 5,
        name: "May"
    }, {
        month_no: 6,
        name: "June"
    }, {
        month_no: 7,
        name: "July"
    }, {
        month_no: 8,
        name: "August"
    }, {
        month_no: 9,
        name: "September"
    }, {
        month_no: 10,
        name: "October"
    }, {
        month_no: 11,
        name: "November"
    }, {
        month_no: 12,
        name: "December"
    },
];

class DateFormatter {
    constructor(input) {
        this.date = this.processDate(input);
    }
    processDate(input) {
        let date;
        if (input instanceof Date) {
            date = input;
        }
        else if (typeof input === "number") {
            const isSeconds = input.toString().length === 10;
            date = new Date(isSeconds ? input * 1000 : input);
        }
        else if (typeof input === "string") {
            if (/^|d{10, 13}$/.test(input)) {
                const timestamp = parseInt(input, 10);
                const isSeconds = timestamp.toString().length === 10;
                date = new Date(isSeconds ? timestamp * 1000 : timestamp);
            }
            else {
                date = new Date(input);
            }
        }
        else {
            throw new Error("Invalid input: must be a Date, number or string");
        }
        if (isNaN(date.getTime())) {
            throw new Error("Invalid date or timestamp provided");
        }
        return date;
    }
    //formats the date into the specified format
    formatDate(formatString) {
        const replacements = {
            YYYY: this.date.getFullYear().toString(),
            MM: String(this.date.getMonth() + 1).padStart(2, "0"),
            DD: String(this.date.getDate()).padStart(2, "0"),
            HH: String(this.date.getHours()).padStart(2, "0"),
            mm: String(this.date.getMinutes()).padStart(2, "0"),
            ss: String(this.date.getSeconds()).padStart(2, "0"),
        };
        return formatString.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => replacements[match]);
    }
    //Calculates the relative time from the given date
    relativeTime() {
        let diff;
        let isFutureDate = false;
        if (this.date < new Date()) {
            diff = (new Date().getTime() - this.date.getTime()) / 1000;
        }
        else {
            diff = (this.date.getTime() - new Date().getTime()) / 1000;
            isFutureDate = true;
        }
        const absDiff = Math.abs(diff);
        if (absDiff < 10)
            return `just now`;
        if (absDiff < 60)
            return `${Math.round(diff)} few seconds ago`;
        if (absDiff < 3600 && isFutureDate)
            return `in ${Math.round(diff / 60)} minutes`;
        if (absDiff < 3600)
            return `${Math.round(diff / 60)} minutes ago`;
        if (absDiff < 86400)
            return `${Math.round(diff / 3600)} hours ago`;
        if (absDiff < 2592000)
            return `${Math.round(diff / 86400)} days ago`;
        if (absDiff < 31536000 && isFutureDate)
            return `in ${Math.round(diff / 2692000)} months`;
        if (absDiff < 31536000)
            return `${Math.round(diff / 2692000)} months ago`;
        return `${Math.round(diff / 31536000)} years ago`;
    }
    longDate() {
        let date = this.date;
        const parsedMonth = date.getMonth() + 1;
        const parseYear = date.getFullYear();
        const parseDate = date.getDate();
        const currentMonth = months.find((month) => month.month_no === parsedMonth);
        return `${currentMonth === null || currentMonth === void 0 ? void 0 : currentMonth.name} ${parseDate}, ${parseYear}`;
    }
    //covert Date
    static toDate(dateStr, format) {
        const formatParts = format.split(/[-\/:. ]/);
        const dateParts = dateStr.split(/[-\/:. ]/);
        const map = {};
        formatParts.forEach((part, index) => {
            map[part] = parseInt(dateParts[index], 10);
        });
        return new Date(map["YYYY"] || 0, (map["MM"] || 1) - 1, map["DD"] || 1, map["HH"] || 0, map["mm"] || 0, map["ss"] || 0);
    }
    //Static Method to create aDateFormatter instance and format a date.
    static parseDate(input, formatString) {
        const formatter = new DateFormatter(input);
        return formatter.formatDate(formatString);
    }
    //Static method to calculate relative time.
    static fromNow(input) {
        const formatter = new DateFormatter(input);
        return formatter.relativeTime();
    }
    static toLongDate(input) {
        const formatter = new DateFormatter(input);
        return formatter.longDate();
    }
}

exports.DateFormatter = DateFormatter;
