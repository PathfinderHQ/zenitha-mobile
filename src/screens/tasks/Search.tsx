import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { SearchBox } from '../../components';
import { Tasks } from '../../sections/tasks';
import { useTasks } from '../../zustand';

const SearchTaskScreen: FC = () => {
    const [query, setQuery] = useState<string>('');

    const { filtered, clearFilter, filterTasks, tasks, fetchTasks } = useTasks();

    useEffect(() => {
        if (tasks.length === 0) {
            fetchTasks();
        }

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (filtered.length === 0) {
            setQuery('');
        }
    }, [filtered]);

    const onSearch = (value: string) => {
        if (query !== '') {
            filterTasks(value);
        } else {
            clearFilter();
        }
    };

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <SearchBox onSearch={onSearch} query={query} />
                </View>

                <Tasks
                    text='Result'
                    tasks={filtered}
                    placeholder='Enter something in the input box to start searching'
                />
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
