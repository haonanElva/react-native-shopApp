import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Vibration
} from 'react-native';
 
import { QRScannerView } from 'ac-qrcode';
 
//默认应用的容器组件
export default class Screen extends React.Component {

    render() {
        return (

            <QRScannerView
                onScanResultReceived={this.barcodeReceived.bind(this)}

                renderTopBarView={() => this._renderTitleBar()}

                renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }

    _renderTitleBar(){
        return(
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            >这里添加标题</Text>
        );
    }

    _renderMenu() {
        return (
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            >这里添加底部菜单</Text>
        )
    }

    barcodeReceived(e) {
        Toast.show('Type: ' + e.type + '\nData: ' + e.data);
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
 