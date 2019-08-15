import React, {Component} from 'react';
import { View, Text, TextInput, Switch as NBSwitch, TouchableOpacity } from 'react-native';
import { Icon } from "native-base";
import { Row, Col, Grid } from 'react-native-easy-grid';
import DateTimePicker from "react-native-modal-datetime-picker";
import {Colors, Metrics} from "../../Themes";
import { dieDate } from "../../actions/index";
import { connect } from 'react-redux';


class DieDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            isTimePickerVisible: false,
            time: '',
            date: ''
        };
    }
    /*----------------------------------------------------------------------------------------------------------------*/
    /*------------------------------------------Time Picker-----------------------------------------------------------*/
    /*----------------------------------------------------------------------------------------------------------------*/
    _showTimePicker = () => this.setState({ isTimePickerVisible: true });
    _hideTimePicker = () => this.setState({ isTimePickerVisible: false });
    _handleTimePicked = (time) => {

        console.log('A date has been picked: ', time.toString().substr(16, 5));
        this.props.dieDate({ prop: 'time',value: time.toString().substr(16, 5)});


        console.log(this.props.time);
        this._hideTimePicker();

    };
    showTime() {
        if(this.props.time)
            return(<Text style={{color: 'black', paddingLeft: 10}}>{this.props.time}</Text>);

    }

    /*----------------------------------------------------------------------------------------------------------------*/
    /*------------------------------------------Date Picker-----------------------------------------------------------*/
    /*----------------------------------------------------------------------------------------------------------------*/
    _showDatePicker = () => this.setState({ isDatePickerVisible: true });
    _hideDatePicker = () => this.setState({ isDatePickerVisible: false });
    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date.toString().substr(4, 12));
        this.props.dieDate({
            prop: 'date', value: (date.toString().substr(8, 2)
                + ' ' + date.toString().substr(4, 3)
                + ' ' + date.toString().substr(11, 4))
        });
        console.log(this.props.date);
        this._hideDatePicker();
        this._showTimePicker();
    };
    showDate() {
        if(this.props.date)
            return(<Text style={{color: 'black', paddingLeft: 10}}>{this.props.date}</Text>);
        else
            return(<Text style={styles.textStyle}>DieDate</Text>);
    }
    /*----------------------------------------------------------------------------------------------------------------*/


    render() {
        const { containerStyle, textStyle, checkBoxStyle, iconStyle } = styles;
        const { iconType, iconName } = this.props;
        return (
            <Grid>
                <Row style={containerStyle}>
                    <Col size={20} style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Icon type={iconType} name={iconName} style={iconStyle} />
                    </Col>
                    <Col size={80} style={{justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={this._showDatePicker} >
                            <Row style={{ width: (Metrics.screenWidth) - 90, justifyContent: 'center', alignItems: 'center'}}>
                                <Col size={50} style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                                    {this.showDate()}
                                </Col>
                                <Col size={50}>
                                    {this.showTime()}
                                </Col>
                            </Row>
                        </TouchableOpacity>
                        <DateTimePicker
                            mode='date'
                            isVisible={this.state.isDatePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDatePicker}
                        />
                        <DateTimePicker
                            mode='time'
                            isVisible={this.state.isTimePickerVisible}
                            onConfirm={this._handleTimePicked}
                            onCancel={this._hideTimePicker}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const styles={
    textStyle: {
        color: '#A3AAB1',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15,
        lineHeight: 50,

    },
    iconStyle: {
        color: Colors.sge,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
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

const mapStateToProps = (state) => {
    const { date, time } = state.createToDo;

    return {
        date: date,
        time: time
    };
};

export default connect(mapStateToProps, { dieDate }) (DieDate);