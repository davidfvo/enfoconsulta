import React from 'react';
import { SafeAreaView } from 'react-native';

const Container = (props) => {
  return (  
    <SafeAreaView style={{flex:1}}>
        {props.children}
    </SafeAreaView>
  );
}

Container.prototype = {
 
};

Container.defaultProps = {
 
};

export default Container;