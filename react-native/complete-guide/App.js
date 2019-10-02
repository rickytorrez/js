import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    // content binding for styling
    <View style={ { padding: 100 } }>
      <View style={ { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } }>
        <TextInput 
          placeholder= "Course Goal" 
          style={ {width: '80%', borderColor: 'black', borderWidth: .5, padding: 10} }/>
        <Button title="ADD"/>
      </View>
      <View>
        <Text>list component</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
