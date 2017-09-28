/* 组件 cell */
import React from 'react';
import {
    StyleSheet, 
    Text,
    View,
    Image,
    Button,
} from 'react-native';

// 获取设备宽高
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class ShopCell extends React.Component {
    
    // props 传值，默认传的值
    static defaultProps = {  
        title: '', // biaoti
        subTitle: '' ,
        price: '',
        leftImg: ''
    }

    render() {
        return (
            <View style={styles.containerBtm}>
                <Image source={{uri: this.props.leftImg}} style={styles.imgSlide}/>
                <View style={styles.rightShop}>
                    <Text style={styles.titleShop}>{this.props.title}</Text>
                    <Text style={styles.wordOneShop}>{this.props.subTitle}</Text>
                    <Text style={styles.wordTwoShop}>活动价：
                        <Text style={styles.priceShop}>￥</Text>
                        <Text style={styles.priceNumShop}>{this.props.price}</Text>
                    </Text>
                    <View style={styles.payBtn}>
                        <Text style={{textAlign: 'center', lineHeight: 25, fontSize: 13, color: '#fff',fontWeight: '600'}}>立即抢购</Text>
                    </View>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    containerBtm: {
        backgroundColor: '#fff',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    imgSlide: {
        width: width * 0.23, height: width * 0.23,
        flex: 1,
        borderRadius: 10, marginTop: 12, marginLeft: 15, marginRight: 15,
    },
    rightShop: {
        width: width * 0.68,
        marginRight: 15, overflow: 'hidden',marginTop: 14,
    },
    titleShop: {
        fontSize: 15, color: '#333'
    },
    wordOneShop: {
        fontSize: 14, color: '#666', marginTop: 24
    },
    wordTwoShop: {
        fontSize: 14, color: '#666', marginTop: 8, marginBottom: 30
    },
    priceShop:{
        fontSize: 12, color: 'red',
    },
    priceNumShop:{
        fontSize: 20, color: 'red',
    },
    payBtn: {
        width: 76, height: 30, 
        position: 'absolute', right: 15, bottom: 14,backgroundColor: 'red', borderRadius: 30,overflow: 'hidden'
    },
    payBtnText: {

    }
});
