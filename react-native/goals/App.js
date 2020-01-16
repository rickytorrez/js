import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    //console.log(enteredText);
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // currentGoals gives you the latest guaranteed snapshot for the array of goals
      // better than [...courseGoals, eneteredGoal]
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
  };

  // we do not call the functions onPress since they would be invoked when the component renders
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput 
          placeholder= 'Course Goal' 
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}/>
        <Button 
          title= 'ADD' 
          onPress={addGoalHandler}/>
      </View>
      <View>
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) =>
            <View>
                <Text>{ itemData.item.value }</Text>
            </View>
          }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50 
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  }
});
