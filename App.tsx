import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { Goals } from './utils/types';

export default function App() {

  //const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<Array<Goals>>([]);
  const [modalIsVisible, setmodalIsVisible] = useState(false);

  /* function goalInputHandler(enteredText: any) {
    setEnteredGoalText(enteredText);
  } */
  
  function addGoalHandler(enteredGoalText: any) {
    console.log('enteredGoalText');
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id: string){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    });
    console.log('Delete');
  }

  function startAddGoalHandler(){
    setmodalIsVisible(true);
  }
  
  function endAddGoalHandler(){
    setmodalIsVisible(false);
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button 
        title='Add new goal' 
        color='#a065ec'
        onPress={startAddGoalHandler}/>
        
      <GoalInput 
        onAddGoal={addGoalHandler} 
        visible={modalIsVisible} 
        onCancel={endAddGoalHandler}
      />

      <View style={styles.goalsContainer}>   
        <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          );    
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        />
      </View>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  },
});
