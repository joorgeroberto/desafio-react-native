import React, { Component } from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid'
import ToDoItem from '../smartComponents/ToDoItem';
import { Metrics } from "../../Themes";
import {myTab} from "../presentationComponents";
import {Card, Tabs, Header, Container, Body, Tab} from "native-base";
import Colors from "../../Themes/Colors";


const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December',];

export default class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //defauilt value of the date time
            date: '',
        };
    }


    componentWillMount() {
        const day = days[new Date().getDay()];
        const date = new Date().getDate(); //Current Date
        const month = months[new Date().getMonth()]; //Current Month
        this.setState({
            //Setting the value of the date time
            date:
                day + ', ' + date + 'nd ' + month,
        });
    }

    headerContent() {
        return(
            <Row size={10} style={{width: Metrics.screenWidth, paddingBottom: 20, backgroundColor: Colors.snow}}>
                <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Row size={70} style={{paddingTop: 5}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>ToDo App</Text>
                    </Row>
                    <Row size={30} style={{alignItems: 'flex-start'}}>
                        <Text style={styles.textStyles}>{this.state.date}</Text>
                    </Row>
                </Col>
            </Row>
        );
    }



    render() {
        return(


            <Grid style={{backgroundColor: Colors.silver}}>
                <View
                    style={{
                        backgroundColor: Colors.snow,
                        height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
                    }}>
                    <StatusBar
                        hidden = {false}
                        backgroundColor={Colors.snow}
                        barStyle="dark-content"
                    />
                </View>
                <Col style={{ width: Metrics.screenWidth }}>
                    {this.headerContent()}

                    <Row size={90} >
                        <Tabs noShadow tabBarUnderlineStyle={{borderBottomWidth: 3, borderColor: Colors.facebook}}>
                            <myTab/>
                            <Tab
                                noShadow
                                heading="All"
                                style={styles.tabBarStyle}
                                tabStyle={styles.tabStyle}
                                textStyle={styles.textStyle}
                                activeTabStyle={styles.activeTabStyle}
                                activeTextStyle={styles.activeTextStyle}
                            >
                                <Text>Tab 2</Text>
                            </Tab>
                            <Tab
                                noShadow
                                heading="All"
                                style={styles.tabBarStyle}
                                tabStyle={styles.tabStyle}
                                textStyle={styles.textStyle}
                                activeTabStyle={styles.activeTabStyle}
                                activeTextStyle={styles.activeTextStyle}
                            >
                                <Text>Tab 3</Text>
                            </Tab>
                            <Tab
                                noShadow
                                heading="All"
                                style={styles.tabBarStyle}
                                tabStyle={styles.tabStyle}
                                textStyle={styles.textStyle}
                                activeTabStyle={styles.activeTabStyle}
                                activeTextStyle={styles.activeTextStyle}
                            >
                                <Text>Tab 3</Text>
                            </Tab>
                        </Tabs>
                    </Row>
                </Col>
            </Grid>

        );
    }
}

const styles = {
    textStyles: {fontSize: 15, color: Colors.facebook},
    tabBarStyle: {backgroundColor: Colors.snow},
    tabStyle: {backgroundColor: Colors.snow},
    textStyle: {color: Colors.gray},
    activeTabStyle: {backgroundColor: Colors.snow},
    activeTextStyle: {color: Colors.facebook, fontWeight: 'bold'}
}