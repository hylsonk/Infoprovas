import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import MainStyle from '../styles/MainStyle'

export default class Main extends Component {
  render(){
    return(
      <View>
        <Text style={MainStyle.p}>Oi, você está na Main</Text>
      </View>
    );
  }
}
