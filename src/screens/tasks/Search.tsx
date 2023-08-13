import React, { FC, useEffect, useState } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { SearchBox } from '../../components';
import { Tasks } from '../../sections/tasks';
import { useTasks } from '../../zustand';

const SearchTaskScreen: FC = () => {
    const { filtered } = useTasks();

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <SearchBox />
                </View>

                <Tasks text='Result' tasks={filtered} />
            </View>
        </SafeAreaView>
    );
};

export default SearchTaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
