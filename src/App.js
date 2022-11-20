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
import Categories from './views/Categories';
import Favorites from './views/Favorites';
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

  // Cart Items
  const [cartItems, setCartItems] = useState([])

  // Filter
  const [filterInput, setFilterInput] = useState();
  const searchHandler = (e) => {
    let search = e.target.value.toLowerCase();
    setFilterInput(search);
  };

  // Sorting
  const [sortingType, setSortingType] = useState('id')

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
        alteredUser = { ...theUser, favs: [...theUser.favs, imgId] };
      }
    }
    const newUserData = [...userData].filter(data => data.id !== isAuth.id);
    setUserData([...newUserData, alteredUser]);
  };

  const isFav = id => {
    const findUser = userData.find(e => e.id === isAuth.id);
    return findUser.favs === undefined ? false : findUser.favs.includes(id);
  };

  // Cart with Map
  // const addToCart = (productId) => {
  //   if (isAuth.logged !== false) {
  //     const singleProduct = navData.find(item => item.id === productId);
  //     const productExists = cartItems.find(item => item.id === productId);
  //     if (productExists) {
  //       setCartItems(
  //         cartItems.map(item =>
  //           item.id === productId ? { ...productExists, total: productExists.total + singleProduct.price, qty: productExists.qty + 1 } : item
  //         )
  //       );
  //     } else {
  //       setCartItems([...cartItems, { 
  //         id: productId,
  //         url: singleProduct.imgSmall,
  //         title: singleProduct.title,
  //         author: singleProduct.user,
  //         price: singleProduct.price,
  //         total: singleProduct.price,
  //         qty: 1
  //       }]);
  //     }
  //   } else {
  //     toggleModal();
  //     setModalMsg([
  //       {
  //         title: 'Ooops!',
  //         content: 'You need to be logged in order to add items!'
  //       }
  //     ]);
  //   }
  // };

  // const removeFromCart = (productId) => {
  //   const singleProduct = navData.find(item => item.id === productId);
  //   const productExists = cartItems.find(item => item.id === productId);
  //   if (productExists === undefined) {
  //     setCartItems(cartItems);
  //   } else if (productExists.qty === 1) {
  //     setCartItems(cartItems.filter(remove => remove.id !== productId));
  //   } else {
  //     setCartItems(
  //       cartItems.map(removeNow =>
  //         removeNow.id === productId ? { ...productExists, qty: productExists.qty - 1, total: productExists.total - singleProduct.price } : removeNow
  //       )
  //     );
  //   }
  // };

  // Cart with Objects, it works but no idea how to use it!
  const addToCart = (productId) => {
    if (isAuth.logged) {
      const singleProduct = navData.find(item => item.id === productId);
      setCartItems({
        ...cartItems,
        [productId]: {
          url: singleProduct.imgSmall,
          title: singleProduct.title,
          author: singleProduct.user,
          price: singleProduct.price,
          id: productId,
          qty: (cartItems[productId]?.qty ?? 0) + 1,
          total: parseInt((cartItems[productId]?.total ?? 0)) + parseInt(singleProduct.price),
        }
      })
    } else {
      toggleModal();
      setModalMsg([
        {
          title: 'Ooops!',
          content: 'You need to be logged in order to add items!'
        }
      ]);
    }
  };

  const removeFromCart = (productId) => {
    const newCartItems = { ...cartItems }
    if (newCartItems[productId]) {
      newCartItems[productId].qty-=1;
      newCartItems[productId].total-= newCartItems[productId].price?? 0;
      if (newCartItems[productId].qty === 0) {
        delete newCartItems[productId]
      }
      setCartItems(newCartItems)
    }
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
      <ContextUser.Provider value={{userData, setUserData, isAuth, setIsAuth, useForm, modal, modalMsg, setModalMsg, toggleFav, isFav, toggleModal, addToCart, removeFromCart, cartItems, setCartItems }}>
        <ContextData.Provider value={{ navData, setNavData, filterInput, setFilterInput, searchHandler, removeImg, sortingType, setSortingType }}>
          <BrowserRouter>
            <Modal />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Home />} />
              <Route path="/users/:dataUser" element={<UserGallery />} />
              <Route path="/gallery" element={<Home />} />
              <Route path="/gallery/:dataId" element={<Product />} />
              <Route path="/category/" element={<Home />} />
              <Route path="/category/:category" element={<Categories />} />
              <Route path="/category/favorites" element={<Private auth={{isAuth}}> <Favorites /> </Private>} />
              <Route path="/join" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/cart" element={<Private auth={{isAuth}}> <Cart /> </Private>} />
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