import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function InputDatePicker() {
    const [inputDate, setInputDate] = React.useState<Date | undefined>(new Date());

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <DatePickerInput
                    locale='en'
                    label='Start'
                    value={inputDate}
                    onChange={(d) => setInputDate(d)}
                    inputMode='start'
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
