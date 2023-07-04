import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface IOptionProps {
    title: string;
    onPress?: () => void;
}

interface ICarouselProps {
    data: IOptionProps[];
    sliderWidth: number;
    itemWidth: number;
}

const MyCarousel: FC<ICarouselProps> = ({ data, sliderWidth, itemWidth }) => {
    const _renderItem = ({ item }: { item: IOptionProps }) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    };

    return (
        <Carousel
            data={data}
            renderItem={_renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
        />
    );
};

export default MyCarousel;

const styles = StyleSheet.create({
    slide: {
        // Add your styles for the slide container here
    },
    title: {
        // Add your styles for the slide title here
    },
});
