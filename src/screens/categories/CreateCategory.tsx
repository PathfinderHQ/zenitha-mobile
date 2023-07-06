import { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BackButton } from '../../components';
import { CreateCategoryForm } from '../../sections/categories';

const CreateCategoryScreen: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.text}>Create a Category</Text>
            </View>
            <View style={styles.profileContainer}>
                <CreateCategoryForm />
            </View>
        </View>
    );
};

export default CreateCategoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30,
    },
    profileContainer: {
        width: 400,
    },
    text: {
        fontSize: 22,
        color: '#212529',
        fontFamily: 'Inter',
        fontWeight: '500',
        paddingLeft: 50,
    },
    optionsContainer: {
        top: 323,
        left: 20,
        width: 205,
        position: 'absolute',
    },
});
