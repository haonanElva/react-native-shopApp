import React from 'react';
import {
  StyleSheet, 
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// navigator
import { StackNavigator } from 'react-navigation';
// 引入组件 Cell
import CommonCell from './commonCell';


export default class More extends React.Component {

    // 顶部导航
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            title: '更多',
            headerLeft: (
                <Image style={styles.headerLeft} source={{uri: 'http://haonan.zhushou.la/image/icon_homepage_message.png'}} resizeMode='contain' />
            ),
            headerRight: (
                <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.headerTouch} onPress={() => {alert('点击了')}}>
                        <Image style={styles.headerBtn} source={{uri: 'http://haonan.zhushou.la/image/setTing.png'}} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            ),
            tabBarIcon: ({ focused, tintColor }) => (
                <Image
                    resizeMode="contain"
                    style={styles.iconBtn}
                    source={!focused ? {uri: 'http://haonan.zhushou.la/image/icon_tabbar_misc.png'} : {uri: 'http://haonan.zhushou.la/image/icon_tabbar_misc_selected.png'}} 
                />
            ),
            tabBarLabel: '更多',
            mode: 'card',
            headerMode: 'float',
            activeTintColor: '#000000',
        };
    };

    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView>

                    <View style={{marginTop: 14}}>
                        <CommonCell 
                            nextClick={() => {this.endClick('ShakeMode')}}
                            title="扫一扫"
                        />
                    </View>
                    
                    <View style={{marginTop: 14}} >
                        <CommonCell 
                            nextClick={() => {this.endClick('ShakeMode')}}
                            title="点击震动手机"
                        />
                    </View>
                    

                    <View style={{marginTop: 14}}>
                        <CommonCell 
                            title="省流量模式"
                            isSwitch= {true}
                        />
                        <CommonCell 
                            title="消息提醒"
                        />
                        <CommonCell 
                            title="邀请好友使用浩楠哥电商"
                        />
                        <CommonCell 
                            title="清除缓存"
                            rightTitle="1.99M"
                        />
                    </View>

                    <View style={{marginTop: 14}}>
                        <CommonCell 
                            title="意见反馈"
                        />
                        <CommonCell 
                            title="问卷调查"
                        />
                        <CommonCell 
                            title="支付帮助"
                        />
                        <CommonCell 
                            title="网络诊断"
                        />
                        <CommonCell 
                            title="我要应聘"
                        />
                    </View>

                    <View style={{marginTop: 14}}>
                        <CommonCell 
                            title="精品应用"
                        />
                    </View>

                </ScrollView>
            </View>
        );
    }

    // 控制跳转
    endClick(value) {
        const { navigate } = this.props.navigation;
        navigate(value)
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },

    headerLeft: {
        marginLeft: 15,
        width: 25,
        height: 25,
    },

    headerRight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    headerBtn: {
        flex: 1,
        width: 24,
        height: 24,
        marginRight: 15
    },

    iconBtn: {
        width: 25,
        height: 25,
    },

    headerImg: {
        borderRadius: 15,
    },

    tabView: {
        padding: 15,
    },

    tabText: {
        fontSize: 14,
    }
});
