import React, { Component } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from "../../themes/Colors"

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    backgroundColor: Colors.gray,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginHorizontal: 25
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    //textTransform: "uppercase"
  }
});

export default AppButton;