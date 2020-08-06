import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Card from "../../components/dashboard-content/custom-cardMenu"
import { connect } from "react-redux";
import Content from "../../components/content/Content"
import Header from "../../components/dashboard-content/dashboard-header"
import Container from "../../components/container/Container"
import { image } from "./DashboardContast"
import Colors from "../../themes/Colors"
import Separator from "../../components/custom-separator/CustomSeparator"

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderItem(item) {
        return (
            <Card source={item.image} />
        )
    }

    render() {

        return (
            <Container>
                <Header />
                <Content>
                    <FlatList
                        numColumns={2}
                        data={image}
                        keyExtractor={(item, index) => `${item.key}`}
                        renderItem={({ item }) => this.renderItem(item)}
                        scrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        style={{alignSelf:'center'}}
                     />
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
)(Dashboard);