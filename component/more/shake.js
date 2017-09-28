import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Vibration
} from 'react-native';
 
 
//默认应用的容器组件
export default class ShakeMode extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            title: '震动手机'
        };
    };

   //渲染
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item} onPress={this.vibration.bind(this)}>点击震动</Text>
            </View>
        );
    }
 
    //点击震动
    vibration() {
        Vibration.vibrate();
    }
}
 
//样式定义
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:25
    },
    item:{
        margin:15,
        height:30,
        borderWidth:1,
        padding:6,
        borderColor:'#ddd',
        textAlign:'center'
    },
});
 