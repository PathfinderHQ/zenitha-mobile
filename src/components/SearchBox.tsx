import React, { FC, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Dimensions, StyleSheet } from 'react-native';
import BackButton from './BackButton';
import { useTasks } from '../zustand';

const { width } = Dimensions.get('screen');

const SearchBox: FC = () => {
    const [text, setText] = useState('');

    const onChangeSearch = (value: React.SetStateAction<string>) => setText(value);

    const { clearFilter, filterTasks } = useTasks();

    // filter
    useEffect(() => {
        if (text) {
            filterTasks(text);
        } else {
            clearFilter();
        }

        // eslint-disable-next-line
    }, [text]);

    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <BackButton size={28} />
            </View>
            <Searchbar
                style={styles.input}
                placeholder='Search'
                onChangeText={onChangeSearch}
                value={text}
                mode='bar'
                clearIcon='close-circle-outline'
            />
        </View>
    );
};

export default SearchBox;
const styles = StyleSheet.create({
    container: {
        padding: 20,
        position: 'relative',
    },
    input: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        width: width / 1.3,
        marginLeft: '10%',
    },
    back: {
        position: 'absolute',
        left: -10,
        top: 20,
    },
});
