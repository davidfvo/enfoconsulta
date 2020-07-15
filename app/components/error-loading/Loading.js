import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import Colors from '../../themes/Colors'

const Loading = ({ message }) => (
  <View style={{
    alignItems: 'center',
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  }}>
    <ActivityIndicator color={Colors.white} size="large" />
    {message ? (
      <Text style={{ color: Colors.white, textAlign: 'center' }}>
        {message}
      </Text>
    ) : null}
  </View>
)

export default Loading