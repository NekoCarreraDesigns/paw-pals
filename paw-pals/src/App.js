import Header from "./components/Header/index";
import "./App.css";
import Navbar from "./components/Navbar/index";
import Card from "./components/Card/index";
import Footer from "./components/Footer/index";
import Search from "./components/Search/index";
import Adopt from "./components/Adopt/index";
import DogParks from "./components/DogParks/index";
import Profile from "./components/Profile/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserViews from "./components/User-Views/index";
import DogsViews from "./components/Dogs-Profile/index";
import Login from "./components/Log-in/index";
import Logout from "./components/Log-out/index";
import Register from "./components/Register/index";
import LogoutMessage from "./components/Log-out-message/index";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Header />}></Route>
          <Route path='/cards' element={<Card />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/adopt' element={<Adopt />}></Route>
          <Route path='/dog-parks' element={<DogParks />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/user-view' element={<UserViews />}></Route>
          <Route path='/dogs-view' element={<DogsViews />}></Route>
          <Route path='/log-in' element={<Login />}></Route>
          <Route path='log-out' element={<Logout />}></Route>
          <Route path='log-out-message' element={<LogoutMessage />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
