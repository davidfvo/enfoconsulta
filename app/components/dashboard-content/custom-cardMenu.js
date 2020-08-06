import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View, ScrollView } from 'react-native'
import CardView from 'react-native-cardview';
import PropTypes from 'prop-types';
import Colors from "../../themes/Colors"

const Card = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ margin: 10 }}>
            <CardView
                cardElevation={props.cardElevation}
                maxCardElevation={props.maxCardElevation}
                radius={props.radius}>

                <View style={{ padding: 20, alignSelf: 'center', margin: 20 }}>
                    <Image source={props.source} style={{ width: 87, height: 87 }} />
                </View>

            </CardView>
        </TouchableOpacity>
    );
}
Card.prototype = {
    cardElevation: PropTypes.number,
    radius: PropTypes.number,
    maxCardElevation: PropTypes.number,
    color: PropTypes.string,
    contentContainerStyle: PropTypes.object,
    onPress: PropTypes.func,
    source: PropTypes.any,
};

Card.defaultProps = {
    cardElevation: 5.5,
    radius: 10,
    maxCardElevation: 10,
    color: Colors.white,
    contentContainerStyle: {},
    onPress: null,
    source: null,
};

export default Card

