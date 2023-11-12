import logo from './logo.svg';
import './App.css';
import MyInfo from './components/myInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Content">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Fullstack Development - 1</h2>
          <h3>React JS Programmin Week09 Lab exercise</h3>
          <MyInfo college="George Brown College, Toronto" />
        </div>
      </header>
    </div>
  );
}

export default App;
