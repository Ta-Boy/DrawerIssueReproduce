/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TabBarController from './src/Main/TabBarController';
import {name as appName} from './app.json';

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
// 关闭全部黄色警告
console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => TabBarController);
