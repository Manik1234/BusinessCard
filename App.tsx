import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Button, View } from 'react-native';
import { createStore } from 'redux';
import EmptyDetails from './component/EmptyDetails';
import BusinessDetails, { UserDetail } from './container/BusinessDetails';
import SavedDetails from './container/SavedDetails';
import businessDetailReducer from './reducer/businessDetailReducer';
import { Provider } from 'react-redux';
import allReducers from './reducer/businessDetailReducer';

export default function App() {
  const [details, setDetails] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetail[]>([]);

  const onPresshandler = () => {
    setDetails(true);
  }

  const getData = async () => {
    setUserDetails([JSON.parse(data ?? '')]);
  }

  useEffect(() => {
    // getData();
  }, [])

  const onBackPressHandler = async () => {
    setDetails(false);
    // const data = await getUser('userData');
    // setUserDetails([JSON.parse(data ?? '')]);
  }
  const store = createStore(allReducers);

  return (
    <>
      <Provider store={store}>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          {details &&
            <View style={{ position: 'absolute', left: 0, top: 40 }}>
              <Button onPress={onBackPressHandler} title='Back' />
            </View>
          }
          <EmptyDetails userDetails={userDetails} isListEmpty={!details} onPresshandler={onPresshandler} />

          {userDetails.length > 0 && !details &&
            <>
              <SavedDetails userDetails={userDetails} />
            </>
          }

          {details &&
            <BusinessDetails />
          }
        </SafeAreaView>
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
