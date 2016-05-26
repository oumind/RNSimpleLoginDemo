/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
/*global console*/
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Alert,
  AppRegistry,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Platform
} from 'react-native';

import dismissKeyboard from 'react-native-dismiss-keyboard';

class RNSimpleLoginDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'zhang',
      password: '',
      success: -1
    }

    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton() {
    if (this.state.password === '123456') {
      this.setState({success: 1});
    } else {
      this.setState({success: 0});
      Alert.alert(
        '提示',
        '密码错了啊啊啊',
        [
          {text: '取消', onPress: () => console.log('Cancel Pressed')},
          {text: '确定', onPress: () => console.log('OK Pressed')}
        ]
      )
    }

    dismissKeyboard();
  }

  render() {

    return (
       <View style={styles.container}>
        <View style={styles.inlineContainer}>
          <Icon name="user" size={14}/>
          <Text>用户名:</Text>
        </View>
        <TextInput
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username}
        />

        <View style={[styles.inlineContainer, {marginTop: 20}]}>
          <Icon name="key" size={14}/>
          <Text>密码</Text>
        </View>
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
        />
        <TouchableHighlight onPress={this.onPressButton} style={styles.button}>
          <View style={[styles.inlineContainer, {alignSelf: 'center'}]}>
            <Icon name="sign-in" size={14}/>
            <Text style={styles.buttonText}>登录</Text>
          </View>
        </TouchableHighlight>

         {(() => {
              if (this.state.success === 1) {
                return (
                  <View style={{marginTop: 100}}>
                    <Text>{this.state.username} 登录成功</Text>
                    <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                      resizeMode={'contain'}
                      style={{width:100,height: 50}}/>
                  </View>
                )
              } else if (this.state.success === 0){
                return (
                  <View style={{marginTop: 100}}>
                    <Text>{this.state.username} 登录失败</Text>
                  </View>
                )
              } else {
                return (
                  <View></View>
                )
              }
         })()}

         <Text style={{marginTop: 50}}>
           系统信息: {Platform.OS} {Platform.Version}
         </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inlineContainer : {
    flexDirection:'row',
    flexWrap:'wrap'
  },
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('RNSimpleLoginDemo', () => RNSimpleLoginDemo);
