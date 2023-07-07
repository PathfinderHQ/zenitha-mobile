import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer/src/types';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { useAuth } from '../hooks';
import { Avatar } from '../components';
import BottomTabNavigator from './BottomTabNavigator';
import { ProfileOptions } from '../sections/profile';

const BaseDrawer = createDrawerNavigator();

const CustomDrawerContent: FC<DrawerContentComponentProps> = (props) => {
    const { auth } = useAuth();

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Avatar user={auth.user} />
                </View>
                <ProfileOptions />
            </View>
        </DrawerContentScrollView>
    );
};

const DrawerNavigator: FC = () => {
    return (
        <BaseDrawer.Navigator
            useLegacyImplementation
            drawerContent={(props: DrawerContentComponentProps) => <CustomDrawerContent {...props} />}
        >
            <BaseDrawer.Screen name='Bottom' component={BottomTabNavigator} />
        </BaseDrawer.Navigator>
    );
};
export default DrawerNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        width: 400,
        paddingLeft: 20,
        paddingTop: 100,
    },
});
