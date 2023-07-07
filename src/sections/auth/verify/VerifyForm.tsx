import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Otp } from '../../../components';
import { OTP_LENGTH, Routes } from '../../../constants';
import { VerifyEmailScreenProps } from '../../../screens/auth/VerifyEmail';
import { useAuth, useError, useMessage } from '../../../hooks';

const VerifyForm: FC<VerifyEmailScreenProps> = ({ navigation }) => {
    const [otp, setOtp] = useState<string>('');

    const { verify, verifyEmail } = useAuth();

    const { loading, error, success, clearError, clearMessage, message } = verify;

    const onSubmit = () => {
        verifyEmail(otp);
    };

    // handle error
    useError(error, clearError);

    // handle message
    useMessage(message, clearMessage);

    // navigate to homepage
    useEffect(() => {
        if (success) {
            navigation.navigate(Routes.Dashboard);
        }

        // eslint-disable-next-line
    }, [success]);

    return (
        <View style={styles.container}>
            <Otp value={otp} onChange={setOtp} />
            <Button
                loading={loading}
                disabled={otp.length < OTP_LENGTH}
                title='Verify'
                customStyles={styles.button}
                onPress={onSubmit}
            />
        </View>
    );
};

export default VerifyForm;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        width: '80%',
        borderRadius: 10,
        marginTop: 40,
    },
});
