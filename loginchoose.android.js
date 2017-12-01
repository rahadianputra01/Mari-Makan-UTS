/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input,Tab,Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
import Swiper from 'react-native-swiper';
var{width,height}=Dimensions.get('window');
var swiper = React.createClass;

export default class mari extends Component {
  static navigationOptions = {
      header : null
    };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Text onPress={()=>navigate('Dashboard')} style={{position:'absolute', zIndex:1, color:'orange', marginLeft:'2%', marginTop:'1%', fontWeight:'bold'}} >Skip Login</Text>
         <View style={{height:height}}>
         <Swiper style={styles.wrapper}>
          <View>
            <Image source={require('./swiper1.jpg')} style={{width:width, height:height}} />
            <View style={{position:'absolute', zIndex:1, alignItems:'center'}}>
              <Text style={{marginTop:'12%', marginLeft:'13%', alignItems:'center', marginRight:'2%', fontSize:20, color:'#fff'}}>Menikmati Makanan adalah Sebuah Anugrah dan Momen Berharga</Text>
            </View>
          </View>
          <View>
            <Image source={require('./swiper2.jpg')} style={{width:width, height:height}} />
            <View style={{position:'absolute', zIndex:1,alignItems:'center'}}>
              <Text style={{marginTop:'25%', marginLeft:'23%', alignItems:'center', marginRight:'2%', fontSize:20, color:'#fff'}} >Makanan adalah Hidup</Text>
              </View>
          </View>
          <View>
            <Image source={require('./swiper3.jpg')} style={{width:width, height:height}} />
            <View style={{position:'absolute', zIndex:1, alignItems:'center'}}>
              <Text style={{marginTop:'20%', marginLeft:'17%', fontSize:20, color:'#fff'}} >Maka Tentukanlah Makanan Sesuai Dengan Keinginanmu</Text>
              </View>
          </View>
          <View>      
            <Image style={{width:width, height:height}} source={require('./food5.jpg')}/>
            <View style={{width:width, height:height, position:'absolute'}}>
              <Image style={{alignSelf:'center', marginTop:'30%'}} source={require('./logo3.png')}/>
              <View style={{flexDirection: 'row', marginTop:'80%', marginBottom:'1%'}}>
              <Button light onPress={()=>navigate('Signup')} style={{marginLeft:'7%'}} >
                <Text style={{color:'orange', fontSize:20}} >          Daftar          </Text>
              </Button>
              <Button warning onPress={()=>navigate('Login')} style={{marginLeft:'1%', widht:50, marginRight:'2%'}}>
              <Text style={{color:'white', fontSize:20, alignSelf:'center'}} >          Log In          </Text>
              </Button>
            </View>
          </View>
         </View>
        </Swiper>
        </View>
      </Container>

    );
  }
}
var styles = StyleSheet.create({
  wrapper: {
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems:'center'
  }
})

AppRegistry.registerComponent('mm', () => mm);
