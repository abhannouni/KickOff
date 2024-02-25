import { StyleSheet, Text, View } from 'react-native';
import NavPage from './routes/NavPage';
 
import { Provider } from 'react-redux';
import store from './redux/store';
import Colors from './styles/Colors';

export default function App() {
  return (
    <View style={styles.body} testID="app-container">
      <Provider store={store}>
        <NavPage />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
});
