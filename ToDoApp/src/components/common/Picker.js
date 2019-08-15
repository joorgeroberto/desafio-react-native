import React from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import {CheckBox, Icon, Picker as NBPicker} from "native-base";
import { Row, Col, Grid } from 'react-native-easy-grid';
import Colors from "../../Themes/Colors";

const state = {
    selected: ''
};


const types = [
    {"name": 'Work', "key": 0},
    {"name":'Personal',"key":1},
    {"name":'Life', "key": 2},
    {"name":'Books', "key": 3},
    {"name":'College', "key": 4}
];

const renderPicker = () => {
    return types.map(type =>
        <Picker.Item
            label={type.name}
            value={type.name}
            key={type.key}
        />
    );
};

const Picker = ({iconName, iconType, onValueChange, }) => {
    const { containerStyle, iconStyle } = styles;
    return(
        <Grid>
            <Row style={containerStyle}>
                <Col size={20} style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                    <Icon type={iconType} name={iconName} style={iconStyle} />
                </Col>
                <Col size={80}>
                    {/*<Picker
                        //style={{paddingLeft: 15 }}
                        style={{flex: 2}}
                        mode="dropdown"
                        selectedValue={state.selected}
                        onValueChange={onValueChange}
                    >
                        <Picker.Item label="Filial" value="key0" />
                        { renderPicker() }
                    </Picker>*/}
                </Col>
            </Row>
        </Grid>
    );
};

const styles ={
    containerStyle: {
        height: 40,
    },
    iconStyle: {
        color: Colors.sge,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
};

export {Picker};