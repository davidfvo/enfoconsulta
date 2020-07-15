import {Dimensions, Platform} from 'react-native';
import Fonts from '../themes/Fonts';
import Colors from '../themes/Colors';

export const IS_IOS = Platform.OS === 'ios';
export const {width: viewportWidth, height: viewportHeight} = Dimensions.get (
  'window'
);

export const wp = percentage => {
  const value = percentage * viewportWidth / 100;
  return Math.round (value);
};

export const hp = percentage => {
  const value = percentage * viewportHeight / 100;
  return Math.round (value);
};

export const isSmallDevice = viewportWidth <= 365;