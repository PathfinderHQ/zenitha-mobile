import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { ResetOtpScreenProps } from '../../../screens/auth/ResetOtp';
import { Button, Otp } from '../../../components';
import { AuthRoutes, OTP_LENGTH } from '../../../constants';
import { useAuth } from '../../../hooks';

const ResetOtpForm: FC<ResetOtpScreenProps> = ({ navigation }) => {
    const { reset } = useAuth();

    const { setOtp, otp } = reset;

    const onSubmit = () => navigation.navigate(AuthRoutes.Reset);

    return (
        <View style={styles.container}>
            <Otp value={otp} onChange={setOtp} />
            <Button disabled={otp.length < OTP_LENGTH} title='Next' customStyles={styles.button} onPress={onSubmit} />
        </View>
    );
};

export default ResetOtpForm;

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
