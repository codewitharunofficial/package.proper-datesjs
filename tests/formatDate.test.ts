import DateFormatter from "../src/DateFormatter";


test('format date correctly', () => {
    const date = new Date('2024-11-28T10:15:30Z');
    const unixDate = 1733032145;
    expect(DateFormatter.toLongDate(unixDate)).toBe('December 1, 2024');
});