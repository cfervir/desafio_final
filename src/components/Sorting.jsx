import { useContext } from "react";
import ContextData from "../ContextData";

const order = [
  { value: 'id', description: 'Default' },
  { value: 'idDesc', description: 'Latest' },
  { value: 'title', description: 'Title [A-Z]' },
  { value: 'titleDesc', description: 'Title [Z-A]' },
  { value: 'price', description: 'Price $▼' },
  { value: 'priceDesc', description: 'Price $▲' },
];

export default function Sorting() {

  const { navData, setNavData, sortingType, setSortingType } = useContext(ContextData);
  
  const sortData = (sort) => {
    const sorted = navData.slice().sort((a, b) => {
      switch (sort) {
        case 'idDesc':
          return b.id - a.id
        case 'title':
          return a.title.localeCompare(b.title)
        case 'titleDesc':
          return b.title.localeCompare(a.title)
        case 'price':
          return a.price - b.price
        case 'priceDesc':
          return b.price - a.price
        default:
          return a.id - b.id
      }
    });
    setSortingType(sort);
    setNavData(sorted);
  }

  return (
    <div>
      <select className="select__sorting" value={sortingType} onChange={(e) => sortData(e.target.value)}>
        { order.map(el => (<option value={ el.value } key={ el.value }>{ el.description }</option>)) }
      </select>
    </div>
  )
};