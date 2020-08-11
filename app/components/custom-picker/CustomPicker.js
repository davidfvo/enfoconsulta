import {Picker, View} from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';
import Metrics from '../../themes/Metrics'
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { IS_IOS } from '../../utils/StyleHelpers';
import Fonts from '../../themes/Fonts';
import CustomLoading from '../CustomLoading'
import Icon from "react-native-vector-icons/Entypo"

const CustomPicker = props => {
  return (
    <View style={[Styles.container, {backgroundColor: props.backgroundColor || 'transparent', borderColor:  props.backgroundColor || Colors.white,}]}>
      {props.isLoading ? 
      <CustomLoading size='small' />
      :
      <Picker
        itemStyle={Styles.itemStyle}
        mode="dropdown"
        style={Styles.pickerStyle}
        selectedValue={props.selectedValue}
        onValueChange={props.onValueChange}
        enabled={!props.disabled}
      >
        {props.labelTitle ? 
          <Picker.Item label={props.labelTitle}  value={null} />
          :
          []
        }
        {props.data && props.data.length > 0 &&
          props.data.map (item =>  (
            <Picker.Item 
              label={props.PILabel ? item.name[props.PILabel] : item.name} 
              value={props.PIValue ? item.id[props.PIValue] : item.id} 
              key={props.PIKey ? item.id[props.PIKey] : item.id} 
            />)
          )
          || []
        }
      </Picker>}
    </View>
  );
};

const Styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingTop: IS_IOS ? Metrics.mMd : 0,
    paddingBottom: IS_IOS ?  Metrics.mSm : 0,
    marginLeft: 0,
    marginRight: 0,
    borderRadius:20,
    borderWidth:1,
    marginVertical:8,
    height: 60,
  },

  itemStyle: {
    fontSize: 15,
    color: Colors.gray,    
  },

  pickerStyle:{
    paddingHorizontal: Metrics.mXl,
    paddingRight: Metrics.mXxl,
    color: '#A6A4A6',
    fontSize:15,
    paddingLeft:10,
  },

});

CustomPicker.propTypes = {
  //data: PropTypes.array.isRequired,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  labelTitle: PropTypes.string,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
  //onValueChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func,
  PILabel: PropTypes.string,
  PIValue: PropTypes.string,
  PIKey: PropTypes.string,
  backgroundColor:PropTypes.string
};

CustomPicker.defaultProps = {
  labelTitle: 'Seleccionar',
  disabled: false,
  PILabel: null,
  PIValue: null,
  PIKey: null,
  backgroundColor:Colors.white
};

export default CustomPicker;
