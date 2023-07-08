import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import CategoryButton from './CategoryButton';
import { Category } from '../types';

interface ICategoryGridProps {
    categories: Category[];
}

const CategoryGrid: FC<ICategoryGridProps> = ({ categories }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryButton canDelete={!!item.user} key={item.id} item={item} />}
                numColumns={3}
            />
        </SafeAreaView>
    );
};

export default CategoryGrid;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
