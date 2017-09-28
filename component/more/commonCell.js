/* 组件 cell */
import React from 'react';
import {
    StyleSheet, 
    Text,
    View,
    Image,
    TouchableOpacity,
    Switch,
} from 'react-native';

export default class CommonCell extends React.Component {
    
    // props 传值，默认传的值
    static defaultProps = {  
        title: '', // biaoti
        isSwitch: false, // 是否展示开关
        rightTitle: '' 
    }

    constructor(props) {  
        super(props);  
        this.state = {  
            ison: false,  
        };  
    }  
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.nextClick}
            >
                <View style={styles.container}>

                    {/**左边**/}
                    <Text style={{marginLeft: 10}}>{this.props.title}</Text>

                    {/**右边 返回什么需要判断 **/}
                    {this.renderRightView()}

                </View>
            </TouchableOpacity>
        );
    }

    // Cell 右侧现实的内容
    renderRightView() {
        // 判断
        if(this.props.isSwitch) { // true
            return (
                <Switch 
                    style={{marginRight: 10}}
                    value={this.state.isOn == true}
                    onValueChange={() => {
                        this.setState({
                            ison: !this.state.isOn
                        })
                    }}
                />
            )
        } else { // 右边箭头
            return (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {/** 右侧有文字的 **/}
                    <Text style={{color: 'gray', marginRight: 3}}>{this.props.rightTitle}</Text>
                    <Image 
                        source={{uri: 'http://haonan.zhushou.la/image/home_arrow.png'}} 
                        style={{width: 10, height: 21, marginRight: 10}}>
                    </Image>
                </View> 
            )
        }
    }

}


const styles = StyleSheet.create({
    container: {
        height: 44,
        backgroundColor: '#fff',
        borderBottomColor: '#f8f8fb',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
