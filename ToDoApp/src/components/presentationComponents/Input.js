import React from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import {CheckBox, Icon} from "native-base";
import Colors from "../../Themes/Colors";

const renderLabel = ({labelType, iconName, onChangeValue}) => {
    const { labelStyle, iconStyle, checkBoxStyle, checkBoxContainer } = styles;
    if(labelType === 'icon')
        return(<Icon type="Ionicons" name={iconName} style={iconStyle} />);
    else if(labelType === 'text')
        return(<Text style={labelStyle}>{label}</Text>);
    else if(labelType === 'switch')
        return(
            <View style={checkBoxContainer}>
                <Switch
                    style={checkBoxStyle}
                    thumbColor={Colors.sge}
                    trackColor={Colors.sge}
                    onValueChange = {onChangeValue}
                    />
            </View>
        );

};

const Input = ({ label, labelType, iconName, value, onChangeText, placeholder, secureTextEntry, keyboardType, onChangeValue, multiline }) => {
    const { containerStyle, labelStyle, inputStyle, iconStyle } = styles;
    return (
        <View style={containerStyle}>
            {renderLabel({labelType, iconName, onChangeValue})}
            if()
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
        </View>
    );
};

const styles={
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    iconStyle: {
        color: Colors.sge,
        paddingLeft: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };