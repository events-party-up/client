import React, { Component } from 'react';
import { Image } from 'react-native'
import { Container, Header, View, DeckSwiper,Button, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import Logo from './Logo'


const cards = [
  {
    text: 'WELCOME TO DRIVELY!',
    name: 'One',
    image: require('../images/pwa-lighthouse.png'),
    next: false,
  },  {
      text: 'Steering Wheel and Calibrate',
      name: 'Before you can use this app, you must calibrate this device to your steering wheel ',
      image: require('../images/pwa-engaging.png'),
      next: false
    },
    {
      text: 'Swipe to start using this App',
      name: 'Enter',
      image: require('../images/pwa-reliable.png'),
      next: true
    }
];

class Welcome extends Component {
  render() {
    return (
      <Container>
         
           <DeckSwiper
             dataSource={cards}
             renderItem={item =>
               <Card style={{ backgroundColor: '#494E6B' }}>
                 <CardItem cardBody style={{ backgroundColor: '#494E6B' }}>
                   <Image style={{ height: 400, flex: 1 }} source={item.image} />
                 </CardItem>
                
                 <CardItem
                   style={{ backgroundColor: '#494E6B' }}>
                   <Left>
                   <Icon name="heart" style={{ color: 'white' }} />
                   <Text style={{ color: 'white' }}>{item.name}</Text>
                   </Left>
                 </CardItem>
                 <CardItem cardBody style={{ backgroundColor: '#494E6B' }}>
                   <View style={{ height: 300, flex: 1, backgroundColor: '#494E6B' }}>
                     <Left>
                     <Text style={{ color: 'white' }}>{item.text}</Text>
                     <Logo></Logo>

                     <Text 
                       style={{ color: 'white' }}
                       note>NativeBase</Text>
                     {item.next ? <Button warning><Text> Warning </Text></Button> : null}
                   </Left>
                   </View>
                 </CardItem>
            
               </Card>
             }
           />
         
       </Container>
    );
  }
}

export default Welcome;