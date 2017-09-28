import React from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Image,
    Platform // 用来判断当前运行系统 css
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';


// 所有组件的注册全部在这里
import Home from '../home/home';
import Shop from '../shop/shop';
import Mine from '../mine/mine';
import More from '../more/more';
import Detail from '../home/detail';
import CommonCell from '../more/commonCell';

//二级页面不仅要导入还要在底下注册
import Choose from '../mine/login/choose';
// 定位
import Localtion from '../home/localtion';
// 震动手机
import ShakeMode from '../more/shake';
// 扫一扫
// import Screen from '../more/screen';
// 登录
import Login from '../mine/login/login';


// 底部四个按钮
const Tabs = TabNavigator({
    Home: { screen: Home },
    Shop: { screen: Shop },
    Mine: { screen: Mine },
    More: { screen: More },
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: 'red', // 底部tab按下状态颜色变化
        style: {
            backgroundColor: '#fff',
            height: 50
        },
    },
    swipeEnabled: true // 开启滑动
});


// 页面跳转
const Navigation = StackNavigator({
    Tabs: { screen: Tabs },
    Detail: { screen: Detail },
    Choose: { screen: Choose },
    Localtion: { screen: Localtion },
    ShakeMode: { screen: ShakeMode },
    Login: { screen: Login },
   // Screen: { screen: Screen }
}, {
    initialRouteName: 'Tabs',
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'rgba(255, 96, 0, 1)',
        },
        headerBackTitle: null,
        headerTintColor: '#FFFFFF',
    },
    headerMode: 'screen',
});

export default Navigation;


