/* 组件 cell */
import React from 'react';
import {
    StyleSheet, 
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';


// 获取设备宽高
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class BgBanner extends React.Component {
    
    // props 传值，默认传的值
    static defaultProps = {  
        title: '', // biaoti
    }
 
    render() {
        return (
            <View style={{backgroundColor: '#fff',  marginTop: 14}}>
                <Image 
                    resizeMode="contain"
                    style={styles.commonTitlteStyle}
                    source={{uri: 'http://haonan.zhushou.la/image/title2.png'}} 
                />
                <View style={styles.imageListS}>
                    <View style={styles.imageListBoxStyle}>
                        <Text style={[styles.bdTextOne, {color: '#e1138f'}]}>爸妈之旅</Text>
                        <Text style={styles.bdTextComOne}>
                            父母一起走遍
                            全世界
                        </Text>
                        <Image 
                            resizeMode="contain"
                            style={styles.commonBottomStyle}
                            source={{uri: 'http://mobile.bkrtrip.com/view/other/style/zt2.0/img/9.jpg'}} 
                        />
                    </View>
                    <View style={styles.imageListBoxStyle}>
                        <Text style={[styles.bdTextOne, {color: '#2526bf'}]}>亲子游</Text>
                        <Text style={styles.bdTextComOne}>宝贝去哪里</Text>
                        <Image 
                            resizeMode="contain"
                            style={styles.commonBottomStyle}
                            source={{uri: 'http://mobile.bkrtrip.com/view/other/style/zt2.0/img/10.jpg'}} 
                        />
                    </View>
                    <View style={styles.imageListBoxStyle}>
                        <Text style={[styles.bdTextOne, {color: '#e1138f'}]}>蜜月之旅</Text>
                        <Text style={styles.bdTextComOne}>陪她出去转吧</Text>
                        <Image 
                            resizeMode="contain"
                            style={styles.commonBottomStyle}
                            source={{uri: 'http://mobile.bkrtrip.com/view/other/style/zt2.0/img/11.jpg'}} 
                        />
                    </View>
                </View>

                <View style={styles.commonBox}>
                    <View style={styles.imageListS}>
                        <View style={styles.imageListBoxStyleTwo}>
                            <Text style={[styles.bdTextOne, {color: '#e1138f'}]}>独立夏令营</Text>
                            <Text style={styles.bdTextComOne}>
                                快乐找回童年
                            </Text>
                            <Image 
                                resizeMode="contain"
                                style={styles.commonBottomStyleTwo}
                                source={{uri: 'http://mobile.bkrtrip.com/view/other/style/zt2.0/img/12.jpg'}} 
                            />
                        </View>
                        <View style={styles.imageListBoxStyleTwo}>
                            <Text style={[styles.bdTextOne, {color: '#2526bf'}]}>纯玩</Text>
                            <Text style={styles.bdTextComOne}>快乐为大</Text>
                            <Image 
                                resizeMode="contain"
                                style={styles.commonBottomStyleTwo}
                                source={{uri: 'http://mobile.bkrtrip.com/view/other/style/zt2.0/img/13.jpg'}} 
                            />
                        </View>
                    </View>
                    <View style={styles.imageListS}>
                        <View style={styles.imageListBoxStyle}>
                            <Text style={[styles.bdTextOne, {color: '#e1138f'}]}>环球游学</Text>
                            <Text style={styles.bdTextComOne}>成长之旅</Text>
                            <Image 
                                resizeMode="contain"
                                style={styles.commonBottomStyle}
                                source={{uri: 'http://mobile.bkrtrip.com/view/other/style/zt2.0/img/14.jpg'}} 
                            />
                        </View>
                        <View style={styles.imageListBoxStyle}>
                            <Text style={[styles.bdTextOne, {color: '#2526bf'}]}>自由行</Text>
                            <Text style={styles.bdTextComOne}>说走就走</Text>
                            <Image 
                                resizeMode="contain"
                                style={styles.commonBottomStyle}
                                source={{uri: 'http://mobile.bkrtrip.com/view/other/style/zt2.0/img/15.jpg'}} 
                            />
                        </View>
                        <View style={styles.imageListBoxStyle}>
                            <Text style={[styles.bdTextOne, {color: '#e1138f'}]}>健康之旅</Text>
                            <Text style={styles.bdTextComOne}>纯天然氧吧</Text>
                            <Image 
                                resizeMode="contain"
                                style={styles.commonBottomStyle}
                                source={{uri: 'http://mobile.bkrtrip.com/view/other/style/zt2.0/img/16.jpg'}} 
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    commonBox:{
        backgroundColor: '#fff',
    },
    commonTitlteStyle: {
        width: width * 1, height: 40,
        marginBottom: 8, marginTop: 8
    },
    imageListS: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 110,
        flex: 1,
    },
    imageListBoxStyle: {
        borderRightWidth: 0.5,borderRightColor: '#eceaea',
        borderBottomWidth: 0.5,borderBottomColor: '#eceaea',
        width: width * 0.333,
    },
    imageListBoxStyleTwo: {
        borderRightWidth: 0.5,borderRightColor: '#eceaea',
        borderBottomWidth: 0.5,borderBottomColor: '#eceaea',
        width: width * 0.5,
    },
    commonBottomStyle: {
        bottom: 1, right: 1, width: 76, height: 60,
        position: 'absolute',
    },
    commonBottomStyleTwo: {
        bottom: -6, right: 1, width: 120, height: 80,
        position: 'absolute',
    },

    bdTextOne: {
        fontSize: 15,marginLeft: 6,fontWeight: '600',marginTop: 7
    },

    bdTextComOne: {
        fontSize: 12,color: '#999',marginLeft: 6,marginTop: 10,
    },
});
