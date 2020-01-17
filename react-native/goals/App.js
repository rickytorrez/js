import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    // currentGoals gives you the latest guaranteed snapshot for the array of goals
      // better than [...courseGoals, eneteredGoal]
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
  };

  // we do not call the functions onPress since they would be invoked when the component renders
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={ addGoalHandler }/>
      <View>
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) =>
            <GoalItem 
              title={ itemData.item.value }/>
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
