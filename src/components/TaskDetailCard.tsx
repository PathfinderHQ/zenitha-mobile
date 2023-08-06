import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions, StyleSheet, Text, ImageURISource, Image, StyleProp, ViewStyle, View } from 'react-native';
import dayjs from 'dayjs';
import { alarm, Colors, FontSize } from '../constants';
import { Task } from '../types';
import BackButton from './BackButton';

const { height, width } = Dimensions.get('screen');

interface TaskDetailCardProps {
    task: Task;
    alarmIcon?: ImageURISource;
    customStyles?: StyleProp<ViewStyle>;
}

const TaskDetailCard: FC<TaskDetailCardProps> = ({ task, alarmIcon, customStyles }) => {
    const { title, description, category, category_data } = task;

    return (
        <TouchableOpacity style={[styles.container, customStyles]}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.titleText}>{dayjs(task.time).format('ddd, D MMM, YYYY')}</Text>
            </View>
            <View style={styles.timeContainer}>
                <View style={styles.flex}>
                    <Text style={styles.greyText}>Time</Text>
                    <Text style={styles.timeText}>{dayjs(task.time).format('HH:mm')}</Text>
                    {alarmIcon && <Image source={alarm.link} style={styles.image} />}
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.greyText}>Description</Text>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
            {category && (
                <View style={styles.catContainer}>
                    <Text style={styles.greyText}>Category</Text>
                    <Text style={styles.catText}>{category_data?.name}</Text>
                </View>
            )}
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
        backgroundColor: '#252525',
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
    flex: {
        flex: 1,
    },
    descriptionContainer: {
        flex: 2,
        left: '5%',
        top: '5%',
        paddingRight: 8,
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
        fontWeight: 'bold',
    },
    timeText: {
        fontSize: 28,
        color: Colors.white100,
    },
    descriptionText: {
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
        color: Colors.placeholder,
        fontSize: 24,
        marginBottom: '3%',
    },
});
