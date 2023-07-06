import { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as dateFns from 'date-fns';

interface CalendarItemProps {
    date: Date;
    onSelectDate: (value: string) => void;
    selected: string;
}

const CalendarItem: FC<CalendarItemProps> = ({ date, onSelectDate, selected }) => {
    /**
     * use moment to compare the date to today
     * if today, show 'Today'
     * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
     */
    const day = dateFns.isEqual(date, new Date()) ? 'Today' : dateFns.format(date, 'E');
    // get the day number e.g 1, 2, 3, 4, 5, 6, 7
    const dayNumber = dateFns.format(date, 'dd');

    // get the full date e.g 2021-01-01 - we'll use this to compare the date to the selected date
    const fullDate = dateFns.format(date, 'yyyy-MM-dd');

    return (
        <TouchableOpacity
            onPress={() => onSelectDate(fullDate)}
            style={[styles.card, selected === fullDate && { backgroundColor: '#343A40' }]}
        >
            <Text style={[styles.big, selected === fullDate && { color: '#fff' }]}>{day}</Text>
            <View style={{ height: 10 }} />
            <Text style={[styles.medium, selected === fullDate && { color: '#fff', fontWeight: 'bold', fontSize: 24 }]}>
                {dayNumber}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        borderColor: '#ddd',
        padding: 3,
        alignItems: 'center',
        height: 70,
        width: 60,
    },
    big: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    medium: {
        fontSize: 16,
    },
});

export default CalendarItem;
