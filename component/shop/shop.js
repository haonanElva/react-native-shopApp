import React from 'react';
import {
    StyleSheet, 
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator
} from 'react-native';

import {PullView} from 'react-native-pull';

// 下拉刷新 pulling
// 松开刷新 pullok
// 玩命刷新中 pullrelease

// 引入组件 Cell
import ShopCell from '../home/common/shopCell';

// 获取设备宽高
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class Shop extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            title: '浩楠哥商家',
            headerLeft: (
                <Image style={styles.headerLeft} source={{uri: 'http://haonan.zhushou.la/image/icon_homepage_message.png'}} resizeMode='contain' />
            ),
            headerRight: (
                <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.headerTouch} onPress={() => { navigate('Search') }}>
                        <Image style={styles.headerBtn} source={{uri: 'http://haonan.zhushou.la/image/icon_homepage_scan.png'}} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            ),
            tabBarIcon: ({ focused, tintColor }) => (
                <Image
                    resizeMode="contain"
                    style={styles.iconBtn}
                    source={!focused ? {uri: 'http://haonan.zhushou.la/image/icon_tabbar_merchant_normal.png'} : {uri: 'http://haonan.zhushou.la/image/icon_tabbar_merchant_selected.png'}} />
                ),
            tabBarLabel: '商品',
            mode: 'card',
            headerMode: 'float',
        };
    };


    constructor(props) {
        super(props);
        this.state = {refreshing: false};
        this.onPullRelease = this.onPullRelease.bind(this);
        this.topIndicatorRender = this.topIndicatorRender.bind(this);
    }

    onPullRelease(resolve) {
        //do something
        setTimeout(() => {
            resolve();
        }, 3000);
    }

    topIndicatorRender(pulling, pullok, pullrelease) {
        const hide = {position: 'absolute', left: 10000};
        const show = {position: 'relative', left: 0};
        setTimeout(() => {
            if (pulling) {
                this.txtPulling && this.txtPulling.setNativeProps({style: show});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullok) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: show});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullrelease) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
            }
        }, 1);
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                <ActivityIndicator size="small" color="gray" />
                <Text ref={(c) => {this.txtPulling = c;}}> 下拉刷新...</Text>
                <Text ref={(c) => {this.txtPullok = c;}}> 松开刷新......</Text>
                <Text ref={(c) => {this.txtPullrelease = c;}}> 玩命刷新中......</Text>
            </View>
        );
    }


    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <PullView style={{width: Dimensions.get('window').width}} 
                    onPullRelease={this.onPullRelease} 
                    topIndicatorRender={this.topIndicatorRender} 
                    topIndicatorHeight={60}
                >

                <View style={styles.container}>
                    <ShopCell 
                        title="陕西省出发 司马迁祠、韩城古城一日"
                        subTitle="常规线路, 人文景观, 历史遗迹"
                        price="199"
                        leftImg="https://vi0.6rooms.com/live/2017/06/17/13/1010v1497677926584662256_s.jpg"
                    />
                    <ShopCell 
                        title="咸阳市出发 大秦漂流、将军山古镇一日游"
                        subTitle="常规线路, 人文景观, 历史遗迹"
                        price="299"
                        leftImg="https://vi0.6rooms.com/live/2017/03/24/17/1010v1490347375279584474_s.jpg"
                    />
                    <ShopCell 
                        title="陕西省出发 司马迁祠、韩城古城一日"
                        subTitle="常规线路, 人文景观, 历史遗迹"
                        price="399"
                        leftImg="https://vi2.6rooms.com/live/2017/06/25/23/1010v1498405628941915977_s.jpg"
                    />
                    <ShopCell 
                        title="陕西省出发 司马迁祠、韩城古城一日"
                        subTitle="常规线路, 人文景观, 历史遗迹"
                        price="499"
                        leftImg="https://vi0.6rooms.com/live/2017/07/23/12/1010v1500785807518834834_s.jpg"
                    />
                </View>
            </PullView>
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
        width: 23,
        height: 23,
    },

    headerRight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    headerTouch: {
        height: 30
    },

    headerBtn: {
        flex: 1,
        width: 23,
        height: 23,
        marginRight: 15
    },

    iconBtn: {
        width: 22,
        height: 22,
    },

    tabView: {
        padding: 15,
    },

    tabText: {
        fontSize: 14,
    }
});
