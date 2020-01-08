import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import BookCount from './components/BookCount';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0
    };
  };

  render(){
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <View style={ styles.header }>
          <Text style={ styles.appTitle }>Book Worm</Text>
        </View>
        <View style={{ flex: 1 }}></View>
        <View style={ styles.footer }>
          <BookCount 
            title='Total'
            count={ this.state.totalCount }/>
          <BookCount 
            title='Reading'
            count={ this.state.readingCount }/>
          <BookCount 
            title='Read'
            count={ this.state.readCount }/>        
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