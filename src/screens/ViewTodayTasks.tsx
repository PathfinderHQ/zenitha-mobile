import React, { FC } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { HorizontalDivider } from '../components';
import { RootStackParamList } from '../types';
import Colors from '../constants/colors';
import FontFamily from '../constants/font-family';
import FontSize from '../constants/fontsize';
import { Routes } from '../constants';
import CurrentTaskCard from '../components/CurrentTaskCard';
const { width, height } = Dimensions.get('screen');


export type ViewTodayTaskScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, Routes.ViewTodayTasks>;
};
const ViewTodayTaskScreen: FC<ViewTodayTaskScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CurrentTaskCard startTime='8:20' dueTime='11:00' title='Assignment' onPress={() => navigation.navigate(Routes.Dashboard)} />
            <HorizontalDivider />
        </View>
    );
};

export default ViewTodayTaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    separator: {
        fontSize: 14,
        color: Colors.placeholder,
    },
    link_text: {
        textDecorationLine: 'underline',
        color: Colors.main_text,
        fontSize: 14,
        marginHorizontal: width / 10,
    },
    date_today: {
        top: 108,
        left: 38,
        color: Colors.buttonBg,
        fontFamily: FontFamily.bodyRegular,
        textAlign: "left",
        fontSize: FontSize.heading4Size,
    }
});
