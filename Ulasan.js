import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input,Tab,Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';

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
        <Content>
        <ListItem >
        <Text style={{marginLeft:'30%', fontSize:20, fontWeight:'bold'}} >Ulasan Anda</Text>
        </ListItem>
          <Item regular>
            <Input placeholder='Judul' style={{fontSize:15}} placeholderTextColor='grey' />
          </Item>
          <Item regular>
            <Input placeholder='Nama' style={{fontSize:15}} placeholderTextColor='grey' />
          </Item>
          <Item regular>
            <Input placeholder='Ulasan' style={{fontSize:15}} placeholderTextColor='grey' />
          </Item>
          <View style={{alignItems:'center', marginTop:'2%', marginBottom:'1%'}}>
                <Text style={{color:'orange', fontSize:20}} onPress={()=>navigate('Dashboard')} >Kirim</Text>
         </View>     
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('mari', () => mari);