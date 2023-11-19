// screens/TaskListScreen.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { removeTask, addTask } from '../src/taskActions';
import { SearchBar } from 'react-native-elements';

const TaskListScreen = ({ tasks, navigation, addTask }) => {
  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      const newTask = {
        id: Math.random().toString(),
        text: taskText,
      };
      addTask(newTask);
      setTaskText('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, left:200, fontWeight:'bold'}}>Hi Twinkle</Text>
      <Text style={{fontSize:20, left:180,marginBottom:30}}>Have a great day a head</Text>
      <SearchBar placeholder='Search'/>
      {tasks.length === 0 ? (
        <Text style={{padding:200}}>No tasks available</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <Text>{item.text}</Text>
              <Button
                title="Remove"
                onPress={() => handleRemoveTask(item.id)}
              />
            </View>
          )}
        />
      )}
      
      <Button
        title="+"
        onPress={() => navigation.navigate('AddTask')}
        style={styles.addButton}
      />
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
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  addButton: {
    marginTop: 16,
  },
});

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks || [],
});

export default connect(mapStateToProps, { addTask })(TaskListScreen);
