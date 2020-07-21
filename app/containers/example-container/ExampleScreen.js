import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from "react-redux";
import ExampleActions from '../../stores/example/Actions'

class ExampleScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.doRequest = this.doRequest.bind(this)
  }

  doRequest(){
    const request = {

    }
    this.props.doSomething(request)
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,

  data: state.example.getData,
  isLoading: state.example.getLoading,
  error: state.example.getError,
});

const mapDispatchToProps = {
  doSomething: ExampleActions.examplePayload,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen);