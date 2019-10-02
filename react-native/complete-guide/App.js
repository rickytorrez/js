import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    // content binding for styling
    <View style={ { padding: 50 } }>
      <View>
        <TextInput placeholder= "Course Goal" style={ {borderBottomColor: 'black', borderBottomWidth: 1} }/>
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
