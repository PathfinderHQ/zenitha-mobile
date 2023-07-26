import { en, registerTranslation, TimePickerModal } from 'react-native-paper-dates';
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

registerTranslation('en', en);

type ITimePickerProps = {
    text: string;
    visible: boolean;
    onOpen: () => void;
    onDismiss: () => void;
    onConfirm: ({ hours, minutes }: { hours: number; minutes: number }) => void;
};

const TimePicker: FC<ITimePickerProps> = ({ visible, onDismiss, onConfirm, onOpen, text }) => {
    return (
        <View style={styles.container}>
            <Button onPress={onOpen} uppercase={false} mode='outlined' contentStyle={styles.content}>
                {text}
            </Button>
            <TimePickerModal visible={visible} onDismiss={onDismiss} onConfirm={onConfirm} hours={12} minutes={14} />
        </View>
    );
};

export default TimePicker;
const styles = StyleSheet.create({
    container: {
        width: '30%',
        marginTop: 10,
    },
    content: {
        width: '100%',
    },
});
