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
  render() {
    const { navigate } = this.props.navigation;
    return (      
          <Container>
        <Content>
          <Text style={{alignSelf:'center', color:'black', marginTop:'5%'}} >Daftar</Text>
            <Item stackedLabel style={{marginTop:'5%', height:70}}>
              <Label>EMAIL</Label>
              <Input placeholder="Masukkan alamat email kamu" style={{fontSize:15}} />
            </Item>
            <Item stackedLabel style={{marginTop:'2%', height:70}}>
              <Label>Nomor Telepon</Label>
              <Input placeholder="Masukkan nomor telepon aktif" style={{fontSize:15}}/>
            </Item>
            <Item stackedLabel style={{marginTop:'2%', height:70}}>
              <Label>PASSWORD</Label>
              <Input placeholder="Minimal 8 karakter" style={{fontSize:15}} secureTextEntry={true} />
            </Item>
            <Item stackedLabel style={{marginTop:'2%', height:70}}>
              <Label>CONFIRM PASSWORD</Label>
              <Input placeholder="Ulangi masukkan password" style={{fontSize:15}} secureTextEntry={true} />
            </Item>
            <Button block light onPress={()=>navigate('Dashboard')}  style={{marginTop:'5%'}}>
            <Text>Daftar</Text>
          </Button>
          <Text style={{alignSelf:'center', justifyContent:'center', marginLeft:'2%', fontSize:12, marginTop:'5%'}}>Dengan mengeklik Daftar, maka Anda setuju dengan Ketentuan kami dan bahwa Anda sudah membaca Kebijakan Data kami, termasuk Penggunaan cookie kami.</Text>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('mari', () => mari);