import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';

export default function App() {

  // hooks
  // enteredGoal
  // setEnteredGoal will help us update the state
  // we start with an initial state of an empty string by default b/c the user hasn't entered anything at the beginning
  const [enteredGoal, setEnteredGoal] = useState( '' );

  // another state to manage our goals, initially an empty array
  // courseGoals is what is in our state
  // setCourseGoals is the function that we use to update our state
  const [courseGoals, setCourseGoals] = useState( [] );

  // function for onChangeText - it gets the enteredText and calls setEnteredGoal from hooks
  // don't call the function on TextInput, if you do, it will run every time the app loads
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  // function for the ADD button - we want to add our entered goal to a list of goals (courseGoals) in the state
  // when we add a goal, we want to update our courseGoals to add a new goal
  // we use a spread operator to copy our existing array and pulls out the element and adds them to a new array
  // currentGoals is our present most recent data
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    // content binding for styling
    <View style={ styles.screen }>
      <View style={ styles.inputContainer  }>
        <TextInput 
          placeholder= "Course Goal" 
          style={ styles.input } 
          onChangeText={ goalInputHandler } 
          value={ enteredGoal }/>
        <Button title="ADD" onPress={ addGoalHandler }/>
      </View>
      <ScrollView>
        { courseGoals.map( (goal) => 
          <View key={ goal } style={ styles.listItem }>
            <Text> { goal }</Text>
          </View>) 
        } 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 100
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: .5,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
