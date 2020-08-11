import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../themes/Colors';
import PropTypes from 'prop-types';
import Metrics from '../../themes/Metrics'
import { IS_IOS } from '../../utils/StyleHelpers';
import Icon from "react-native-vector-icons/FontAwesome"

const CustomUserInput = props => {
    return (
        <View style={Styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: Colors.primary }}>{props.fieldName}</Text>
                <TextInput
                    {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                    editable={props.editable}
                    maxLength={props.maxLength}
                    placeholder={props.placeholder}
                    style={Styles.input}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    secureTextEntry={props.secureTextEntry}
                />
            </View>
            {props.editable ?
                <TouchableOpacity onPress={props.onPress}>
                    <Icon name={'edit'} size={30} />
                </TouchableOpacity> : null}
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        paddingVertical: IS_IOS ? Metrics.mMd : 0,
        paddingLeft: IS_IOS ? null : 5,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        flexDirection: 'row',
    },

    input: {
        fontSize: 15,
        color: Colors.gray,
        paddingLeft: 2,
    }
});

CustomUserInput.propTypes = {
    onChangeText: PropTypes.any,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    disabled: PropTypes.any,
    containerStyles: PropTypes.any,
    secureTextEntry: PropTypes.bool,
    fieldName: PropTypes.string,
    onPress: PropTypes.func,
    editable: PropTypes.bool,
};

CustomUserInput.defaultProps = {
    maxLength: 27,
    containerStyles: {},
    secureTextEntry: false,
    fieldName: 'Usuario',
    editable: true
};

export default CustomUserInput;