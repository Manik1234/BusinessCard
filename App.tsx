import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createStore } from 'redux';
import EmptyDetails from './component/EmptyDetails';
import BusinessDetails, { UserDetail } from './container/BusinessDetails';
import SavedDetails from './container/SavedDetails';
import businessDetailReducer from './reducer/businessDetailReducer';
import { Provider } from 'react-redux';
import allReducers from './reducer/businessDetailReducer';
import React from 'react';
import BusinessCard from './container/BusinessCard';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './screens/RootStackPrams';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './redux/store';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [details, setDetails] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetail[]>([]);

  const onPresshandler = () => {
    setDetails(true);
  }

  const onBackPressHandler = async () => {
    setDetails(false);
  }

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar />
          <Stack.Navigator>
            <Stack.Screen name="BusinessCard" component={BusinessCard} />
            <Stack.Screen name="SavedDetails" component={SavedDetails} />
            <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center', // Centered horizontally
  },
});
