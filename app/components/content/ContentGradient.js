import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../themes/Colors';
import { IS_IOS } from '../../utils/StyleHelpers';
import CheckRender from '../security/CheckRender';
import { Metrics } from '../../themes';
import { LinearGradient } from 'expo-linear-gradient'

const ContentGradient = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={[Styles.container]}
      keyboardVerticalOffset={IS_IOS ? 0 : -300}
    >
      <LinearGradient
        style={[Styles.subContainer, props.contentContainerStyle]}
        colors={props.color}
      >
        <CheckRender allowed={props.greenBar}>
          <View style={[Styles.children, {
            borderBottomLeftRadius: props.borderBottomLeftRadius,
            borderBottomRightRadius: props.borderBottomRightRadius
          }]} />
        </CheckRender>
        {props.children}
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: Metrics.mLg,
    paddingVertical: Metrics.mLg
  },
  flex1: {
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

ContentGradient.propTypes = {
  color: PropTypes.array,
  borderBottomLeftRadius: PropTypes.number,
  borderBottomRightRadius: PropTypes.number,
  contentGradientContainerStyle: PropTypes.object,
};

ContentGradient.defaultProps = {
  color: [Colors.white, Colors.white],
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  contentGradientContainerStyle: {},
};

export default ContentGradient;