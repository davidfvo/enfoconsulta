import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../themes/Colors';
import { IS_IOS } from '../../utils/StyleHelpers';
import Icon from "react-native-vector-icons/MaterialIcons"
import {LinearGradient} from 'expo-linear-gradient'

const DashboardHeader = (props) => {
  return (
    <>     
      <View
      style={{backgroundColor:Colors.primary}}
      >
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 20 }}>
          <View>
            <Text style={{ color: Colors.white, fontSize: 20 }}>Dashboard</Text>
          </View>

          <View>
            <Icon name={'notifications'} size={30} color={Colors.white} />
          </View>

        </View>
        </View>     
    </>
  );
}

const Styles = StyleSheet.create({

})

DashboardHeader.prototype = {
  color: PropTypes.string,
  contentContainerStyle: PropTypes.object,
};

DashboardHeader.defaultProps = {
  color: Colors.primary,
  contentContainerStyle: {},
};

export default DashboardHeader;