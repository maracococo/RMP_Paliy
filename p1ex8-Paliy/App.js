import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from 'react-native';

const users = [
  {name: 'Иван Иванов', letter: 'А'},
  {name: 'Борис Орлов', letter: 'Б'},
  {name: 'Марк Лебедев', letter: 'В'},
  {name: 'Мария Цветкова', letter: 'Г'},
  {name: 'Диана Ефимова', letter: 'Г'},
  {name: 'Арина Синицина', letter: 'А'},
];

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState('Г');

  const filteredUsers = users.filter(
    user => user.letter === selectedLetter,
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Application</Text>
      </View>

      {/* Список */}
      <View style={styles.listContainer}>
        <FlatList
          data={filteredUsers}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.userCard}>
              <View style={styles.avatar} />

              <Text style={styles.userName}>
                {item.name}
              </Text>
            </View>
          )}
        />
      </View>

      {/* Нижние кнопки */}
      <View style={styles.buttonsContainer}>
        {['А', 'Б', 'В', 'Г'].map(letter => (
          <Pressable
            key={letter}
            onPress={() => setSelectedLetter(letter)}
            style={[
              styles.letterButton,
              selectedLetter === letter && styles.selectedButton,
            ]}
          >
            <Text style={styles.letterText}>
              {letter}
            </Text>
          </Pressable>
        ))}
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: 60,
    backgroundColor: '#91AAE4',

    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  listContainer: {
    flex: 1,
    padding: 8,
  },

  userCard: {
    height: 74,
    backgroundColor: '#C5D5F7',

    borderRadius: 18,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 16,
    marginBottom: 8,
  },

  avatar: {
    width: 45,
    height: 45,

    borderRadius: 25,

    backgroundColor: '#7694D0',

    marginRight: 12,
  },

  userName: {
    fontSize: 18,
    color: '#222',
  },

  buttonsContainer: {
    height: 96,

    backgroundColor: '#DCE6FC',

    flexDirection: 'row',

    padding: 8,
    gap: 6,
  },

  letterButton: {
    flex: 1,

    backgroundColor: '#7694D0',

    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedButton: {
    borderWidth: 2,
    borderColor: '#008CFF',
  },

  letterText: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
  },
});

export default App;