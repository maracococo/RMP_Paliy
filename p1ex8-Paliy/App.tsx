import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from 'react-native';

const users = [
  {name: 'Иван Иванов'},
  {name: 'Борис Орлов'},
  {name: 'Марк Лебедев'},
  {name: 'Мария Цветкова'},
  {name: 'Диана Ефимова'},
  {name: 'Арина Синицина'},
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>

      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Application</Text>
      </View>

      {/* Все имена */}
      <View style={styles.listContainer}>
        <FlatList
          data={users}
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

      {/* Просто кнопки */}
      <View style={styles.buttonsContainer}>
        {['А', 'Б', 'В', 'Г'].map(letter => (
          <Pressable
            key={letter}
            style={styles.letterButton}
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

  letterText: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
  },
});

export default App;