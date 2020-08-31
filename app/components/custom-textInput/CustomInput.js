import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';
import PropTypes from 'prop-types';
import Fonts from '../../themes/Fonts';
import Metrics from '../../themes/Metrics'
import { IS_IOS } from '../../utils/StyleHelpers';
import { exp } from 'react-native-reanimated';

 const CustomInput = props => {
  return (
      <View style={Styles.container}>
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      style={Styles.input}
      onChangeText={props.onChangeText}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
    />
    </View>
  );
}

const Styles = StyleSheet.create ({
    container: {
      paddingHorizontal: Metrics.mXl,
      borderRadius:20,
      height: 60,
      justifyContent: 'center',
      backgroundColor:Colors.white,
    },
  
    input: {
      fontSize: 15,
      color: Colors.gray,
      paddingLeft: 0,
    }
  });

CustomInput.propTypes = {
    onChangeText: PropTypes.any,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    disabled: PropTypes.any,
    containerStyles: PropTypes.any,
    secureTextEntry: PropTypes.bool,
  };
  
  CustomInput.defaultProps = {
    maxLength: 27,
    containerStyles: {},
    secureTextEntry: false,
  };

  export default CustomInput;