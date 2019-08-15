import {Tab as NBTab} from "native-base";
import React from 'react';
import { Text, View } from 'react-native';
import Colors from "../../Themes/Colors";

const myTab = () => {
    console.log();
    return(
        <NBTab
            noShadow
            heading="All"
            style={styles.tabBarStyle}
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.activeTabStyle}
            activeTextStyle={styles.activeTextStyle}
        >

        </NBTab>
    );
};

const styles = {
    textStyles: {fontSize: 15, color: Colors.facebook},
    tabBarStyle: {backgroundColor: Colors.snow},
    tabStyle: {backgroundColor: Colors.snow},
    textStyle: {color: Colors.gray},
    activeTabStyle: {backgroundColor: Colors.snow},
    activeTextStyle: {color: Colors.facebook, fontWeight: 'bold'}
};

export {myTab};

