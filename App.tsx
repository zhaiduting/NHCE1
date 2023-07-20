import {WebView} from 'react-native-webview';

function App() {
  return (
    <WebView
      source={{uri: 'file:///android_asset/index.htm'}}
      allowFileAccess={true}
      allowFileAccessFromFileURLs={true}
      originWhitelist={['file://*']}
    />
  );
}

export default App;
