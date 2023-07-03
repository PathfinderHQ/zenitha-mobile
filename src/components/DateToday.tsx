import React, { FC, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';



const DateToday: FC = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const formattedDate = `${today.getMonth() + 1}/${today.getDate()}`;

        setDate(formattedDate);
    }, []);

    return <Text style={styles.date}>{date}</Text>;
};

const styles = StyleSheet.create({

    date: {
        color: Colors.main_text,
        fontSize: 20,
    },

});


export default DateToday;
