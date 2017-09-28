/* 组件 cell */
import React from 'react';
import {
    StyleSheet, 
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class MineThreeTab extends React.Component {

    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>

                    <View styles={{justifyContent: 'center',flexDirection: 'column', borderRightColor: '#fff', borderRightWidth: 0.5}}>
                        <Text style={{foontSize: 17, color: '#fff',marginBottom: 5,marginLeft:7}}>100</Text>
                        <Text style={{foontSize: 15, color: '#fff'}}>优惠券</Text>
                    </View>

                    <View styles={{justifyContent: 'center',flexDirection: 'column', borderRightColor: '#fff', borderRightWidth: 0.5}}>
                        <Text style={{foontSize: 17, color: '#fff',marginBottom: 5,marginLeft:3}}>120</Text>
                        <Text style={{foontSize: 15, color: '#fff'}}>评论</Text>
                    </View>

                    <View styles={{justifyContent: 'center',flexDirection: 'column', borderRightColor: '#fff', borderRightWidth: 0.5}}>
                        <Text style={{foontSize: 17, color: '#fff',marginBottom: 5,marginLeft:4}}>111</Text>
                        <Text style={{foontSize: 15, color: '#fff'}}>收藏</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        height: 54,
        backgroundColor: 'rgba(255, 96, 0, .6)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    leftStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    }
});
