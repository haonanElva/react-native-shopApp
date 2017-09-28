/* 组件 cell */
import React from 'react';
import {
    StyleSheet, 
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class MineTab extends React.Component {
    
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>

                    <View>
                        <Image 
                            source={{uri: 'http://haonan.zhushou.la/image/order1.png'}} 
                            style={{width: 30, height: 30, marginBottom: 7,marginLeft: 6}}>
                        </Image>
                        <Text style={{foontSize: 15, color: '#333'}}>待付款</Text>
                    </View>

                    <View>
                        <Image 
                            source={{uri: 'http://haonan.zhushou.la/image/order2.png'}} 
                            style={{width: 35, height: 30, marginBottom: 7,marginLeft: 4}}>
                        </Image>
                        <Text style={{foontSize: 15, color: '#333'}}>待使用</Text>
                    </View>

                    <View>
                        <Image 
                            source={{uri: 'http://haonan.zhushou.la/image/order3.png'}} 
                            style={{width: 30, height: 30, marginBottom: 7,marginLeft: 5}}>
                        </Image>
                        <Text style={{foontSize: 15, color: '#333'}}>待评价</Text>
                    </View>

                    <View>
                        <Image 
                            source={{uri: 'http://haonan.zhushou.la/image/order4.png'}} 
                            style={{width: 30, height: 30, marginBottom: 7,marginLeft: 15}}>
                        </Image>
                        <Text style={{foontSize: 15, color: '#333'}}>退款/售后</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});
