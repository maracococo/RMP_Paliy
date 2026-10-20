import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from './screens/UserListScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={{ title: 'Список пользователей' }}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetailsScreen}
          options={{ title: 'Данные пользователя' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
