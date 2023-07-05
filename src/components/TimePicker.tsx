import { en, registerTranslation, TimePickerModal } from 'react-native-paper-dates';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

registerTranslation('en', en);

export default function TimePicker() {
    const [visible, setVisible] = React.useState(false);
    const onDismiss = React.useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const onConfirm = React.useCallback(
        ({ hours, minutes }: { hours: number; minutes: number }) => {
            setVisible(false);
            console.log({ hours, minutes });
        },
        [setVisible],
    );

    return (
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Button onPress={() => setVisible(true)} uppercase={false} mode='outlined'>
                Pick time
            </Button>
            <TimePickerModal visible={visible} onDismiss={onDismiss} onConfirm={onConfirm} hours={12} minutes={14} />
        </View>
    );
}
