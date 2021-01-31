import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Touchable } from 'react-native';
import Header from './components/header';
import DeedsItem from './components/deedsitem';
import AddDeed from './components/adddeed';

export default function App() {
  const [deeds, setDeeds] = useState([
    {text:'This is where your most recent deeds appear', key:'1'},
    {text:'More deeds', key:'2'}
  ]);

  const pressHandler = (key) => {
    setDeeds((prevDeeds) => {
      return prevDeeds.filter(deed => deed.key != key);
    });
  }

  const submitHandler = (text) => {
    if(text.length > 3) {
      setDeeds((prevDeeds) => {
        return [
          {text: text, key: Math.random().toString() },
          ...prevDeeds
        ];
    });
    } else {
      Alert.alert('OOPS!', 'Deeds must be longer than 3 characters', [
        {text:'Understood', onPress: () => console.log('alert closed')}
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddDeed submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList
                data={deeds}
                renderItem={( {item} ) => (
                  <DeedsItem item={item} pressHandler={pressHandler}/>
                )}
              />
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
