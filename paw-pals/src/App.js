import Header from "./components/Header/index";
import "./App.css";
import Navbar from "./components/Navbar/index";
import Card from "./components/Card/index";

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Header></Header>
      <Card></Card>
    </div>
  );
}

export default App;
