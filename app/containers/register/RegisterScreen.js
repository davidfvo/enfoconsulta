import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import Container from "../../components/container/Container";
import Content from "../../components/content/Content";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from '../../themes/Colors';
import CustomInput from "../../components/custom-textInput/CustomInput";
import CustomPicker from "../../components/custom-picker/CustomPicker";
import CustomButton from "../../components/custom-Button/CustomButton";

class RegisterScreen extends Component {

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
                        <Text style={{ textAlign: 'center', color: Colors.white, fontSize: 25 }}>Registro</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 25 }}>
                    <CustomInput placeholder={'Nombre'} />
                    <CustomInput placeholder={'Apellido'} />
                    <CustomInput placeholder={'Cédula'} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <CustomPicker labelTitle="Sexo" />

                        <View style={{ marginLeft: 5 }}>
                            <CustomInput placeholder={'F.Nacimiento'} />
                        </View>

                    </View>
                    <CustomInput placeholder={'Telefono'} />
                    <CustomInput placeholder={'Correo'} />
                    <CustomInput placeholder={'Contraseña'} />
                    <CustomInput placeholder={'Repetir Contraseña'} />
                </View>

                <View style={{ marginTop: 10 }}>
                    <CustomButton title={'Registrarte'} />
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
)(RegisterScreen);