import banner from './assets/React-native-in-production-Banner.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>React Native In Production</div>
        <img src={banner} className="App-banner" alt="banner" />
      </header>
    </div>
  );
}

export default App;
