// import React, { FC } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Carousel from 'react-native-snap-carousel';



// interface ICarouselProps {
//     data: {};
//     sliderWidth: number;
//     itemWidth: number;
// }

// const MyCarousel: FC<ICarouselProps> = ({ data, sliderWidth, itemWidth }) => {
//     const renderItem = ({ item }: { item: {} }) => {
//         return (
//             <View style={styles.slide}>
//                 <Text style={styles.title}>{item.title}</Text>
//             </View>
//         );
//     };

//     return <Carousel data={data} renderItem={renderItem} sliderWidth={sliderWidth} itemWidth={itemWidth} />;
// };

// export default MyCarousel;

// const styles = StyleSheet.create({
//     slide: {
//         // Add your styles for the slide container here
//     },
//     title: {
//         // Add your styles for the slide title here
//     },
// });

import React, { FC } from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CategoryButton from './CategoryButton';

interface ICarouselProps {
        data: CategoryButtonProps[];
        sliderWidth: number;
        itemWidth: number;
    }
    type CategoryButtonProps = {
        onPress: () => void;
        name: string;
        color: string;
        id:number;
    };

const MyCarousel:FC<ICarouselProps> = ({data, sliderWidth, itemWidth}) => {
   data = [
    { id: 1, name: 'HOME', onPress: () => console.log('Pressed button 1'), color: 'red' },
    { id: 2, name: 'WORK', onPress: () => console.log('Pressed button 2'), color: 'blue' },
    { id: 3, name: 'FAMILY', onPress: () => console.log('Pressed button 3'), color: 'green' },
    { id: 4, name: 'PERSONAL', onPress: () => console.log('Pressed button 4'), color: 'yellow' },
    { id: 5, name: 'Button 5', onPress: () => console.log('Pressed button 5'), color: 'purple' },
  ];
 

  const renderItem = ({ item }:{item:CategoryButtonProps}) => (
    <CategoryButton
      key={item.id}
      onPress={() => console.log(item.name)}
      name={item.name}
      color='#ddd'
    />
  );

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={240}
        itemWidth={100}
      />
    </View>
  );
};

export default MyCarousel;
