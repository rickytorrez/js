import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0
    }
  }

  render(){
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <View style={ styles.header }>
          <Text style={ styles.appTitle }>Book Worm</Text>
        </View>
        <View style={{ flex: 1 }}></View>
        <View style={ styles.footer }>
          <View style={ styles.tabButtons }>
            <Text style={ styles.tabText }>Total</Text>
            <Text>{ this.state.totalCount }</Text>
          </View>
          <View style={ styles.tabButtons }>
            <Text style={ styles.tabText }>Reading</Text>
            <Text>{ this.state.readingCount }</Text>
          </View>
          <View style={ styles.tabButtons }>
            <Text style={ styles.tabText }>Read</Text>
            <Text>{ this.state.readCount }</Text>
          </View>
        </View>
        <SafeAreaView />
      </View>
    );
  };
};

export default App;

const styles = StyleSheet.create({
  header: {
    height: 70, 
    borderBottomWidth: 0.5, 
    borderBottomColor: '#E9E9E9', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  appTitle: {
    fontSize: 24
  },
  footer: {
    height: 70, 
    borderTopWidth: 0.5, 
    borderTopColor: '#E9E9E9',
    flexDirection: 'row',
  },
  tabButtons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    fontSize: 20
  }
});