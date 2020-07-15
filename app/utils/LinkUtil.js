import {Linking} from 'react-native';

const call = phone => {
  Linking.openURL (`tel:${phone}`);
};

const sendEmail = email => {
  Linking.openURL (`mailto:${email}`);
};

const open = url => {
  Linking.openURL (url);
};

export default {
  call,
  sendEmail,
  open,
};
