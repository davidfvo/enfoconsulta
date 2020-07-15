import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';
import Metrics from '../../themes/Metrics';
import { viewportWidth, viewportHeight } from '../../utils/StyleHelpers';

export default StyleSheet.create({
  container: {},
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
    color: Colors.white,
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
});
