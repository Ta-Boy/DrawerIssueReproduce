import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image, TextInput} from 'react-native';

// 导入基础配置
import Colors from '../../resources/Colors';
import {createStackNavigator} from 'react-navigation-stack';

export default class DetailViewController extends Component {

    static navigationOptions = {
        headerTitle: 'Detail Page',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Detail Page
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color_bg,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


