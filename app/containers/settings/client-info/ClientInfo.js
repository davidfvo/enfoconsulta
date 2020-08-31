import React, { Component } from "react";
import { FlatList, TouchableOpacity, View, Text, Image } from 'react-native';
import { connect } from "react-redux";
import Container from "../../../components/container/Container";
import Content from "../../../components/content/Content";
import Icon from "react-native-vector-icons/MaterialIcons";
import Perfil from "../../../assets/perfil.png"
import Colors from "../../../themes/Colors"
import TextInput from "../../../components/custom-textInput/CustomUserInput";
import CustomButton from "../../../components/custom-Button/CustomButton";

class ClientInfoScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    onEraseField = () => {

    }
    render() {

        return (
            <Container>
                <View>
                    <TouchableOpacity style={{ paddingLeft: 20, paddingTop: 10 }}>
                        <Icon name={'arrow-back'} size={35} color={Colors.white} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ textAlign: 'center', color: Colors.white, fontSize: 25 }}>Perfil</Text>
                    </View>
                </View>
                <Content borderBottomLeftRadius={35} borderBottomRightRadius={35}>
                    <View style={{ alignSelf: 'center' }}>
                        <Image source={Perfil} style={{ width: 180, height: 180 }} />
                    </View>

                    <View style={{ padding: 20, marginBottom:10 }}>
                        <TextInput value="Jcabrera19" editable={false} />
                        <TextInput fieldName="Nombre" value="Jose Gabriel Cabrera Zapata" />
                        <TextInput fieldName="Fecha de nacimiento" value="19/03/1999" />
                        <TextInput fieldName="Teléfono/Celular" value="8492693876" />
                        <TextInput fieldName="Correo" value="Jcabrera@gmail.com" />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <CustomButton title={'Guardar Cambios'} />
                    </View>
                </Content>
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
)(ClientInfoScreen);