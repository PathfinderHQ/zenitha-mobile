// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// type Props = {
//   onPress: (buttonIndex: number) => void;
// };

// const CategoryButton: React.FC<Props> = ({ onPress }) => {
//   const [activeButton, setActiveButton] = useState<number | null>(null);

//   const handlePress = (buttonIndex: number) => {
//     setActiveButton(buttonIndex);
//     onPress(buttonIndex);
//   };

//   return (
//     <View style={styles.container}>
//       {[0, 1, 2].map((buttonIndex) => (
//         <TouchableOpacity
//           key={buttonIndex}
//           style={[
//             styles.button,
//             activeButton === buttonIndex && styles.activeButton,
//           ]}
//           onPress={() => handlePress(buttonIndex)}
//         >
//           <Text>Button {buttonIndex + 1}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     padding: 10,
//     backgroundColor: '#ddd',
//     borderRadius: 5,
//   },
//   activeButton: {
//     backgroundColor: '#aaa',
//   },
// });

// export default CategoryButton;
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
  name: string;
  color: string;
};

const CategoryButton: React.FC<Props> = ({ onPress, name, color }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
    onPress();
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: isPressed ? color : '#52B788' },
      ]}
      onPress={handlePress}
    >
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
});

export default CategoryButton;