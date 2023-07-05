import React, { FC, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors';

const { width, height } = Dimensions.get('screen');

const ToggleSearch = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: string) => setSearchQuery(query);

    const [showSearch, setShowSearch] = useState<boolean>(false);

    const toggleSearch = () => setShowSearch((prevState) => !prevState);

    return (
        <View style={styles.container}>
            {showSearch ? (
                <Searchbar
                    style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#ADB5DB', width: width / 1.3 }}
                    placeholder='Search'
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    mode='bar'
                />
            ) : (
                <Ionicons name='search-outline' size={24} color='black' style={styles.icon} onPress={toggleSearch} />
            )}

            {showSearch && (
                <Text style={styles.text} onPress={toggleSearch}>
                    Cancel
                </Text>
            )}
        </View>
    );
};

export default ToggleSearch;
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
