import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('Nathan')
  const [age, setAge] = useState('23')


  return (
    <View style={styles.container}>
      <Text> Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder = 'e.g. John Doe'
        onChangeText = {(val) => setName(val)}/>
      <TextInput
       style={styles.input}
       placeholder = 'e.g. 20'
       keyboardType = 'numeric'
       onChangeText = {(val) => setAge(val)}/>
      <Text> Their name is {name} and their age is {age}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width:300,
  }
});
