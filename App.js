import React from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Lihat from './uts/Lihat';
import Mulai from './uts/Mulai';
import Statistik from './uts/Statistik';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
        <Text>Home</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <View style={{ marginTop: 150 }}>
            <Button
              title="Tambah"
              onPress={() => this.props.navigation.navigate('Mulai')}
            />
          </View>
          <View>
            <Button
              title="Lihat"
              onPress={() => this.props.navigation.navigate('Lihat')}
            />
          </View>
          <View style={{ marginBottom: 200 }}>
            <Button
              title="Statistik"
              onPress={() => this.props.navigation.navigate('Statistik')}
            />
          </View>
        </View>
      </View>
    );
  }
}

class LihatScreen extends React.Component {
  render() {
    return (
      <Lihat />
    );
  }
}

class MulaiScreen extends React.Component {
  render() {
    return (
      <Mulai />
    );
  }
}

class StatistikScreen extends React.Component {
  render() {
    return (
      <Statistik />
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Mulai: {
      screen: MulaiScreen,
    },
    Lihat: {
      screen: LihatScreen,
    },
    Statistik: {
      screen: StatistikScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
