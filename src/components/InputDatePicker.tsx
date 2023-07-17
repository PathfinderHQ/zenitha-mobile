import React, { FC } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { DatePickerInput } from 'react-native-paper-dates';
import { useFormContext, Controller } from 'react-hook-form';

type InputDatePickerProps = {
    name: string;
};

const { width } = Dimensions.get('screen');

const InputDatePicker: FC<InputDatePickerProps> = ({ name }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        alignSelf: 'stretch',
                    }}
                >
                    <DatePickerInput
                        style={{ backgroundColor: 'transparent' }}
                        locale='en'
                        value={value}
                        onChange={onChange}
                        inputMode='start'
                        withDateFormatInLabel={false}
                    />
                    {!!error && (
                        <View style={styles.errorContainer}>
                            <Text style={styles.error}>{error.message}</Text>
                        </View>
                    )}
                </View>
            )}
        />
    );
};

export default InputDatePicker;

const styles = StyleSheet.create({
    errorContainer: {
        width: width / 1.1,
        paddingHorizontal: 2,
        paddingVertical: 1,
    },
    error: {
        color: 'red',
    },
});
