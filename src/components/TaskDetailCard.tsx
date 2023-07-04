import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions, StyleSheet, Text, ImageURISource, Image, StyleProp, ViewStyle, View } from 'react-native';
import Colors from '../constants/colors';
import FontSize from '../constants/fontsize';
import { alarm } from '../constants';

const { height, width } = Dimensions.get('screen');

interface TaskDetailCardProps {
    title: string;
    date: string;
    startTime: string;
    dueTime: string;
    description: string;
    category: string;
    onPress: () => void;
    loading?: boolean;
    alarmIcon?: ImageURISource;
    customStyles?: StyleProp<ViewStyle>;
}

const TaskDetailCard: FC<TaskDetailCardProps> = ({
    startTime,
    dueTime,
    title,
    date,
    description,
    category,
    onPress,
    loading,
    alarmIcon,
    customStyles,
}) => {
    const containerStyle = [styles.container, customStyles];

    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.titleText}>{date}</Text>
            </View>
            <View style={styles.timeContainer}>
                <View style={styles.timeContainerS}>
                    <Text style={styles.greyText}>Start Time</Text>
                    <Text style={styles.timeText}>{startTime}</Text>
                    {alarmIcon && <Image source={alarm.link} style={styles.image} />}
                </View>
                <View style={styles.timeContainerS}>
                    <Text style={styles.greyText}>Due Time</Text>
                    <Text style={styles.timeText}>{dueTime}</Text>
                </View>
            </View>
            <View style={styles.discriptionContainer}>
                <Text style={styles.greyText}>Description</Text>
                <Text style={styles.discriptionText}>{description}</Text>
            </View>
            <View style={styles.catContainer}>
                <Text style={styles.greyText}>Category</Text>
                <Text style={styles.catText}>{category}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default TaskDetailCard;

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width,
        height: height / 1.2,
        alignSelf: 'center',
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#52b788',
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        left: '5%',
    },
    timeContainer: {
        flex: 1,
        flexDirection: 'row',
        left: '3%',
        top: '15%',
    },
    timeContainerS: {
        flex: 1,
    },
    discriptionContainer: {
        flex: 2,
        left: '5%',
        top: '5%',
    },
    catContainer: {
        flex: 1,
        left: '5%',
        top: '5%',
    },
    titleText: {
        fontSize: FontSize.heading2Size,
        color: Colors.white100,
        marginTop: '5%',
    },
    timeText: {
        fontSize: 28,
        color: Colors.white100,
    },
    discriptionText: {
        fontSize: 22,
        color: Colors.white100,
    },
    catText: {
        fontSize: 18,
        color: Colors.white100,
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
    greyText: {
        color: Colors.unselectFieldStroke,
        fontSize: 24,
        marginBottom: '3%',
    },
});
