import React, { FC, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Carousel, CategoryButton, IconButton, Spinner } from '../../components';
import { Routes } from '../../constants';
import { Navigation } from '../../types';
import { useCategories } from '../../zustand';
import { useError } from '../../hooks';
import CategoryGrid from '../../components/CategoryGrid';

interface CategoriesProps {
    type: 'view' | 'select';
    selected?: string;
}

const Categories: FC<CategoriesProps> = ({ type, selected }) => {
    const navigation = useNavigation<Navigation>();

    const { categories, fetchCategories, fetch, category } = useCategories();

    const { current, choose } = category;

    const { loading, error, clearError } = fetch;

    useEffect(() => {
        if (categories.length === 0) {
            fetchCategories();
        }

        // eslint-disable-next-line
    }, []);

    const redirectToCreateTask = () => navigation.navigate(Routes.CreateCategory);

    // handle error
    useError(error, clearError);

    if (loading) return <Spinner size='small' />;

    return (
        <View style={styles.carouselContainer}>
            {type === 'select' ? (
                <Carousel>
                    {categories.map((item) => (
                        <CategoryButton
                            selected={current === item.id || selected === item.id}
                            key={item.id}
                            item={item}
                            onPress={() => choose(item.id)}
                        />
                    ))}
                </Carousel>
            ) : (
                <CategoryGrid categories={categories} />
            )}

            {type === 'select' && <IconButton size={40} icon='plus' color='#252525' onPress={redirectToCreateTask} />}
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    carouselContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
});
