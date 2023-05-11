import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props: any) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText: any) {
    setEnteredGoalText(enteredText);
  }
  
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    //console.log(enteredGoalText);
    //setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your course goal'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color="#a065ec"/>
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color="#fa0000"/>
          </View>
        </View>
      </View>
    </Modal>
    
  );
}

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      //flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      //marginBottom: 24,
      //borderBottomWidth: 1,
      //borderBottomColor: 'black',
      padding: 16,
      backgroundColor: '#311b6b'
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#e4d0ff',
      width: '100%',
      //marginRight: 8,
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#e4d0ff',
      //color: 'black'
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 16
    },
    button: {
      width: 100,
      margin: 8
    },
    image: {
      width: 100,
      height: 100,
      margin: 20
    }
  });
  
export default GoalInput;