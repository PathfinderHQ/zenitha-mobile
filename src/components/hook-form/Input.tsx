import React, { FC, useState } from 'react';
import { TextInput } from 'react-native-paper';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { useFormContext, Controller } from 'react-hook-form';
import { Colors } from '../../constants';

const { width } = Dimensions.get('screen');

interface Props {
    name: string;
    placeholder: string;
    secureTextEntry?: boolean;
}

const Input: FC<Props> = ({ placeholder, secureTextEntry, name }) => {
    const { control } = useFormContext();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const toggleShowPassword = () => setShowPassword((prevState) => !prevState);

    const icon = showPassword ? 'eye-off' : 'eye';

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View style={styles.container}>
                    <View style={[styles.inputContainer, error ? styles.inputError : {}]}>
                        <TextInput
                            onBlur={onBlur}
                            style={styles.input}
                            placeholder={placeholder}
                            secureTextEntry={!showPassword && secureTextEntry}
                            onChangeText={(text) => onChange(text)}
                            value={value}
                            right={secureTextEntry && <TextInput.Icon onPress={toggleShowPassword} icon={icon} />}
                        />
                    </View>
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

export default Input;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    inputContainer: {
        width: width / 1.1,
        alignSelf: 'center',
        backgroundColor: Colors.input_background,
        borderRadius: 5,
    },
    input: {
        padding: 3,
        color: Colors.main_text,
        backgroundColor: 'transparent',
    },
    errorContainer: {
        width: width / 1.1,
        paddingHorizontal: 2,
        paddingVertical: 1,
    },
    error: {
        color: 'red',
    },
    inputError: {
        borderWidth: 1,
        borderColor: 'red',
    },
});
