import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import Container from "../../../components/container/Container";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from '../../../themes/Colors';
import CustomInput from "../../../components/custom-textInput/CustomInput";
import CustomButton from "../../../components/custom-Button/CustomButton";

class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <Container>
                <View style={{ padding: 20 }}>
                    <TouchableOpacity>
                        <Icon name={'arrow-back'} size={35} color={Colors.white} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ textAlign: 'center', color: Colors.white, fontSize: 25 }}>Cambiar Contraseña</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 25 }}>
                    <CustomInput placeholder={'Contraseña actual'} />
                    <CustomInput placeholder={'Contraseña nueva'} />
                    <CustomInput placeholder={'Repetir Contraseña'} />

                </View>

                <View style={{ marginTop: 10 }}>
                    <CustomButton title={'Guardar'} />
                </View>
            </Container>
        )
    }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChangePassword);