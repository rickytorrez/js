import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';

import BookCount from './components/BookCount';
import CustomActionButton from './components/CustomActionButton';
import { Ionicons } from '@expo/vector-icons';
import colors from './assets/colors';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
      isAddNewBookVisible: false,
      textInputData: '',
      books: []
    };
  };

  showAddNewBook = () => {
    this.setState({ isAddNewBookVisible: true });
  };

  hideAddNewBook = () => {
    this.setState({ isAddNewBookVisible: false });
  };

  addBook = (book) => {
    this.setState(
      (state, props) => ({
        books:[...state.books, book],
        totalCount: state.totalCount + 1,
        readingCount: state.readingCount + 1
    }),
      () => {
        console.log(this.state.books);
    });
  };

  markAsRead = (selectedBook, index) => {
    let newList = this.state.books.filter((book) => book !== selectedBook);

    this.setState((prevState) => ({
      books: newList,
      readingCount: prevState.readingCount - 1,
      readCount: prevState.readCount + 1
    }));
  };

  renderItem = (item, index) => (
    <View style={ styles.bookList }>
      <View style={ styles.bookItem }>
        <Text>{ item }</Text>
      </View>
      <CustomActionButton
        style={ styles.readButton }
        onPress={ () => this.markAsRead(item, index)  }>
        <Text style={ styles.readText }>Mark as Read</Text>
      </CustomActionButton>
    </View>
  );

  render(){
    return (
      <View style={ styles.container }>
        <SafeAreaView />

        <View style={ styles.header }>
          <Text style={ styles.appTitle }>Book Worm</Text>
        </View> 

        <View style={ styles.container }>
          { this.state.isAddNewBookVisible && (
            <View style={ styles.textContainer }>
              <TextInput 
                onChangeText={ (text) => this.setState({ textInputData: text }) }
                style={ styles.textInput } 
                placeholder='Enter Book Name' 
                placeholderTextColor= { colors.txtPlaceholder }
              />

              <CustomActionButton 
                style={ styles.checkmark }
                onPress={ () => this.addBook(this.state.textInputData) }>
                <Ionicons 
                  name='ios-checkmark' 
                  color='white' 
                  size={ 40 }
                />
              </CustomActionButton>

              <CustomActionButton 
                style={ styles.close }
                onPress={ this.hideAddNewBook }>
                <Ionicons 
                  name='ios-close' 
                  color='white' 
                  size={ 40 }
                />
              </CustomActionButton>
            </View>
          )}

          <FlatList 
            data={ this.state.books }
            renderItem={({ item }, index)=> this.renderItem(item, index) }
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <View style={ styles.emptyBookContainer }> 
                <Text style={ styles.emptyBookText }>Not Reading Any Books.</Text>
              </View>
            }
          />

          <CustomActionButton
            onPress={ this.showAddNewBook }
            position= 'right'
            style={ styles.addButton }>
            <Text style={ styles.addText }>+</Text>
          </CustomActionButton>
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
  container:{
    flex: 1
  },
  header: {
    height: 70, 
    borderBottomWidth: 0.5, 
    borderBottomColor: colors.borderColor , 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  appTitle: {
    fontSize: 24
  },
  footer: {
    height: 70, 
    borderTopWidth: 0.5, 
    borderTopColor: colors.borderColor ,
    flexDirection: 'row',
  },
  tabButtons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    fontSize: 20
  },
  bookList: {
    height: 50, 
    flexDirection: 'row'
  },
  bookItem: {
    flex: 1, 
    justifyContent: 'center', 
    paddingLeft: 5
  },
  readButton: {
    width: 100, 
    backgroundColor: colors.bgSuccess
  },
  readText: {
    fontWeight: 'bold', 
    color: 'white' 
  },
  textContainer: {
    height: 50, 
    flexDirection:'row'
  },
  textInput: {
    flex: 1, 
    backgroundColor: colors.bgTextInput,
    paddingLeft: 5
  },
  emptyBookContainer: {
    marginTop: 50, 
    alignItems: 'center'
  },
  emptyBookText: {
    fontWeight: 'bold'
  },
  addButton: {
    backgroundColor: colors.bgPrimary,
    borderRadius: 25
  },
  addText: {
    color: 'white',
    fontSize: 30
  },
  checkmark: {
    backgroundColor: colors.bgSuccess
  },
  close: {
    backgroundColor: colors.bgError
  }
});