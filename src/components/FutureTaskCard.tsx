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
    Button,
    View,
} from 'react-native';
import Colors from '../constants/colors';
import FontFamily from '../constants/font-family';
import FontSize from '../constants/fontsize';
import { alarm, menuHorizontal } from '../constants';
import DotMenu from './DotMenu';
import DotMenuVertical from './DotMenuVertical';

const { height, width } = Dimensions.get('screen');

interface FutureTaskCardProps {
    startTime: string;
    dueTime: string;
    title: string;
    onPress: () => void;
    loading?: boolean;
    alarmIcon?: ImageURISource;
    customStyles?: StyleProp<ViewStyle>;
}

const FutureTaskCard: FC<FutureTaskCardProps> = ({
    startTime,
    dueTime,
    title,
    onPress,
    loading,
    alarmIcon,
    customStyles,
}) => {
    const containerStyle = [styles.container, customStyles];

    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <View style={styles.rightContainer}>
                <Text style={styles.bullet}>{'\u2B24'}</Text>
            </View>
            <View style={styles.middleContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.detailText}>
                    {startTime} -- {dueTime}
                </Text>
            </View>
            <View style={styles.leftContainer}>
                <DotMenuVertical />
            </View>
            {alarmIcon && <Image source={alarm.link} style={styles.image} />}
        </TouchableOpacity>
    );
};

export default FutureTaskCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: width / 1.1,
        height: height / 10,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#E9ECEF',
        marginBottom: 10,
        marginTop: 10,
    },
    rightContainer: {},
    leftContainer: {
        alignItems: 'center',
    },
    middleContainer: {},
    bullet: {
        color: '#52b788',
    },
    titleText: {
        fontSize: FontSize.heading4Size,
        color: Colors.main_text,
        fontFamily: FontFamily.Semibold,
        fontWeight: '600',
    },
    detailText: {
        fontSize: FontSize.body2BoldSmall,
        color: Colors.main_text,
        fontFamily: FontFamily.Semibold,
        fontWeight: '600',
        textAlign: 'center',
    },
    actButton: {
        height: 25,
        width: 25,
    },

    icon: {
        color: Colors.main_text,
        fontSize: 16,
    },
    image: {
        height: 25,
        width: 25,
        marginLeft: '20%',
    },
});
