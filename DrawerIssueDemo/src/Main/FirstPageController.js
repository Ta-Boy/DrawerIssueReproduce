import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image, TextInput, DrawerLayoutAndroid} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../../resources/Colors';
import DetailViewController from './DetailViewController';

class FirstPageController extends Component {

    static navigationOptions = {
        headerTitle: 'First Page',
    };

    constructor(props) {
        super(props);

        this.state = {
            drawerVisible: false,
        };
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref='drawer'
                drawerWidth={310}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={this.renderDrawerMenu.bind(this)}
                onDrawerOpen={() => {
                    this.state.drawerVisible = true;
                }}
                onDrawerClose={() => {
                    this.state.drawerVisible = false;
                }}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => {
                        if (!this.state.drawerVisible) {
                            this.refs.drawer.openDrawer();
                        } else {
                            this.refs.drawer.closeDrawer();
                        }
                        this.state.drawerVisible = !this.state.drawerVisible;
                    }}>
                        <Text>Taped To Toggle Drawer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.push('Detail');
                    }} style={{marginTop: 50}}>
                        <Text>Jump To Detail Page</Text>
                    </TouchableOpacity>
                </View>
            </DrawerLayoutAndroid>
        );
    }

    renderDrawerMenu() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>This is a menu</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.color_bg,
    },
});

const AppNavigator = createStackNavigator({
    Home: {
        screen: FirstPageController,
    },
    Detail: {
        screen: DetailViewController,
    },
});

export default AppNavigator;
