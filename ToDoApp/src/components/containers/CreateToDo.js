import React, { Component } from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Metrics } from "../../Themes";
import { Actions } from 'react-native-router-flux';
import { Header, Body, Left, Title, Icon, Button} from "native-base";
import Colors from "../../Themes/Colors";
import {Card, CardSection, Input, Switch, Picker} from "../common";
import DieDate from '../common/DieDate'

export default class CreateToDo extends Component {
    headerContent() {
        return(
        <Header style={{backgroundColor: Colors.sge}} androidStatusBarColor= {Colors.sge}>
            <Left>
                <Button
                    transparent
                    //light
                    style={{ alignItems: 'center', justifyContent: 'flex-start' }}
                    //onPress={() => this.props.navigation.navigate("DrawerOpen")}
                    onPress={() => {
                        Actions.pop();
                    }}
                >
                    <Icon type="Ionicons" name='md-arrow-back' style={{color:'white'}} />
                </Button>
            </Left>
            <Body style={{ flex: 1, justifyContent: 'center' }}>
            <Title style={{color: 'white'}}>Add a new task</Title>
            </Body>
        </Header>);
    }

    render() {
        return(
            <View>
                {this.headerContent()}
                <Grid>
                    <Col style={{height: Metrics.screenHeight - 60}}>
                        <Row style={{ height: Metrics.screenHeight}} size={30}>
                            <Col>
                                <Card>
                                    <CardSection >
                                        <Input
                                            labelType={'icon'}
                                            iconName={'md-today'}
                                            placeholder="Title"
                                            onChangeText={() => {}}
                                            value={true}
                                        />
                                    </CardSection>

                                    <CardSection >
                                        <Picker
                                            iconName={'md-pricetag'}
                                            placeholder="Type"
                                            onValueChange={() => {}}
                                        />
                                    </CardSection>
                                    <CardSection >
                                        <DieDate
                                            iconType={'Ionicons'}
                                            iconName={'md-stopwatch'}
                                        />
                                    </CardSection>
                                    <CardSection >
                                        <Switch
                                            onChangeValue={() => {}}
                                            value={true}
                                            label={'Priority'}
                                        />
                                    </CardSection>
                                    <CardSection >
                                        <Input
                                            labelType={'icon'}
                                            multiline={true}
                                            onChangeValue={()=>{}}
                                            iconType={'MaterialIcons'}
                                            iconName={'description'}
                                            placeholder="Description"
                                            onChangeText={() => {}}
                                            value={true}
                                        />
                                    </CardSection>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Grid>
            </View>
        );
    }
}