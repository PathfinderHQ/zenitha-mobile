/* eslint-disable  global-require */
import { ImageURISource } from 'react-native';

interface ImageData {
    link: ImageURISource;
}

export const google: ImageData = {
    link: require('../../assets/google.png'),
};

export const logo_x4: ImageData = {
    link: require('../../assets/logo_x4.png'),
};
export const logo: ImageData = {
    link: require('../../assets/logo.png'),
};
export const alarm: ImageData = {
    link: require('../../assets/alarm.png'),
};
export const calendar: ImageData = {
    link: require('../../assets/calendar.png'),
};
export const menuHorizontal: ImageData = {
    link: require('../../assets/menu-horizontal.png'),
};
export const editIcon: ImageData = {
    link: require('../../assets/edit.png'),
};
export const completeIcon: ImageData = {
    link: require('../../assets/complete.png'),
};
export const deleteIcon: ImageData = {
    link: require('../../assets/delete.png'),
};

export const sendIcon: ImageData = {
    link: require('../../assets/send.png'),
};
