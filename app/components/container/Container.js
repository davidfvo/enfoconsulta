import React from 'react';
import { SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import Colors from "../../themes/Colors"

const Container = (props) => {
  return (  
    <SafeAreaView style={{flex:1, backgroundColor:props.color}}>
        {props.children}
    </SafeAreaView>
  );
}

Container.prototype = {
  color: PropTypes.any
};

Container.defaultProps = {
 color: Colors.primary
};

export default Container;