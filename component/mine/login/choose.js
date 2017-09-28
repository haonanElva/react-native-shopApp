import React from 'react';
import {
    StyleSheet, 
    Text,
    View,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';

// navigator
import { StackNavigator } from 'react-navigation';

// 获取设备宽高
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class Choose extends React.Component {

    // 导航配置
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            header: null
        };
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Image
                style={styles.container}
                source={{uri: 'http://haonan.zhushou.la/image/img/bgLogin.png'}} 
            >

                <TouchableOpacity
                    onPress={() => navigate('Detail', {
                            name: 'Detail', // 跳转模块名称
                            title:'我是跳转过去下个页面要带的参数', // 跳转参数
                        })
                    }
                >
                    <View style={styles.moreBtn}>
                        <Text style={styles.textOneStyle}>Join Now</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate('Login', {
                            name: 'Login', // 跳转模块名称
                            title:'我是跳转过去下个页面要带的参数', // 跳转参数
                        })
                    }
                >
                    <View style={styles.reginBtn}>
                        <Text style={styles.textTwo}>Alerady Have An Account? Sing In</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.bottomLogin}>
                    <TouchableOpacity
                        onPress={() => navigate('Detail', {
                                name: 'Detail', // 跳转模块名称
                                title:'我是跳转过去下个页面要带的参数', // 跳转参数
                            })
                        }
                    >
                        <Text style={styles.textTwo}>Know More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigate('Home')
                        }
                    >
                        <Text style={styles.textTwo}>Back</Text>
                    </TouchableOpacity>
                </View>
                
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
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
        overflow:' hidden',marginTop: 255,marginBottom: 15, borderRadius: 8
    },
    textOneStyle: {
        textAlign: 'center', lineHeight:50, fontSize: 17, color: '#333',fontWeight: '600',letterSpacing: 2,width: width * 0.9
    },
    reginBtn: {
        width: width * 0.9, height: 50, borderWidth: 1, borderColor: '#fff',
        overflow:' hidden',marginTop: 35,marginBottom: 15, borderRadius: 8
    },
    textTwo: {
        textAlign: 'center', lineHeight:48, fontSize: 17, color: '#fff',fontWeight: '600',width: width * 0.9
    },
    bottomLogin: {
        position: 'absolute', bottom: 20,
        flexDirection: 'row', justifyContent: 'space-around',
    },
});
