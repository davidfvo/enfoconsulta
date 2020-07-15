import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import StartupActions from "app/stores/startup/Actions";
import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import ImageViewer from "../../components/ImageViewer";
import VideoPlayer from "../../components/VideoPlayer";
import { isMountedRef, navigationRef } from "../../services/NavigationService";
import Login from "../login/Login";
import SplashScreen from "./splash-screen/SplashScreen";
import config from '../../../QBConfig';
import { appStart } from '../../stores/quick-blox/actions';

// const Drawer = createDrawerNavigator();
// const AppNavDashboard = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Dashboard"
//       headerMode="none"
//       drawerContent={(props) => <DrawerMenu props={props} />}
//     >
//       <Drawer.Screen name="Dashboard" component={Dashboard} />
//     </Drawer.Navigator>
//   );
// }

const Stack = createStackNavigator();
const AppNav = () => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      {/* Auth */}
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Dashboard" component={AppNavDashboard} /> */}

    </Stack.Navigator>
  );
};

const AppContainer = () => {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef} onStateChange={state => console.log('New state is', state)}>
      <AppNav />
    </NavigationContainer>
  )
}

class RootScreen extends Component {
  constructor(props) {
    super(props)
    props.appStart(config)
  }

  componentDidMount() {
    console.log("this.props.startup()");
    this.props.startup();
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  appStart,
  startup: () => dispatch(StartupActions.startup())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen);
