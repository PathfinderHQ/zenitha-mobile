import React, { FC } from 'react';
import { View, StyleSheet, Text, Platform, StatusBar, SafeAreaView } from 'react-native';
import { BackButton } from '../../components';
import { CreateCategoryForm } from '../../sections/categories';
import Categories from '../../sections/categories/Categories';

const CreateCategoryScreen: FC = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.backButton}>
                        <BackButton />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Create a Category</Text>
                    </View>
                </View>
                <View style={styles.profileContainer}>
                    <CreateCategoryForm />
                    <Text>All Categories</Text>
                    <Categories type='view' />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CreateCategoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        position: 'relative',
    },
    profileContainer: {
        flex: 6,
    },
    categoryCotainer: {
        flex: 2,
        borderWidth: 2,
    },
    text: {
        fontSize: 22,
        color: '#212529',
        fontFamily: 'Inter',
        fontWeight: '500',
    },
    textContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        zIndex: 200,
        marginLeft: '-4%',
    },
    optionsContainer: {
        top: 323,
        left: 20,
        width: 205,
        position: 'absolute',
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
