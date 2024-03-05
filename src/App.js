import logo from './logo.svg';
import img from "./images/Minion.jpg";
import './App.css';

import Function1 from "./components/FirstFunction"
import MenuItems from './components/MenuItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuItems />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <br/>
        <img src={img}/>

        <Function1 />
      </header>


    </div>
  );
}

export default App;
