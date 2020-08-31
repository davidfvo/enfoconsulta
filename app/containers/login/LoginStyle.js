import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';
import Metrics from '../../themes/Metrics';
import { viewportWidth, viewportHeight } from '../../utils/StyleHelpers';
import { Fonts } from '../../themes';

export default StyleSheet.create({
  content: {
    justifyContent: 'center',
  },
  backgroundContent: {
    width: viewportWidth.width,
    height: viewportHeight.height,
    position: 'absolute',
  },
  form: {
    paddingTop: 40,
    paddingBottom: Metrics.mLg,
  },
  title: {
    color: Colors.primary,
    fontSize: Fonts.size.h1,
    fontWeight: "bold",
  },
  subTitle: {
    color: Colors.primary,
    fontSize: Fonts.size.h2,
    fontWeight: "bold",
  },

  formLabel: {
    color: Colors.white,
  },

  input: {
    marginBottom: Metrics.mSm,
    color: Colors.white,
  },
  picker: {
    width: undefined,
    color: Colors.white,
  },
  buttonViewHeight: {
    height: 15,
  },

  textButtonContainer: {
    alignItems: 'center'
  },
  textButton: {
    color: Colors.white,
    textDecorationLine: 'underline'
  },
});
