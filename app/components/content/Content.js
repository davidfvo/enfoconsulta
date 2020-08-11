import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../themes/Colors';
import { IS_IOS } from '../../utils/StyleHelpers';

const CustomContent = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={[Styles.container, { backgroundColor: props.color }]}
      keyboardVerticalOffset={IS_IOS ? 0 : -300}
    >
      <View style={[Styles.container, { backgroundColor: 'transparent' }]}>
        <View style={[Styles.children, {
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius
        }]} />
        {props.children}
      </View>
    </KeyboardAvoidingView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  children: {
    backgroundColor: Colors.primary,
    width: '100%',
    height: 70,
    position: 'absolute',
    top: 0,
    zIndex: 0,
    alignItems: 'center',
  },
})

CustomContent.propTypes = {
  color: PropTypes.string,
  borderBottomLeftRadius: PropTypes.number,
  borderBottomRightRadius: PropTypes.number,
  contentContainerStyle: PropTypes.object,
};

CustomContent.defaultProps = {
  color: Colors.white,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  contentContainerStyle: {},
};

export default CustomContent;