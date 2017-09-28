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

export default class CommonCell extends React.Component {
    
    // props 传值，默认传的值
    static defaultProps = {  
        title: '', // biaoti
        subTitle: '', 
        pic: '',
        id: ''
    }
 
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.nextClick}
            >
                <View style={styles.tapOne}>
                    <Text style={styles.textOne}>{this.props.title}</Text>
                    <Text style={styles.textTwo}>{this.props.subTitle}</Text>
                    {/**** 图片数据不加括号 ****/}
                    <Image 
                        resizeMode="contain"
                        style={styles.tabPic}
                        source={{uri: this.props.pic}} 
                    />
                </View>
            </TouchableOpacity>
        );
    }

}


const styles = StyleSheet.create({
    tapOne: {
        width: width * 0.3333,
        borderRightWidth: 0.5,borderRightColor: '#eceaea',
        borderBottomWidth: 0.5,borderBottomColor: '#eceaea',
        justifyContent: 'center', overflow: 'hidden',
    },
    tapTwo: {
        width: width * 0.3333,
        borderBottomWidth: 0.5,borderBottomColor: '#eceaea',
    },
    tabPic: {
        width: width * 0.26, height: 170,
        marginLeft: width * 0.0376
    },
    textOne: {
        width: width * 0.332, textAlign: 'center',
        fontSize: 15, color: '#333', fontWeight: '600',
        marginTop: 10,
    },
    textTwo: {
        width: width * 0.332, textAlign: 'center',
        fontSize: 13, color: '#40bae2',marginTop: 6,
    },
});
