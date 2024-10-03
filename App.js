import React from 'react';
import { View } from 'react-native';
import Form from './components/Form';
import { store } from './redux/store';
import Tasks from "./components/Tasks";
import { Provider } from 'react-redux';
import styles from './styles/styles';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.tasksContainer}>
          <Tasks />
        </View>
        <View style={styles.formContainer}>
          <Form />
        </View>
      </View>
    </Provider>
  );
}
