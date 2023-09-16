import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useState} from 'react';

import TaskItem from './components/TaskItem';

export default function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  function getNextTaskId(){
    return tasks.reduce( (a, b) => { 
      if (b.id > a) a = b.id;
      return a;
    }, 0) + 1;
  }

  function handleAddTask(){
    let id = getNextTaskId();
    setTasks([...tasks, {id: id, name: task, done: false}]); 
  }

  function handleCompleteTask(id){
   // let _task = tasks.find(item => item.id == id).done = true;
   // for (let i = 0; i < tasks.length; i++){
   //   if (tasks[i].id == _task.id){
   //     const _tasks = [...tasks];
   //     _tasks[i] = _task;
   //     setTasks([..._tasks]);
   //     break;
   //   }
   // }
    setTasks([...tasks.map(item => {
      if (item.id == id)
          item.done = true;
      return item;
    })])
  }


  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>Lista de Tarefas</Text>
        <View style={styles.topBar}>
          <TextInput style={styles.input}
           placeholder='Digite a tarefa...'
           onChangeText={text => { setTask(text) }}
           value={task} />
          <TouchableOpacity 
          style={styles.btnAddTask}
          onPress={handleAddTask}
          >
            <Text style={styles.btnAddTaskText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {tasks.map( item => <TaskItem 
                            key={item.id} 
                            taskName={item.name} 
                            onCompleteTask={handleCompleteTask} 
                            /> ) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  top: {
    marginTop: 60
  },
  topText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center'
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15    
  },
  input: {
    borderColor: 'white',
    width: '70%',
    borderWidth: 2
  },
  btnAddTask : {
    backgroundColor: 'gray',
    width: 40,
    borderRadius: 8
  },
  btnAddTaskText :{
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '700'
  }
});
