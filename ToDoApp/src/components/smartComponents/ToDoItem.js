import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid'
import {Card, CheckBox, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';
import {Colors, Metrics} from "../../Themes";

export default class ToDoItem extends Component {
    renderDetails() {
        const { expanded } = this.props;
        if(expanded)
            return (
                    <Text style={{fontSize: 15, color: Colors.charcoal}}>
                        Descricao de teste
                    </Text>
            );
    }

    render(){
        return(
            <TouchableWithoutFeedback
                onPress={() => { Actions.createToDo()}}
            >
                <Row style={{ height: 80, width: Metrics.screenWidth, paddingLeft: 5, paddingRight: 5, }}>
                    <Card style={{flex: 1, borderRadius: 2, paddingLeft: 10}}>
                        <Grid>
                            <Col style={{justifyContent: 'center', alignItems: 'flex-start'}} size={10}>
                                <CheckBox checked={true} color={Colors.facebook}/>
                            </Col>
                            <Col size={90} style={{paddingLeft: 10, justifyContent: 'center'}}>
                                <Row style={{alignItems: 'flex-end', }} size={60}>
                                    <Text style={{fontSize: 25}}>Teste</Text>
                                </Row>
                                <Row style={{alignItems: 'flex-start' }} size={40}>
                                    {this.renderDetails()}
                                </Row>
                            </Col>
                        </Grid>
                    </Card>
                </Row>
            </TouchableWithoutFeedback>
        );
    }
}