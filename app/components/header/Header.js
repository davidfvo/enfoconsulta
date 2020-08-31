import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fonts from '../../themes/Fonts';
import Colors from '../../themes/Colors';
import Metrics from '../../themes/Metrics';
import { StyleSheet, StatusBar, View, TouchableOpacity, Text } from 'react-native';
import CheckRender from '../security/CheckRender';
import Icon from 'react-native-vector-icons/Ionicons'
import functionUtil from '../../utils/FunctionUtil';
import NavigationService from '../../services/NavigationService';


const Header = (props) => {
  const onPressIcon = () => {
    if (functionUtil.isFunction(props.onPressLeftIcon)) {
      props.onPressLeftIcon();
    } else {
      NavigationService.goBack();
    }
  }

  const onPressRightIcon = () => {
    if (functionUtil.isFunction(props.onPressRightIcon)) {
      props.onPressRightIcon();
    } else {
      return
    }
  }

  return (
    <View style={Styles.header}>
      <StatusBar backgroundColor={Colors.primary} barStyle='light-content' />
      <View style={Styles.headerLeftView}>
        <TouchableOpacity
          onPress={onPressIcon}
        >
          {props.leftIcon || 
            <Icon name="ios-chevron-back" size={30} color="#900" />
          }
        </TouchableOpacity>
      </View>
      <View
        style={Styles.body}
      >
        <Text style={Styles.headerTitleText}>
          {props.title}
        </Text>
      </View>
      <CheckRender allowed={props.rightIcon || props.rightContent}>
        {props.rightContent ||
        <View style={Styles.headerRightView}>
          <TouchableOpacity onPress={onPressRightIcon}>
            {props.rightIcon}
          </TouchableOpacity>
        </View>}
      </CheckRender>
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  iconName: PropTypes.string,
  rightContent: PropTypes.object,
  rightIcon: PropTypes.object,
  onPressIcon: PropTypes.func,
  onPressRightIcon: PropTypes.func,
};

Header.defaultProps = {
  iconName: null,
  iconType: null,
  rightContent: null,
  rightIcon: null,
  onPressIcon: null,
  onPressRightIcon: null,
};

const Styles = StyleSheet.create({
  header: {
    paddingHorizontal: Metrics.mSm,
    height: 50,
    backgroundColor: Colors.primary,
    flexDirection:'row',
  },

  headerLeftView: {
    flex: 0,
    justifyContent: 'center',
  },

  body: {
    flex: 1,
    paddingLeft: Metrics.mLg,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  headerTitleText: {
    fontSize: Fonts.size.large,
    color: Colors.white,
    fontWeight: Fonts.weight.bold,
  },

  headerRightView: {
    flex: 0,
    justifyContent: 'center',
  },

  headerTitleIcon: {
    fontSize: Fonts.size.bigIcon,
    color: Colors.white,
    fontWeight: Fonts.weight.bold,
  },
});

export default Header;