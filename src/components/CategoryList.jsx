import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import Sorting from './Sorting';
import ContextUser from '../ContextUser';

export default function CategoryList() {

  const { isAuth } = useContext(ContextUser);

  const setActiveClass = ({ isActive }) => `categories__link container--flex ${( isActive ? 'categories--active' : '')}`;

  return (
    <div className="categories container--flex">
      <div className="categories__wrapper container--flex">
        <NavLink className={setActiveClass} to="/category/originals">
          Originals
        </NavLink>
        <NavLink className={setActiveClass} to="/category/fantasy">
          Fantasy
        </NavLink>
        <NavLink className={setActiveClass} to="/category/terror">
          Terror
        </NavLink>
        <NavLink className={setActiveClass} to="/category/movies">
          Movies
        </NavLink>
        { isAuth.logged ?
          <NavLink className={setActiveClass} to="/category/favorites">
            Favorites
          </NavLink>
          : '' }
      </div>
      <Sorting />
    </div>
  )
}