import React, { FC, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import * as dateFns from 'date-fns';
import Colors from '../constants/colors';

const DateToday: FC = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const formattedDate = dateFns.format(today, 'MMMM dd');

        setDate(formattedDate);
    }, []);

    return <Text style={styles.date}>{date}</Text>;
};

const styles = StyleSheet.create({
    date: {
        marginTop: '10%',
        color: Colors.main_text,
        fontSize: 24,
    },
});

export default DateToday;