import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/dairedo7/goit-team-project-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Team Project
        </a>
      </header>
    </div>
  );
};

export default App;
