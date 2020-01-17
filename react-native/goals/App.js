import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    // currentGoals gives you the latest guaranteed snapshot for the array of goals
      // better than [...courseGoals, eneteredGoal]
    // setIsAddMode turn the modal to false
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    // filter always gives returns new array
    setCourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.id !== goalId);
    })
  };

  const toggleModal = () => {
    setIsAddMode(true)
  };

  const cancelGoalAddHandler = () => {
    setIsAddMode(false)
  }

  // we do not call the functions onPress since they would be invoked when the component renders
  return (
    <View style={styles.container}>
      <Button 
        title='Add New Goal'
        onPress={ toggleModal }/>
      <GoalInput 
        onAddGoal={ addGoalHandler }
        visible={ isAddMode }
        onCancel={ cancelGoalAddHandler }/>
      <View>
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) =>
            <GoalItem 
              title={ itemData.item.value }
              id={ itemData.item.id }
              onDelete={ removeGoalHandler }/>
          }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50 
  }
});
