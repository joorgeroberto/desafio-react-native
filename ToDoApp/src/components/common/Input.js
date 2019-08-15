import React from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import {CheckBox, Icon} from "native-base";
import { Row, Col, Grid } from 'react-native-easy-grid';
import Colors from "../../Themes/Colors";

const renderLabel = ({labelType, iconName, iconType, label}) => {
    const { labelStyle, iconStyle } = styles;
    if(labelType === 'icon')
        return(<Icon type={iconType} name={iconName} style={iconStyle} />);
    else if(labelType === 'text')
        return(<Text style={labelStyle}>{label}</Text>);
};

const renderMultiline = ({multiline}) => {
    const {  containerStyle, multilineContainerStyle } = styles;
    if(multiline === true)
        return(multilineContainerStyle);
    else
        return(containerStyle);
};

const Input = ({ label, labelType, iconName,iconType, value, onChangeText, placeholder, secureTextEntry, keyboardType, onChangeValue, multiline }) => {
    const { containerStyle, inputStyle } = styles;
    return (
        <Grid>
            <Row style={renderMultiline({multiline})}>
                <Col size={20} style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                    {renderLabel({labelType, iconName,iconType, label})}
                </Col>
                <Col size={80}>
                    <TextInput
                        secureTextEntry={secureTextEntry}
                        placeholder={placeholder}
                        multiline={multiline}
                        numberOfLines={10}
                        autoCorrect={false}
                        value={value}
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                        style={inputStyle}
                    />
                </Col>
            </Row>
        </Grid>
    );
};

const styles={
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15,
        lineHeight: 23,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    iconStyle: {
        color: Colors.sge,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    checkBoxContainer: {
        paddingLeft: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    checkBoxStyle: {
        color: Colors.sge,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerStyle: {
        height: 40,
        /*flex: 1,
        flexDirection: 'row',
        alignItems: 'center'*/
    },
    multilineContainerStyle: {
        height: 80
    }
};

export { Input };