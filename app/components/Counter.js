import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 80}}>{counter}</Text>
          <View style={{width: 100, height: 50}}>
              <Button onPress={increment} title="Increment" color="#841584" />
          </View>
          <View style={{width: 100, height: 50}}>
              <Button onPress={decrement} title="Decrement" color="#841584" />
          </View>
      </View>
    );
  }
}
