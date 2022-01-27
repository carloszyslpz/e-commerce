import "./App.css";
import NavBar from "./components/NavBar";
import logo from "./logo.png";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="logo" />
        <NavBar />
      </header>
      <ItemListContainer title="Bienvenido" />
    </div>
  );
}

export default App;
