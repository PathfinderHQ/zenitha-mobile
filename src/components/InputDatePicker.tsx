import React from 'react';
import { View } from 'react-native';
import { DatePickerInput } from 'react-native-paper-dates';

export default function InputDatePicker() {
    const [inputDate, setInputDate] = React.useState<Date | undefined>(new Date());

    return (
        <View style={{ justifyContent: 'center', alignItems: 'stretch', alignSelf: 'stretch' }}>
            <DatePickerInput locale='en' value={inputDate} onChange={(d) => setInputDate(d)} inputMode='start' />
        </View>
    );
}
