import React from 'react';
import {
    StyleSheet, 
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

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

    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
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
            </ScrollView>
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
