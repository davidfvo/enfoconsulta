import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Content from '../../../components/content/Content';
import Colors from "../../../themes/Colors";
import Metrics from "../../../themes/Metrics";

const SplashScreen = ()=> {
  return (
      <Content
        color={Colors.primary}
        contentContainerStyle={Styles.content}
      >
        <View style={Styles.logoContainer}>
        </View>
      </Content>
  );
}
const Styles = StyleSheet.create({
  content: {
    paddingVertical: Metrics.mMd,
    paddingHorizontal: Metrics.mLg,
  },
  logoContainer: {
    marginTop: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width:130, 
    height:130,
  }
});

export default SplashScreen