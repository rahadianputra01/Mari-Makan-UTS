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
var{width,height}=Dimensions.get('window');

export default class mari extends Component {
  constructor(props){
    super(props);
    this.state=({
      alert : false
    })
  }
  render() {
    const { navigate } = this.props.navigation;
    return (      
       <Container style={{backgroundColor:'white'}}>
          <View style={{width : width, height : 200, backgroundColor:'#e6e6e6'}}>
          <Image source={require('./sizz.jpg')} style={{width:width, height:200}} />
          </View>
        <Content>
        <ListItem>
          <Body>
          <Text style={{fontWeight:'bold', fontSize:18}}>SizzleWraps</Text>
          <Text note>Mexican, Cafe, Fast Food, Vegetarian</Text>
          </Body>
        </ListItem>

        <ListItem>
          <Body>
          <Text style={{fontWeight:'bold', fontSize:18}}>Informasi Restoran</Text>
          <View style={{flexDirection:'row'}} >
            <Icon name='md-time' style={{color:'orange'}} />
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2%'}} >10.00 - 23.00 Wita</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Icon name='ios-call' style={{color:'orange'}} />
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2.5%'}} >081237874469</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Icon name='ios-navigate' style={{color:'orange'}} />
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2%'}} >Jalan Raya Tanah Lot Munggu, Mengwi</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Icon name='md-mail' style={{color:'orange'}} />          
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2%'}} >sizzlewraps.rest.co.id</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Icon name='ios-pricetags' style={{color:'orange'}} />          
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2%'}} >10k - 120k</Text>
          </View>
          </Body>
        </ListItem>
        <ListItem>
          <Body>
          <Text style={{fontWeight:'bold', fontSize:18}}>Ulasan Restoran</Text>
          <View style={{flexDirection:'row'}}>
            <Icon name='ios-create-outline' style={{color:'orange'}} onPress={()=>navigate('Ulasan')} />
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2%', color:'orange'}} onPress={()=>navigate('Ulasan')} >Buat Ulasan</Text>
          </View>
          </Body>
        </ListItem>
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
            <Button vertical onPress={()=>navigate('Dashboard') } >
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


AppRegistry.registerComponent('mari', () => mari);
