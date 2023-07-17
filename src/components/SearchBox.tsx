import React, { FC } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Dimensions, StyleSheet } from 'react-native';

import { Colors } from '../constants';
import { BackButton } from './index';

const { width } = Dimensions.get('screen');

type ISearchBoxProps = {
    query: string;
    onSearch: (value: string) => void;
};

const SearchBox: FC<ISearchBoxProps> = ({ query, onSearch }) => {
    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <BackButton size={28} />
            </View>
            <Searchbar
                style={styles.input}
                placeholder='Search'
                onChangeText={onSearch}
                value={query}
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
