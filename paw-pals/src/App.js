import Header from "./components/Header/index";
import "./App.css";
import Navbar from "./components/Navbar/index";
import Card from "./components/Card/index";
import Footer from "./components/Footer/index";
import Search from "./components/Search/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Header />}></Route>
          <Route path='/search' element={<Card />}></Route>
          <Route path='/settings' element={<Search />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
