/**
 * @providesModule Separador
 */

import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../themes/Colors';
import Metrics from '../themes/Metrics'

export default function CustomLoading(props) {
  return (
    <ActivityIndicator
      size={props.size}
      color={props.color}
      style={props.style}
    />
  );
}

CustomLoading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};

CustomLoading.defaultProps = {
  size: 'large',
  color: Colors.white,
  style: {padding: Metrics.mXl,
    color: Colors.primary},
};
