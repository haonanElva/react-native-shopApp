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

export default class CommonMineCell extends React.Component {
    
    // props 传值，默认传的值
    static defaultProps = {  
        title: '', // biaoti
        leftImg: '', // 左侧图标
        rightTitle: '',
        rightImg: ''
    }

    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>

                    {/**左边**/}
                    <View style={styles.leftStyle}>
                        <Image 
                            source={{uri: this.props.leftImg}} 
                            style={{width: 28, height: 28, borderRadius: 14}}>
                        </Image>
                        <Text style={{marginLeft: 6}}>{this.props.title}</Text>
                    </View>

                    {/**右边 **/}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        {/*右侧返回数据判断*/}
                        {this.renderRightImg()}
                        
                        <Image 
                            source={{uri: 'http://haonan.zhushou.la/image/home_arrow.png'}} 
                            style={{width: 10, height: 21, marginRight: 10}}>
                        </Image>
                    </View> 

                </View>
            </TouchableOpacity>
        );
    }

    // 右侧判断
    renderRightImg() {
        if(this.props.rightTitle){ // 右侧文字
            return (
                <Text style={{color: 'gray', marginRight: 3, fontSize: 13}}>{this.props.rightTitle}</Text>
            )
        } else {  // 右侧是图标
            return (
                <Image 
                    source={{uri: this.props.rightImg}} 
                    style={{width: 30, height: 16, marginRight: 8}}>
                </Image>
            )
        }
    }


}


const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#fff',
        borderBottomColor: '#f8f8fb',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    }
});
