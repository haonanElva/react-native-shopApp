import React from 'react';
import {
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

/**
* 导入外部组件
* Main 是主要框架
*/

import Main from './component/main/main';
 
export default class App extends React.Component {
  render() {
    return (
      <Main />
    );
  }
}
