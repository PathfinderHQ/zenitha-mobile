import React, { FC } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

interface ICarouselProps {
    children: React.ReactNode | React.ReactElement;
}

const Carousel: FC<ICarouselProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {children}
            </ScrollView>
        </View>
    );
};

export default Carousel;

const styles = StyleSheet.create({
    container: {
        padding: 1,
        width: width / 1.25,
    },
});
