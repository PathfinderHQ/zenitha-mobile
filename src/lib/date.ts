export enum Direction {
    GREATER = 'greater',
    LESSER = 'lesser',
}

export const extractDateTime = (value: string) => {
    const dateTimeParts = value.split(' ');
    const date = dateTimeParts[0];
    const time = dateTimeParts[1];

    return { date, time };
};

export const getCurrentDate = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

const isSameDate = (date1: Date, date2: Date) => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
};

export const filterDateFromToday = (date: Date, direction: Direction): boolean => {
    const today = new Date();

    date.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    // Get difference in whole

    if (direction === Direction.GREATER) {
        return date > today;
    }

    console.log('date', date);
    console.log('today', today);

    return date < today;
};
