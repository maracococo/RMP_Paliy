import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.root}>
     
      {/* Верхняя панель с иконками */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.circleSmall}>
          <Text style={styles.circleText}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleSmall}>
          <Text style={styles.circleText}>Г</Text>
        </TouchableOpacity>
      </View>

      {/* Шапка с адресом (остается ближе к верху) */}
      <View style={styles.header}>
        <Text style={styles.title}>Адрес подачи</Text>
        <Text style={styles.address}>Шевченко ул. 92</Text>
      </View>

      {/* Нижняя группа элементов, прижатая к низу */}
      <View style={styles.bottomGroup}>
       
        {/* Партнёры */}
        <View style={styles.sectionContainer}>
          <View style={styles.square} />
          <Text style={styles.label}>Партнёры</Text>
        </View>

        {/* Рядом с вами */}
        <Text style={styles.sectionTitle}>РЯДОМ С ВАМИ</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tariffList}
          data={[
            { name: 'Эконом' },
            { name: 'Экспресс' },
            { name: 'Стандарт' },
            { name: 'Комфорт' },
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.tariffItem}>
              <View style={styles.tariffSquare} />
              <Text style={styles.label}>{item.name}</Text>
            </View>
          )}
        />

        {/* Кнопки действий */}
        <View style={styles.actionsRow}>
          <View style={styles.actionItem}>
            <Pressable style={styles.actionCircle} />
            <Text style={styles.label}>Оператор</Text>
          </View>
          <View style={styles.actionItem}>
            <Pressable style={styles.actionCircle} />
            <Text style={styles.label}>Другой адрес</Text>
          </View>
          <View style={styles.actionItem}>
            <Pressable style={styles.actionCircle} />
            <Text style={styles.label}>Мои адреса</Text>
          </View>
        </View>

        {/* Большая кнопка вызова */}
        <Pressable style={styles.callButton}>
          <Text style={styles.callText}>Вызвать такси</Text>
        </Pressable>

      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'space-between', // Распределяет элементы: верх наверху, низ внизу
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleSmall: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FCEEC9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 22,
    color: '#555',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#666',
    marginBottom: 4,
  },
  address: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
  bottomGroup: {
    gap: 15, // Красивые отступы между всеми элементами внизу
  },
  sectionContainer: {
    alignItems: 'flex-start',
  },
  square: {
    width: 60,
    height: 60,
    backgroundColor: '#FCEEC9',
    borderRadius: 8,
    marginBottom: 4,
  },
  label: {
    fontSize: 13,
    color: '#333333',
  },
  sectionTitle: {
    fontSize: 13,
    color: '#888888',
    textAlign: 'center',
  },
  tariffList: {
    gap: 15,
  },
  tariffItem: {
    alignItems: 'center',
  },
  tariffSquare: {
    width: 60,
    height: 60,
    backgroundColor: '#FCEEC9',
    borderRadius: 8,
    marginBottom: 4,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionItem: {
    alignItems: 'center',
  },
  actionCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFC107',
    marginBottom: 4,
  },
  callButton: {
    backgroundColor: '#FCEEC9',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  callText: {
    fontSize: 22,
    color: '#333333',
    fontWeight: '500',
  },
});