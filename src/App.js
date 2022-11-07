import './sass/main.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import ContextUser from './ContextUser';
import ContextData from './ContextData';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './views/Home';
import Product from './views/Product';
import Register from './views/Register';
import Login from './views/Login';
import Forgot from './views/Forgot';
import Cart from './views/Cart';
import User from './views/User';
import UserEdit from './views/UserEdit';
import Add from './views/Add';
import About from './views/About';
import Help from './views/Help';
import EULA from './views/EULA';
import NotFound from './views/NotFound';

function App() {

  const [navData, setNavData] = useState([]);
  const [userData, setUserData] = useState([]);

  const submissions = "/Submissions.json";
  const obtainData = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        if (response.status > 400) {
          throw Error(`Status: ${response.status}`);
        }
        const data = await response.json();
        setNavData(data);
      }
    } catch (e) {
      console.log(e)
    }
  };

  const users = "/Users.json";
  const obtainUsers = async (url) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        if (response.status > 400) {
          throw Error(`Status: ${response.status}`);
        }
        const data = await response.json();
        setUserData(data);
        console.log(data);
      }
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    obtainData(submissions);
    obtainUsers(users);
  }, []);

  const isFav = id => {
    const checkFav = navData.findIndex((i) => i.id === id);
    navData[checkFav].fav = !navData[checkFav].fav;
    setNavData([...navData]);
  };

  return (
    <div className="wrapper">
      <ContextUser.Provider value={{ userData, setUserData }}>
        <ContextData.Provider value={{ navData, setNavData, isFav }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:dataId" element={<Product />} />
              <Route path="/join" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/user" element={<User />} />
              <Route path="/edit" element={<UserEdit />} />
              <Route path="/add" element={<Add />} />
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
              <Route path="/eula" element={<EULA />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ContextData.Provider>
      </ContextUser.Provider>
    </div>
  );
}

export default App;