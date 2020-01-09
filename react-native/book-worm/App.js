import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity,
  TextInput 
} from 'react-native';

import BookCount from './components/BookCount';
import { Ionicons } from '@expo/vector-icons';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
      isAddNewBookVisible: false
    };
  };

  showAddNewBook = () => {
    this.setState({ isAddNewBookVisible: true });
  };

  hideAddNewBook = () => {
    this.setState({ isAddNewBookVisible: false });
  };

  render(){
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />

        <View style={ styles.header }>
          <Text style={ styles.appTitle }>Book Worm</Text>
        </View>

        <View style={{ flex: 1 }}>
          { this.state.isAddNewBookVisible && (
            <View style={{ height: 50, flexDirection:'row' }}>
              <TextInput 
                style={{ 
                  flex: 1, 
                  backgroundColor: '#ececec',
                  paddingLeft: 5
                }} 
                placeholder='Enter Book Name' 
                placeholderTextColor= 'grey'
              />
              <TouchableOpacity>
                <View style={{ 
                    width: 50,
                    height: 50,
                    backgroundColor: '#a5deba',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                  <Ionicons 
                    name='ios-checkmark' 
                    color='white' 
                    size={ 40 }
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={ this.hideAddNewBook }>
                <View style={{ 
                    width: 50,
                    height: 50,
                    backgroundColor: '#deada5',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                  <Ionicons 
                    name='ios-close' 
                    color='white' 
                    size={ 40 }
                  />
                </View>
              </TouchableOpacity>
          </View>
          )}

          <TouchableOpacity 
            onPress={ this.showAddNewBook }
            style={{ 
              position: 'absolute', 
              bottom: 20, 
              right: 20 }}>
            <View style={{ 
              width: 50, 
              height: 50, 
              borderRadius: 25, 
              backgroundColor: '#AAD1E6', 
              alignItems: 'center', 
              justifyContent: 'center' }}>
              <Text style={{ 
                color: 'white', 
                fontSize: 30 }}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        

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