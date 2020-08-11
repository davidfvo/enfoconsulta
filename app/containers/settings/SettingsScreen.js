import React, { Component } from "react";
import { View, Text, TouchableOpacity, Settings } from 'react-native';
import { connect } from "react-redux";
import Container from "../../components/container/Container";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from '../../themes/Colors';
import SettingsOptions from "./components/SettingsOptions"

class SettingsScreen extends Component {

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
                    </View>
                        <Text style={{ textAlign: 'center', color: Colors.white, fontSize: 25 }}>Configuración</Text>
                </View>
                <View style={{ marginHorizontal: 25 }}>

                    <SettingsOptions icon='lock' color="blue" title='Cambiar clave de usuario'/>
                    <SettingsOptions icon='user-cog' color="red" title='Ajustar datos del usuario'/>
                    <SettingsOptions icon='moon' color="black" title='Modo oscuro'/>
                    <SettingsOptions icon='text-height' color="orange" title='Cambiar Tamaño del texto'/>
                    <SettingsOptions icon='language' color="green" title='Elegir idioma'/>
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
)(SettingsScreen);