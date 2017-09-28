import React from 'react';
import {
    StyleSheet, 
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
    TextInput,
    ActionSheetIOS
} from 'react-native';

// navigator
import { StackNavigator } from 'react-navigation';

// 获取设备宽高
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var BUTTONS = [
  'Home',
  'Back',
  'Delete',
  'Cancel',
];
var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 3;

export default class Login extends React.Component {

    // 导航配置
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            header: null
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            passWord: ''
        };
    }

    getInitialState() {
        return {
          clicked: 'none',
        };
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <Image
                style={styles.container}
                source={{uri: 'http://haonan.zhushou.la/image/img/bgLogin.png'}} 
            >

                <TextInput style={styles.reginBtnName} placeholder="请输入用户名" 
                    placeholderTextColor="white"
                    maxLength="6"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />

                <TextInput style={styles.reginBtn} placeholder="请输入密码"
                    placeholderTextColor="white"
                    keyboardType="phone-pad"
                    maxLength="12"
                    secureTextEntry="true" // type  password
                    onChangeText={(passWord) => this.setState({passWord})}
                    value={this.state.passWord}
                />

                <TouchableOpacity
                    onPress={() => {this.loginIn()}}
                >
                    <View style={styles.moreBtn}>
                        <Text style={styles.textOneStyle}>Login Now</Text>
                    </View>
                </TouchableOpacity>
                        
               
                <View style={styles.bottomLogin}>
                    <Text 
                        onPress={this.showActionSheet}
                        style={styles.textTwo}>
                        Operation More
                    </Text>
                </View>
                
            </Image>
        );
    }


    showActionSheet() {
       
        
        ActionSheetIOS.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
        },
        (buttonIndex) => {
            alert(buttonIndex);
            if(buttonIndex == '0'){
               // _this.endClick();
                // _this.props.navigator.push(
                //     {
                //        component: Home, // 要跳转的版块
                //        title:'详情页'
                //     }
                // );

                navigate('Home')
            } else if(buttonIndex == '1'){
                //value = 'Choose';
            }
            
           
        });
    }

    // 登录跳转
    loginIn(){
        if(this.state.text != '' && this.state.passWord != ''){
            const { navigate } = this.props.navigation;
            navigate('Home')
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        width:null,
        height:null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        //resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',
    },
    moreBtn: {
        width: width * 0.9, height: 50, backgroundColor: 'rgba(255, 255, 255, .9)',
        overflow:' hidden',marginTop: 30,marginBottom: 15, borderRadius: 8
    },
    textOneStyle: {
        textAlign: 'center', lineHeight:50, fontSize: 17, color: '#333',fontWeight: '600',letterSpacing: 2,width: width * 0.9
    },
    reginBtnName: {
        width: width * 0.9, height: 50, borderWidth: 1, borderColor: '#fff',
        overflow:' hidden',marginTop: height * 0.35,marginBottom: 15, borderRadius: 8,
        color: '#fff', paddingLeft: 14,fontSize: 17, fontWeight: '600'
    },
    reginBtn: {
        width: width * 0.9, height: 50, borderWidth: 1, borderColor: '#fff',
        overflow:' hidden',marginTop: 35,marginBottom: 15, borderRadius: 8,
        color: '#fff', paddingLeft: 14,fontSize: 17, fontWeight: '600'
    },
    textTwo: {
        textAlign: 'center', lineHeight:48, fontSize: 17, color: '#fff',fontWeight: '600',width: width * 0.9
    },
    bottomLogin: {
        position: 'absolute', bottom: 20,
        flexDirection: 'row', justifyContent: 'space-around',
    },
});
