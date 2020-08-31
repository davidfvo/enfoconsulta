import update from 'immutability-helper';
import React, { useState } from "react";
import {
  Text,
  View
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { connect } from "react-redux";
import Container from "../../components/container/Container";
import Content from "../../components/content/Content";
import CustomButton from "../../components/custom-Button/CustomButton";
import CustomSeparator from "../../components/custom-separator/CustomSeparator";
import CustomUserInput from "../../components/custom-textInput/CustomUserInput";
import CustomInput from "../../components/custom-textInput/CustomInput";
import AuthActions from "../../stores/auth/Actions";
import Styles from "./LoginStyle";
import { Metrics, Colors } from '../../themes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ContentGradient from '../../components/content/ContentGradient';
import NavigationService from '../../services/NavigationService';

const Login = props => {
  const [state, setState] = useState({
    username: "",
    password: "",
  })
  const [passwordRef, setPasswordRef] = useState(null)

  const validateCredentials = () => {
    if (props.isLoading) {
      return;
    }
    const request = {
      username: state.username,
      password: state.password,
    }

    props.login(request)
  }

  //Value change handlers
  const onStateChange = (key) => value => {
    setState(prevState => update(prevState, { [key]: { $set: value } }));
  };

  return (
    <Container>
      <ContentGradient color={[Colors.white, Colors.gray]} contentContainerStyle={Styles.content}>
        <View style={{
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Text style={Styles.title}>ENFOCONSULTA</Text>
          <Text style={Styles.subTitle}>Inicio</Text>
        </View>
        <CustomSeparator height={Metrics.mXxl}/>
        <CustomInput
          placeholder='Usuario'
          blurOnSubmit={false}
          returnKeyType="next"
          value={state.username}
          onChangeText={onStateChange("username")}
          onSubmitEditing={() => {
            passwordRef._root.focus();
          }}
        />
        <CustomSeparator />
        <CustomInput
          placeholder="Contraseña"
          secureTextEntry={true}
          value={state.password}
          onChangeText={onStateChange("password")}
          returnKeyType="go"
          setRef={input => {
            setPasswordRef(input);
          }}
          onSubmitEditing={validateCredentials}
        />
        <CustomSeparator height={Metrics.mXxl}/>
        <CustomButton
          style={{backgroundColor: Colors.primary}}
          onPress={validateCredentials}
          isLoading={props.isLoading}
          title='Login'
        />
        <CustomSeparator />
        <CustomButton
          onPress={() => NavigationService.navigate('RegisterScreen')}
          isLoading={props.isLoading}
          title='Crear cuenta'
        />
        <CustomSeparator />
        <TouchableOpacity style={Styles.textButtonContainer} onPress={() => {}}>
          <Text style={Styles.textButton}>Olvidé mi contraseña</Text>
        </TouchableOpacity>
      </ContentGradient>
    </Container>
  );
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  QBauth: state.QBauth,
});

const mapDispatchToProps = {
  login: AuthActions.login,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);