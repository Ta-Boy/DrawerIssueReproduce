import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image, TextInput} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Images from '../../resources/Images';
import Colors from '../../resources/Colors';

import FirstPageController from './FirstPageController';
import SecondPageController from './SecondPageController';
import ThirdPageController from './ThirdPageController';

class TabBarController extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color_bg,
    },
});


const TabBarStack = createBottomTabNavigator({
    First: {
        screen: FirstPageController,
        navigationOptions: {
            tabBarLabel: 'First',
            tabBarIcon: ({focused}) => (
                <Image source={focused ? Images.main.tab_home_pre : Images.main.tab_home_def}/>
            ),
        },
    },
    Second: {
        screen: SecondPageController,
        navigationOptions: {
            tabBarLabel: 'Second',
            tabBarIcon: ({focused}) => (
                <Image source={focused ? Images.main.tab_tour_pre : Images.main.tab_tour_def}/>
            ),
        },
    },
    Third: {
        screen: ThirdPageController,
        navigationOptions: {
            tabBarLabel: 'Third',
            tabBarIcon: ({focused}) => (
                <Image source={focused ? Images.main.tab_me_pre : Images.main.tab_me_def}/>
            ),
        },
    },
}, {
    initialRouteName: 'First',
    lazy: true,
    swipeEnabled: true,
    backBehavior: 'none',
    tabBarOptions: {
        inactiveTintColor: Colors.color_tab_def,
        activeTintColor: Colors.color_main,
        showLabel: true,
        labelStyle: {
            fontSize: 10,
        },
        iconStyle: {
            width: 20,
            height: 20,
        },
        style: {
            borderTopWidth: 0,
        },
    },
});

export default createAppContainer(TabBarStack);
