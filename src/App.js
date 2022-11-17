import './sass/main.scss';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import ContextUser from './ContextUser';
import ContextData from './ContextData';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Modal from './views/Modal';
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

  // Modal System
  const [modal, setModal] = useState(false);
  const [modalMsg, setModalMsg] = useState([
    {
      title: 'Oh no!',
      content: 'Ipsumm'
    }
  ]);

  const toggleModal = () => {
    setModal(!modal); 
  };

  // Rendered Information
  const [navData, setNavData] = useState([]);

  // User Information
  const [userData, setUserData] = useState([]);

  // Authentication
  const [isAuth, setIsAuth] = useState({
    logged: false
  });

  // Filter
  const [filterInput, setFilterInput] = useState();
  const searchHandler = (e) => {
    let search = e.target.value.toLowerCase();
    setFilterInput(search);
  };

  // Form Hook
  const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const changeHandler = e => {
      const newValues = {...values, [e.target.name]: e.target.value};
      setValues(newValues);
    };
    return {values, changeHandler};
  };

  const toggleFav = imgId => {
    // Find the user
    const theUser = userData.find(e => e.id === isAuth.id);

    let alteredUser = '';
    if (theUser.favs === undefined) {
      alteredUser = { ...theUser, favs: [imgId] };
    } else {
      const favIndex = theUser.favs.findIndex(e => e === imgId);
      if (favIndex > -1) {
        alteredUser = { ...theUser, favs: theUser.favs.filter(favId => favId !== imgId) };
      } else {
        alteredUser = { ...theUser, favs: theUser.favs.concat([imgId]) };
      }
    }
    const newUserData = [...userData].filter(data => data.id !== isAuth.id);
    setUserData([...newUserData, alteredUser]);
  };

  const isFav = id => {
    const theUser = userData.find(e => e.id === isAuth.id);
    return theUser.favs === undefined ? false : theUser.favs.includes(id);
  };

  const removeImg = id => {
    const remove = navData.filter((items) => items.id !== id);
    setNavData(remove);
  };

  const Private = ({ auth: { isAuth }, children }) => {
    return isAuth.logged ? children : <Navigate to="/" />;
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

  return (
    <div className="wrapper">
      <ContextUser.Provider value={{ userData, setUserData, isAuth, setIsAuth, useForm, modal, modalMsg, setModalMsg, toggleFav, isFav, toggleModal }}>
        <ContextData.Provider value={{ navData, setNavData, filterInput, setFilterInput, searchHandler, removeImg }}>
          <BrowserRouter>
            <Modal />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Home />} />
              <Route path="/users/:dataUser" element={<UserGallery />} />
              <Route path="/gallery" element={<Home />} />
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