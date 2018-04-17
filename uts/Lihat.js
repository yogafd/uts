import React from 'react';
import { StyleSheet, Text,TouchableHighlight, View, Button, TextInput,FlatList, List, ListItem } from 'react-native';


export default class Lihat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    };
}

  componentDidMount() {
      const url = 'http://www.gusnando.com/mobile/yoga/daftarpertandingan.php';
       this.setState({ loading: true });
      fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("comp");
        console.log(responseJson);
        this.setState({
          data: responseJson,
          error: responseJson.error || null,
          loading: false,
          refreshing: false
        });
      }
    );
  }
  render() {
    return (
        <FlatList
          data={this.state.data}
          renderItem={({ item }) =>
            <View style={styles.ListItem}>
              <Text style={styles.ListFirst}>{item.pvp}</Text>
              <Text>{item.tgl}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.ListFirst}>hasil:{'\t'}</Text>
                <Text style={styles.ListFirst}>{item.status}</Text>
              </View>
            </View>
        }
        />
    );
  }
}


const styles = StyleSheet.create({
    Header: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#64B5F6',
    },
    TextHeader: {
        fontSize: 30
    },
    ListItem: {
        backgroundColor: 'silver',
        marginTop: 5,
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    ListFirst: {
      fontSize: 20
    }

  });
