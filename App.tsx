import {WebView} from 'react-native-webview';

function App() {
  return (
    <WebView source={{uri: 'https://www.youku.com/'}} style={{marginTop: 20}} />
  );
}

export default App;
