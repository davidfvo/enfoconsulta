/**
 * @providesModule login
 */
import React, { Component } from "react";
import {
  StatusBar, Text,
  TextInput, View, TouchableOpacity, SafeAreaView
} from "react-native";
import { connect } from "react-redux";
import CustomLoading from "../../components/error-loading/Loading";
import AuthActions from "../../stores/auth/Actions";
import Colors from "../../themes/Colors";
import Metrics from "../../themes/Metrics";
import Styles from "./LoginStyle";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  validateCredentials() {
    if (this.props.isLoading) {
      return;
    }
    const request = {
      username: this.state.username,
      password: this.state.password,
    }

    this.props.login(request)
  }

  changeTextHandler = key => value => {
    this.setState({ [key]: value });
  };

  changeBoolHandler = key => value => {
    this.setState(prevState => ({ [key]: !prevState[key] }));
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={Colors.primary} barStyle='light-content'/>
          <View style={{
                alignContent: "center",
                justifyContent: "center"
              }}>
            <Text style={Styles.title}>Iniciar sesión</Text>
          </View>
          <TextInput
            placeholder={`Usuario del médico`}
            blurOnSubmit={false}
            returnKeyType="next"
            value={this.state.username}
            onChangeText={this.changeTextHandler("username")}
            onSubmitEditing={() => {
              this.password._root.focus();
            }}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={this.changeTextHandler("password")}
            returnKeyType="go"
            setRef={input => {
              this.password = input;
            }}
            onSubmitEditing={() => this.validateCredentials()}
          />
          <View style={{ paddingHorizontal: Metrics.mXxl }}>
            <View style={Styles.buttonViewHeight} />
            <TouchableOpacity
              style={{backgroundColor: Colors.primary}}
              onPress={() => this.validateCredentials()}
            >
              {this.props.isLoading ? (
                <CustomLoading
                  size="small"
                  color={Colors.white}
                  style={{}}
                />
              ) : (
                <Text uppercase={false} style={{}}>
                  Entrar
                </Text>
              )}
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
  }
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