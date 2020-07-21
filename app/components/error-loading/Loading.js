import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import Colors from '../../themes/Colors'
import PropTypes from 'prop-types'

const Loading = (props) => (
  <View style={{
    alignItems: 'center',
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  }}>
    <ActivityIndicator color={props.color} size={props.size} />
    {props.message ? (
      <Text style={{ color: props.color, textAlign: 'center' }}>
        {props.message}
      </Text>
    ) : null}
  </View>
)

Loading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};

Loading.defaultProps = {
  size: 'large',
  color: Colors.white,
  style: {}
};

export default Loading