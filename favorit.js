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
        <Content>
        <ListItem>
        <Text style={{marginLeft:'40%', fontSize:20, fontWeight:'bold'}} >Favorit</Text>
        </ListItem>
        <ListItem onPress={()=>navigate('RestoranInfo') }>
          <Thumbnail style={{ marginRight:'2%'}} source={require('./fotomakanan1.png')}/>
          <Body style={{marginRight:'2%'}}>
            <Text style={{fontWeight:'bold', fontSize:18}} >Kober Mie Setan</Text>
            <Text note>1997 Reviews</Text>
            <Text note>Jalan Bedugul No. 37, Denpasar 80224, Indonesia</Text>
          </Body>
        </ListItem>
        

       
        </Content>
        
        
        <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
            <Button vertical onPress={()=>navigate('Dashboard') }>
              <Image source={require('./logofoot.png')}/>
              <Text style={{color:'#F07F09'}}>Home</Text>
            </Button>
            <Button vertical onPress={()=>navigate('Favorit')} style={{backgroundColor:'#e6e6e6'}}  >
              <Icon name='ios-restaurant-outline' style={{fontSize:32, color:'grey'}} />
              <Text style={{color:'grey'}}>Favorit</Text>
            </Button>
            <Button vertical onPress={()=>navigate('History')}>
              <Icon name='ios-list-box-outline' style={{fontSize:32, color:'grey'}} />
              <Text style={{color:'grey'}}>History</Text>
            </Button>
            <Button vertical onPress={()=>navigate('Profile') } >
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
