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
  Dimensions,
  StatusBar,
} from 'react-native';
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input,Tab,Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
var{width,height}=Dimensions.get('window');

export default class mm extends Component {
  static navigationOptions = {
      header : null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (      
       <Container style={{backgroundColor:'white'}}>
        <View style={{width : width, height : 200, backgroundColor:'#e6e6e6'}}>
          <Image source={require('./profile.png')} style={{marginTop:'4%',  alignSelf:'center'}} />
          <Text style={{alignSelf:'center', marginTop:'1%', fontWeight:'bold', fontSize:20}} >User Profile</Text>
          <Button warning onPress={()=>navigate('Choose')} style={{alignSelf:'center', width:100, height:25}}>
          <Text style={{color:'white', fontSize:15, alignSelf:'center'}} >        LOGIN</Text>
        </Button>
        </View>
        <Content>
        <ListItem onPress={()=>navigate('Pengaturan')}>
          <Icon name='ios-build-outline' style={{color:'black', marginRight:'2%'}} />
          <Text onPress={()=>navigate('Pengaturan')}>Pengaturan</Text>
        </ListItem>
        <ListItem>
          <Icon name='ios-notifications-outline' style={{color:'black', marginRight:'2%'}} />
          <Text>Pemberitahuan</Text>
        </ListItem>
        <ListItem>
          <Icon name='ios-help-circle-outline' style={{color:'black', marginRight:'2%'}} />
          <Text>Bantuan</Text>
        </ListItem>
        <ListItem>
          <Icon name='ios-information-circle-outline' style={{color:'black', marginRight:'2%'}} />
          <Text>Tentang</Text>
        </ListItem>


       
        </Content>
        
        
        <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
            <Button vertical onPress={()=>navigate('Dashboard') }>
              <Image source={require('./logofoot.png')}/>
              <Text style={{color:'#F07F09'}}>Home</Text>
            </Button>
            <Button vertical onPress={()=>navigate('Favorit')} >
              <Icon name='ios-restaurant-outline' style={{fontSize:32, color:'grey'}} />
              <Text style={{color:'grey'}}>Favorit</Text>
            </Button>
            <Button vertical onPress={()=>navigate('History')}>
              <Icon name='ios-list-box-outline' style={{fontSize:32, color:'grey'}} />
              <Text style={{color:'grey'}}>History</Text>
            </Button>
            <Button vertical onPress={()=>navigate('Profile')} style={{backgroundColor:'#e6e6e6'}} >
              <Icon name='ios-person-outline' style={{fontSize:32, color:'grey'}} />
              <Text style={{color:'grey'}}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>

        </Container>
    );
  }
}

AppRegistry.registerComponent('mm', () => mm);
