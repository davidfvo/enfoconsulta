import React from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {
  Button,
  View,
  Content
} from 'native-base';
import Text from '../text/Text'
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
      <Content style={[Styles.container, {backgroundColor: props.color}]} contentContainerStyle={props.contentContainerStyle}>
        {props.children}
      </Content>
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