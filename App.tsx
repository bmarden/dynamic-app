import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Application from 'expo-application';
import { WebView } from './modules/expo-web-view';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Bundle ID: {Application.applicationId}</Text>
      <Text style={styles.text}>Application Name: {Application.applicationName}</Text>

      <WebView
        style={{ flex: 0, width: 300, height: 300, borderColor: '#000', borderWidth: 1 }}
        url="https://expo.dev"
        onLoad={(event) => alert(`loaded ${event.nativeEvent.url}`)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
