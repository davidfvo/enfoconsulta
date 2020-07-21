import React from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../themes/Colors';
import { IS_IOS } from '../../utils/StyleHelpers';

const CustomContent = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={'padding'}
      style={[Styles.container, {backgroundColor: props.color}]} 
      keyboardVerticalOffset={IS_IOS ? 0 : -300}
    >
      <View style={[Styles.container, {backgroundColor: props.color}]}>
        {props.children}
      </View>
    </KeyboardAvoidingView>
  );
}

const Styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

CustomContent.propTypes = {
  color: PropTypes.string,
  contentContainerStyle: PropTypes.object,
};

CustomContent.defaultProps = {
  color: Colors.white,
  contentContainerStyle: {},
};

export default CustomContent;