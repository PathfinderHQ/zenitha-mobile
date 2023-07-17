import dayjs from 'dayjs';

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

export const formatTaskDate = (value: string): string => {
    let { date, time } = extractDateTime(value);

    const currentYear = new Date().getFullYear();

    const year = dayjs(date).year();

    time = dayjs(value).format('H:mm');

    date = currentYear === year ? dayjs(date).format('ddd, D MMM') : dayjs(date).format('ddd, D MMM YYYY');

    return `${date}, ${time}`;
};
