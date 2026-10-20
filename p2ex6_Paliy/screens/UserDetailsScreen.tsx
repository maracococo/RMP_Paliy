import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetails'>;

export default function UserDetailsScreen({ route }: Props) {
  const { user } = route.params;

  const rows: { label: string; value: string }[] = [
    { label: 'ID', value: String(user.id) },
    { label: 'Имя', value: user.name },
    { label: 'Email', value: user.email },
    { label: 'Пол', value: user.gender },
    { label: 'Статус', value: user.status },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      {rows.map((row) => (
        <View key={row.label} style={styles.row}>
          <Text style={styles.label}>{row.label}</Text>
          <Text style={styles.value}>{row.value}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  row: {
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  label: { fontSize: 13, color: '#666' },
  value: { fontSize: 18, marginTop: 2 },
});
