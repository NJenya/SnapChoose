import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class Dashboard extends PureComponent {
  render() {
    return (
      <View>
        <Text style={{fontSize: 30, color: '#000', textAlign: 'center'}}>
          Dashboard
        </Text>
      </View>
    );
  }
}

export default Dashboard;
