// screens/AddTaskScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addTask } from '../src/taskActions';

const AddTaskScreen = ({ addTask, navigation }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      const newTask = {
        id: Math.random().toString(),
        text: taskText,
      };
      console.log('New Task:', newTask); // Thêm dòng này để kiểm tra
      addTask(newTask);
      setTaskText('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
      <TextInput
        placeholder="Enter task"
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
        style={styles.input}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default connect(null, { addTask })(AddTaskScreen);
