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
    View
} from 'react-native';
import Colors from '../constants/colors';
import FontFamily from '../constants/font-family';
import FontSize from '../constants/fontsize';
import { alarm, menuHorizontal } from '../constants';
import DotMenu from './DotMenu';

const { height, width } = Dimensions.get('screen');

interface CurrentTaskCardProps {
    startTime: string;
    duration: string;
    title: string;
    onPress: () => void;
    loading?: boolean;
    alarmIcon?: ImageURISource;
    customStyles?: StyleProp<ViewStyle>;
}

const CurrentTaskCard: FC<CurrentTaskCardProps> = ({ startTime, duration, title, onPress, loading, alarmIcon, customStyles }) => {
    const containerStyle = [
        styles.container,
        customStyles,
    ];

    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{startTime}</Text>
                <Text style={styles.headerText}>{duration}</Text>
                <DotMenu />
                {/* {<Image source={menuHorizontal.link} style={styles.image} />} */}

            </View>
            <View>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            {alarmIcon && <Image source={alarm.link} style={styles.image} />}
        </TouchableOpacity>
    );
};

export default CurrentTaskCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: 'center',
        width: width / 1.3,
        height: height / 3,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'green',
    },
    headerContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "100%",
    },
    titleText: {
        fontSize: FontSize.heading2Size,
        color: Colors.white100,
        fontFamily: FontFamily.Semibold,
        fontWeight: "600",
        top: "100%",
        right: "10%",

    },
    headerText: {
        fontSize: FontSize.body2BoldSmall,
        color: Colors.white100,
        fontFamily: FontFamily.Semibold,
        fontWeight: "600",
        textAlign: "center",
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
        marginLeft: "20%",
    }
});