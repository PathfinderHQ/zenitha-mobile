import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions, Image, ImageURISource, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import dayjs from 'dayjs';
import { alarm, Colors, FontFamily, FontSize } from '../constants';
import DotMenu from './DotMenu';
import { Task } from '../types';
import { extractDateTime } from '../lib';

const { height, width } = Dimensions.get('screen');

interface CurrentTaskCardProps {
    task: Task;
    onPress: () => void;
    alarmIcon?: ImageURISource;
    customStyles?: StyleProp<ViewStyle>;
}

const CurrentTaskCard: FC<CurrentTaskCardProps> = ({ task, onPress, alarmIcon, customStyles }) => {
    const containerStyle = [styles.container, customStyles];

    const { date } = extractDateTime(task.time);

    return (
        <View style={styles.box}>
            <View style={styles.dot}>
                <DotMenu task={task} />
            </View>

            <TouchableOpacity onPress={onPress} style={containerStyle}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{date}</Text>
                    <Text style={styles.headerText}>{`${dayjs(task.time).format('h:mm A')}`}</Text>
                    <Text />
                </View>
                <View>
                    <Text style={styles.titleText}>{task.title}</Text>
                </View>
                {alarmIcon && <Image source={alarm.link} style={styles.image} />}
            </TouchableOpacity>
        </View>
    );
};

export default CurrentTaskCard;

const styles = StyleSheet.create({
    box: {
        position: 'relative',
    },
    dot: {
        position: 'absolute',
        zIndex: 200,
        top: 8,
        right: '10%',
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        width: width / 1.3,
        height: height / 3,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#52b788',
    },
    headerContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    titleText: {
        fontSize: FontSize.heading2Size,
        color: Colors.white100,
        fontFamily: FontFamily.InterSemiBold,
        fontWeight: '600',
        top: '100%',
        right: '10%',
    },
    headerText: {
        fontSize: FontSize.body2BoldSmall,
        color: Colors.white100,
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
