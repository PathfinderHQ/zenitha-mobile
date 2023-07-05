import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { Calendar, DatePickerModal } from 'react-native-paper-dates';
import { CalendarDate } from 'react-native-paper-dates/lib/typescript/Date/Calendar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function DatePicker() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [open, setOpen] = React.useState(false);

    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params: { date: CalendarDate }) => {
            setOpen(false);
            setDate(params.date);
        },
        [setOpen, setDate],
    );

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <Button onPress={() => setOpen(true)} uppercase={false} mode='outlined'>
                    Pick single date
                </Button>
                <DatePickerModal
                    locale='en'
                    mode='single'
                    visible={open}
                    onDismiss={onDismissSingle}
                    date={date}
                    onConfirm={onConfirmSingle}
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
