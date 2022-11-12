import './sass/main.scss';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import UserGallery from './views/UserGallery';
import UserEdit from './views/UserEdit';
import Add from './views/Add';
import About from './views/About';
import Help from './views/Help';
import EULA from './views/EULA';
import NotFound from './views/NotFound';

function App() {

  // Rendered Information
  const [navData, setNavData] = useState([]);

  // User Information
  const [userData, setUserData] = useState([]);

  // Authentication
  const [isAuth, setIsAuth] = useState({
    logged: false
  });

  function useForm(initialState = {}) {
    const [values, setValues] = useState(initialState);
    const changeHandler = e => {
      const newValues = {...values, [e.target.name]: e.target.value};
      setValues(newValues);
    };
    return {values, changeHandler};
  };

  const submissions = "/Submissions.json";
  const users = "/Users.json";
  
  const obtainData = async (url, state) => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        if (response.status > 400) {
          throw Error(`Status: ${response.status}`);
        }
        const data = await response.json();
        state(data);
      }
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    obtainData(submissions, setNavData);
    obtainData(users, setUserData);
  }, []);

  const isFav = id => {
    const checkFav = navData.findIndex((i) => i.id === id);
    navData[checkFav].fav = !navData[checkFav].fav;
    setNavData([...navData]);
  };

  const removeImg = id => {
    const removed = navData.filter((items) => items.id !== id);
    setNavData(removed);
  };

  const Private = ({ auth: { isAuth }, children }) => {
    return isAuth.logged ? children : <Navigate to="/" />;
  };

  return (
    <div className="wrapper">
      <ContextUser.Provider value={{ userData, setUserData, isAuth, setIsAuth, useForm }}>
        <ContextData.Provider value={{ navData, setNavData, isFav, removeImg }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:dataUser" element={<UserGallery />} />
              <Route path="/gallery/:dataId" element={<Product />} />
              <Route path="/join" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/user" element={<Private auth={{isAuth}}> <User /> </Private>} />
              <Route path="/edit" element={<Private auth={{isAuth}}> <UserEdit /> </Private>} />
              <Route path="/add" element={<Private auth={{isAuth}}> <Add /> </Private>} />
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