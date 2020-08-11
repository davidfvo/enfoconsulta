import React, { Component } from "react";
import { FlatList } from 'react-native';
import { connect } from "react-redux";
import Container from "../../components/container/Container";
import Content from "../../components/content/Content";
import Card from "../../components/dashboard-content/custom-cardMenu";
import Header from "../../components/dashboard-content/dashboard-header";
import { image } from "./DashboardContast";

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
                        style={{ alignSelf: 'center' }}
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