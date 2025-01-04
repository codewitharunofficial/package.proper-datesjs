declare class DateFormatter {
    private date;
    constructor(input: Date | number | string);
    private processDate;
    formatDate(formatString: string): string;
    relativeTime(): string;
    longDate(): string | undefined;
    static toDate(dateStr: string, format: string): Date;
    static parseDate(input: Date | number | string, formatString: string): string;
    static fromNow(input: Date | number | string): string;
    static toLongDate(input: Date | number | string): string | undefined;
}
export { DateFormatter };
