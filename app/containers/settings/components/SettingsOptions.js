import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from "../../../themes/Colors"
import Icon from "react-native-vector-icons/FontAwesome5"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const Options = ({ onPress, title, icon, color }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
            <Icon name={icon} color={color} size={25}  />
            <Text style={styles.appButtonText}>{title}</Text>

         <View>
            <MaterialIcons name='navigate-next' size={30} />
        </View>
        </View>
     
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        marginVertical:8,
        justifyContent: 'center'
    },
    appButtonText: {
        fontSize: 15,
        color: Colors.gray,
        //textTransform: "uppercase"
    }
});

export default Options;