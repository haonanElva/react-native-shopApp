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
import CommonMineCell from './commonMineCell';
// 引入组件 tab
import MineTab from './mineTab';
// 引入组件 tab
import MineThreeTab from './mineThreeTab';

export default class Mine extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            title: '',
            tabBarIcon: ({ focused, tintColor }) => (
                <Image
                    resizeMode="contain"
                    style={styles.iconBtn}
                    source={!focused ? {uri: 'http://haonan.zhushou.la/image/icon_tabbar_mine.png'} : {uri: 'http://haonan.zhushou.la/image/icon_tabbar_mine_selected.png'}} />
                ),
            tabBarLabel: '我的',
            mode: 'card',
            headerMode: 'float',
        };
    };
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
           
                <ScrollView
                >
                    <View style={{backgroundColor: '#e8e8e8',flex: 1}}>
                        <TouchableOpacity
                            onPress={() => navigate('Choose', {
                                    name: 'Choose', // 跳转模块名称
                                    title:'我是跳转过去下个页面要带的参数', // 跳转参数
                                })
                            }
                        >
                            <View style={styles.topMineStyle}>
                                <View style={styles.leftMineStyle}>
                                    <Image 
                                        source={{uri: 'https://vi2.6rooms.com/live/2017/09/12/10/1010v1505185066019172090_s.jpg'}} 
                                        style={styles.minePic}>
                                    </Image>
                                    <Text style={{marginLeft:8, color:'#fff'}}>浩楠哥电商平台</Text>
                                    <Image 
                                        source={{uri: 'http://haonan.zhushou.la/image/avatar_vip.png'}} 
                                        style={{marginLeft:5, width: 24, height: 24}}>
                                    </Image>
                                </View>
                                <Image 
                                    source={{uri: 'http://haonan.zhushou.la/image/arrorRight.png'}} 
                                    style={{width: 10, height: 21, marginRight: 10}}>
                                </Image>
                            </View>
                        </TouchableOpacity>
                        
                        {/**** 3 tab ****/}
                        <MineThreeTab/>

                        <View style={{marginTop: 0}}>
                            <CommonMineCell 
                                title="我的订单"
                                rightTitle="查看全部订单"
                                leftImg="http://haonan.zhushou.la/image/collect.png"
                            />
                        </View>

                        {/**** 4 tab ****/}
                        <MineTab/>

                        <View style={{marginTop: 14}}>
                            <CommonMineCell 
                                title="浩楠哥钱包"
                                rightTitle="账户余额：￥100"
                                leftImg="http://haonan.zhushou.la/image/draft.png"
                            />
                            <CommonMineCell 
                                title="抵用券"
                                rightTitle="0"
                                leftImg="http://haonan.zhushou.la/image/like.png"
                            />
                        </View>

                        <View style={{marginTop: 14}}>
                            <CommonMineCell 
                                title="积分商城"
                                leftImg="http://haonan.zhushou.la/image/card.png"
                            />
                        </View>

                        <View style={{marginTop: 14}}>
                            <CommonMineCell 
                                title="今日推荐"
                                leftImg="http://haonan.zhushou.la/image/new_friend.png"
                                rightImg="http://haonan.zhushou.la/image/me_new.png"
                            />
                        </View>

                        <View style={{marginTop: 14}}>
                            <CommonMineCell 
                                title="我要合作"
                                rightTitle="轻松开店，招财进宝"
                                leftImg="http://haonan.zhushou.la/image/pay.png"
                            />
                        </View>

                        
                    </View>
                    

                </ScrollView>
            </View>
        );
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
    scrollStyle: {
        backgroundColor: 'rgba(255, 96, 0, 1)',
    },

    topMineStyle: {
        backgroundColor: 'rgba(255, 96, 0, 1)',
        flexDirection: 'row',
        // 垂直居中
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    leftMineStyle:{
        flexDirection: 'row',
        // 垂直居中
        alignItems: 'center',
    },
    minePic: {
        width: 80, height: 80,
        borderRadius: 40, borderColor: '#f68366', borderWidth: 5,
        marginLeft: 10,
    },

    headerTouch: {
        height: 30
    },

    headerBtn: {
        flex: 1,
        width: 22,
        height: 22,
        marginRight: 15
    },

    iconBtn: {
        width: 22,
        height: 22,
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
