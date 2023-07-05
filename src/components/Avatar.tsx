import React, { FC, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar as BaseAvatar } from 'react-native-paper';
import { getInitials } from '../utils';
import { User } from '../types';

type IAvatarProps = {
    user: User | null;
    size?: number;
};

const Avatar: FC<IAvatarProps> = ({ user, size = 120 }) => {
    const [name, setName] = useState<string>('');

    useEffect(() => {
        setName(user?.email || '');

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (user?.first_name || user?.last_name) {
            setName(`${user.first_name || ''} ${user.last_name || ''}`);
        }
    }, [user]);

    const initials = getInitials(name);

    return <BaseAvatar.Text size={size} label={initials} color='#fff' style={styles.container} />;
};

export default Avatar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },
});
