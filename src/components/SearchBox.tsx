import React from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Dimensions, StyleSheet } from 'react-native';

import { Colors } from '../constants';

const { width } = Dimensions.get('screen');

const SearchBox = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: string) => setSearchQuery(query);

    return (
        <View style={styles.container}>
            <Searchbar
                style={{ backgroundColor: '#ffffff', borderWidth: 1, width: width / 1.3 }}
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
