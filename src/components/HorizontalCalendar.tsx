import { useState, useEffect, FC } from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import * as dateFns from 'date-fns';
import CalendarItem from './CalendarItem';

const { height } = Dimensions.get('screen');

type HorizontalCalendarProps = {
    onSelectDate: (value: string) => void;
    selected: string;
};

const HorizontalCalendar: FC<HorizontalCalendarProps> = ({ onSelectDate, selected }) => {
    const [dates, setDates] = useState<Date[]>([]);

    // get the dates from today to 10 days from now, format them as strings and store them in state
    const getDates = () => {
        const datesArray = [];
        for (let i = 0; i < 10; i++) {
            const date = dateFns.addDays(new Date(), i);
            datesArray.push(date);
        }
        setDates(datesArray);
    };
    useEffect(() => {
        getDates();
    }, []);

    return (
        <View style={styles.dateSection}>
            <View style={styles.scroll}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {dates.map((date) => (
                        <CalendarItem
                            key={date.getMilliseconds()}
                            date={date}
                            onSelectDate={onSelectDate}
                            selected={selected}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default HorizontalCalendar;

const styles = StyleSheet.create({
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    dateSection: {
        width: '100%',
        padding: 1,
    },
    scroll: {
        height: height / 12,
    },
});
