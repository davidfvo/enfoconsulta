/**
 * @providesModule login
 */
import CustomLoading from "app/components/CustomLoading";
import {
  Button, Container,
} from "native-base";
import React, { Component } from "react";
import {
  Animated,
  Keyboard, View, Text,
  StatusBar, TouchableOpacity, TextInput
} from "react-native";
import { connect } from "react-redux";
import Content from "../../components/content/Content";
import CustomInputBordered from "../../components/custom-input/CustomInputBordered";
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
      <Container>
        <Content
          color={Colors.backgroundOpaque}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
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
            <Button
              rounded
              block
              style={{}}
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
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  QBauth: state.QBauth,
});

const mapDispatchToProps = dispatch => ({
  login: request => dispatch(AuthActions.login(request)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);