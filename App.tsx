import {WebView} from 'react-native-webview';
import {Platform} from 'react-native';

function App() {
  const source =
    Platform.OS === 'ios'
      ? './pages/index.htm'
      : 'file:///android_asset/index.htm';
  return (
    <WebView
      source={{uri: source}}
      allowFileAccess={true}
      allowFileAccessFromFileURLs={true}
      originWhitelist={['file://*']}
    />
  );
}

export default App;
