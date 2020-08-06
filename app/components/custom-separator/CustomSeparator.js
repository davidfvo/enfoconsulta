import React from 'react';
import { StyleSheet, View } from "react-native";
import Colors from '../../themes/Colors';
import PropTypes from 'prop-types';
import { Metrics } from '../../themes';

const CustomSeparator = props => {
  return(
    <View 
      style={{height: props.height, backgroundColor: props.color, width: props.width}} 
    />
  )
};

CustomSeparator.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.number,
};

CustomSeparator.defaultProps = {
  height: Metrics.mXl,
  color: 'transparent',
  width: 0,
};

export default CustomSeparator