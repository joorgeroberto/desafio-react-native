import React from 'react';
import { View, Text, TextInput, Switch as NBSwitch } from 'react-native';
import {CheckBox, Icon} from "native-base";
import { Row, Col, Grid } from 'react-native-easy-grid';
import Colors from "../../Themes/Colors";

const Switch = ({ onChangeValue, label, value }) => {
    const { containerStyle, textStyle, checkBoxStyle } = styles;
    return (
        <Grid>
            <Row style={containerStyle}>
                <Col size={20} style={{justifyContent: 'center', alignItems: 'center'}}>
                    <NBSwitch
                        style={checkBoxStyle}
                        thumbColor={Colors.sge}
                        trackColor={Colors.sge}
                        onValueChange = {onChangeValue}
                        value={value}
                    />
                </Col>
                <Col size={80} style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                    <Text style={textStyle}>{label}</Text>
                </Col>
            </Row>
        </Grid>
    );
};

const styles={
    textStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15,
        lineHeight: 23,

    },
    checkBoxStyle: {
        color: Colors.sge,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    containerStyle: {
        height: 40,
    },
};

export { Switch };