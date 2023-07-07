import React, { FC, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Dialog, Portal } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

type Props = {
    onPress?: () => void;
    name: string;
    color: string;
    selected?: boolean;
    isDefault?: boolean;
};

const CategoryButton: FC<Props> = ({ onPress, name, color, selected, isDefault }) => {
    const [visible, setVisible] = useState(false);

    const hideDialog = () => setVisible(false);

    const showDialog = () => setVisible(true);

    return (
        <View style={styles.container}>
            {selected ? (
                <MaterialCommunityIcons style={styles.icon} name='check-circle' />
            ) : (
                !selected &&
                !isDefault && <MaterialCommunityIcons style={styles.icon} name='close-circle' onPress={showDialog} />
            )}
            <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
                <Text style={[styles.text]}>{name}</Text>

                <View>
                    <Portal>
                        <Dialog visible={visible}>
                            <Dialog.Title>Delete Category?</Dialog.Title>
                            <Dialog.Actions>
                                <Button onPress={hideDialog} textColor='#000'>
                                    Cancel
                                </Button>
                                <Button onPress={hideDialog}>Delete</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        width: width / 3.7,
        height: height / 16,

        // position: 'relative',
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
    },
    selected: {
        borderWidth: 2,
        borderColor: '#000000',
    },
    whiteBorder: {
        borderColor: '#cccccc',
    },
    icon: {
        position: 'absolute',
        top: 5,
        right: 6,
        color: '#E9ECEF',
        fontSize: 17,
        zIndex: 200,
    },
    container: {
        position: 'relative',
        width: width / 3.7,
        height: height / 16,
        margin: 5,
    },
});

export default CategoryButton;
