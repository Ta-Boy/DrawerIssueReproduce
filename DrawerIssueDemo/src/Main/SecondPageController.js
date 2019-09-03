import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image, TextInput} from 'react-native';

// 导入基础配置
import Colors from '../../resources/Colors';
import {createStackNavigator} from 'react-navigation-stack';
import DetailViewController from './DetailViewController';

class SecondPageController extends Component {

    static navigationOptions = {
        headerTitle: 'Second Page'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Second Page
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.color_bg,
    }
});

const AppNavigator = createStackNavigator({
    Home: {
        screen: SecondPageController,
    },
});

export default AppNavigator;
