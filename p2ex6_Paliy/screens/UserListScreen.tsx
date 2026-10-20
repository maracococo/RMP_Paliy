import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, User } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'UserList'>;

const URL = 'https://gorest.co.in/public/v2/users';

export default function UserListScreen({ navigation }: Props) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }
      const data: User[] = await response.json();
      setUsers(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Неизвестная ошибка');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={styles.hint}>Загрузка...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
        <Button title="Повторить" onPress={loadUsers} />
      </View>
    );
  }

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => String(item.id)}
      refreshing={loading}
      onRefresh={loadUsers}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('UserDetails', { user: item })}
        >
          <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  hint: { marginTop: 8, color: '#666' },
  error: { color: 'crimson', marginBottom: 12, textAlign: 'center' },
  item: { paddingVertical: 16, paddingHorizontal: 16, backgroundColor: '#fff' },
  name: { fontSize: 18 },
  separator: { height: StyleSheet.hairlineWidth, backgroundColor: '#ccc' },
});
