import React, { Component } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from "../../themes/Colors"
import Loading from '../error-loading/Loading';
import { Metrics } from '../../themes';

const CustomButton = props => (
  <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
    {props.isLoading ? (
      <Loading
        size="small"
        color={Colors.white}
        style={{}}
      />
    ) : (
      <Text uppercase={false} style={styles.text}>{props.title}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  // ...
  container: {
    backgroundColor: Colors.gray,
    borderRadius: 30,
    paddingVertical: 15,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    //textTransform: "uppercase"
  }
});

export default CustomButton;