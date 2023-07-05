import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    Dimensions,
    StyleSheet,
    Text,
    ActivityIndicator,
    ImageURISource,
    Image,
    StyleProp,
    ViewStyle,
} from 'react-native';
import { Colors, google } from '../constants';

const { height, width } = Dimensions.get('screen');

interface IButtonProps {
    title: string;
    onPress?: () => void;
    loading?: boolean;
    icon?: ImageURISource;
    customStyles?: StyleProp<ViewStyle>;
    disabled?: boolean;
}

const Button: FC<IButtonProps> = ({ title, onPress, loading, icon, customStyles, disabled }) => {
    const containerStyle = [
        styles.container,
        icon ? styles.iconContainer : styles.textContainer,
        customStyles,
        disabled ? styles.disabled : {},
    ];

    const textStyle = icon ? styles.icon : styles.text;

    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={containerStyle}>
            {icon && <Image source={google.link} style={styles.image} />}
            {loading ? <ActivityIndicator color='#ffffff' /> : <Text style={textStyle}>{title}</Text>}
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: width / 1.1,
        height: height / 15,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 5,
    },
    textContainer: {
        backgroundColor: Colors.button_background,
        marginVertical: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.input_background,
        marginVertical: 10,
    },
    text: {
        color: Colors.button_text,
        fontSize: 18,
    },
    icon: {
        color: Colors.main_text,
        fontSize: 16,
    },
    image: {
        height: 25,
        width: 25,
        marginRight: 10,
    },
    disabled: {
        backgroundColor: Colors.disabled,
    },
});
