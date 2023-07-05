import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions, StyleSheet, Text, ImageURISource, Image, StyleProp, ViewStyle, View } from 'react-native';
import DotMenu from './DotMenu';
import { alarm, FontSize, FontFamily, Colors } from '../constants';

const { height, width } = Dimensions.get('screen');

interface FutureTaskCardProps {
    startTime: string;
    dueTime: string;
    title: string;
    onPress: () => void;
    alarmIcon?: ImageURISource;
    customStyles?: StyleProp<ViewStyle>;
}

const FutureTaskCard: FC<FutureTaskCardProps> = ({ startTime, dueTime, title, onPress, alarmIcon, customStyles }) => {
    const containerStyle = [styles.container, customStyles];

    return (
        <View style={styles.box}>
            <View style={styles.dot}>
                <DotMenu vertical />
            </View>

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
                <View style={styles.leftContainer} />
                {alarmIcon && <Image source={alarm.link} style={styles.image} />}
            </TouchableOpacity>
        </View>
    );
};

export default FutureTaskCard;

const styles = StyleSheet.create({
    box: {
        position: 'relative',
    },
    dot: {
        position: 'absolute',
        zIndex: 200,
        top: '35%',
        right: '10%',
    },
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
    rightContainer: {
        flex: 1,
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
        alignItems: 'center',
    },
    middleContainer: {
        flex: 2,
        alignItems: 'flex-start',
    },
    bullet: {
        color: '#52b788',
    },
    titleText: {
        fontSize: FontSize.heading4Size,
        color: Colors.main_text,
        fontFamily: FontFamily.InterSemiBold,
        fontWeight: '600',
    },
    detailText: {
        fontSize: FontSize.body2BoldSmall,
        color: Colors.main_text,
        fontFamily: FontFamily.InterSemiBold,
        fontWeight: '600',
        textAlign: 'center',
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
