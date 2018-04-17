import React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Alert } from 'react-native';


export default class Mulai extends React.Component {
  constructor() {
        super();
        this.state = {
          pvp: '',
          status: '',
          tgl: '',
          ActivityIndicator_Loading: false,
        };
    }

    submitData = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://www.gusnando.com/mobile/yoga/tambahpertandingan.php',
            {
                method: 'POST',
                headers:
                {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  pvp: this.state.pvp,
                  status: this.state.status,
                  tgl: this.state.tgl,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                Alert.alert('SUCESS', responseJsonFromServer);
                this.setState(
                {
                  pvp: '',
                  status: '',
                  tgl: '',
                  ActivityIndicator_Loading: false
                });
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading: false });
            });
        });
    }

    render() {
      return (
        <View style={styles.containerMain}>
          <TextInput
              placeholder="Masukan Pertandingan"
              onChangeText={(pvp) => this.setState({ pvp })}
              value={this.state.pvp}
          />
          <TextInput
              placeholder="Masukan Status"
              onChangeText={(status) => this.setState({ status })}
              value={this.state.status}
          />
          <TextInput
              placeholder="Masukan Tanggal"
              onChangeText={(tgl) => this.setState({ tgl })}
              value={this.state.tgl}
          />
          <Button
            title="Tambah"
            onPress={this.submitData}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
	containerMain: {
    flex: 1
  }
});
