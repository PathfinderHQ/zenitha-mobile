/* eslint-disable prefer-regex-literals */
export * from './colors';
export * from './images';
export * from './routes';
export * from './navigation';
export * from './request';
export * from './font-family';
export * from './fontsize'

export const PASSWORD_REGEX = new RegExp('^(?=.*?[A-Z])(?=(.*[a-z])+)(?=(.*\\d)+)(?=(.*\\W)+)(?!.*\\s).{8,}$');
export const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

export const OTP_LENGTH = 6;
