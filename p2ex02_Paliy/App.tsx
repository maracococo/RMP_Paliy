import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';
import { useState } from 'react';

export default function App() {
  const [list, setList] = useState([
    {id: '1', title: 'Сделать домашку'},
    {id: '2', title: 'Погулять с собакой'},
    {id: '3', title: 'Сходить в магазин'},
  ]);
  const addItem = (title: string) => {
    setList((list) => {
      return [
        {
          title: title,
          id: Math.random().toString(36).substring(7)
        }, 
        ...list
      ]
    }
    );
  }
  const deleteItem = (id: string) => {
    setList((list) => {
      return list.filter((item) => item.id !== id);
    });
  }
  return (
    <View style={styles.main}>
      <Header/>
      <Form addItem={addItem}/>
      <View>
        <FlatList 
        data={list}
        renderItem={({item}) => <ListItem el={item} deleteItem={deleteItem} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{ flex: 1,}
});
