import React from 'react';
import {
  StyleSheet, 
  Text,
  View 
} from 'react-native';

// 获取设备宽高
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class TabGrad extends React.Component {
  render() {
    return (
      <View>
        <Text>
            tabGrad 
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
