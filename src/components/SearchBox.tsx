import React, { FC, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Routes } from '../constants';

import Colors from '../constants/colors';

const { width, height } = Dimensions.get('screen');

const SearchBox = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: string) => setSearchQuery(query);

    return (
        <View style={styles.container}>
            <Searchbar
                style={{ backgroundColor: '#ffffff', borderWidth: 1, width: width / 1.4 }}
                placeholder='Search'
                onChangeText={onChangeSearch}
                value={searchQuery}
                mode='bar'
            />
        </View>
    );
};

export default SearchBox;
const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
    },
    icon: {
        alignSelf: 'center',
    },
    text: {
        alignSelf: 'center',
        color: Colors.placeholder,
        fontSize: 16,
        margin: 10,
    },
});
