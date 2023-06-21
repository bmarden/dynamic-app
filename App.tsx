import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Application from 'expo-application';
import { WebView } from './modules/expo-web-view';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Bundle ID: {Application.applicationId}
      </Text>

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
  }
});
