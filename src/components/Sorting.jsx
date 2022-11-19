import { useContext } from "react";

import ContextData from "../ContextData";

export default function Sorting() {

  const { navData, setNavData } = useContext(ContextData);

  const sortData = (types) => {
    const order = {
      0: 'id',
      1: 'idDesc',
      2: 'title',
      3: 'titleDesc',
      4: 'price',
      5: 'priceDesc'
    };

    const orderProperty = order[types];
    console.log(orderProperty);

    const sorted = navData.slice().sort((a, b) => {
      if (orderProperty === 'idDesc') {
        return b.id - a.id
      } else if (orderProperty === 'title') {
        return a[orderProperty].localeCompare(b[orderProperty])
      } else if (orderProperty === 'titleDesc') {
        return b.title.localeCompare(a.title)
      } else if (orderProperty === 'priceDesc') {
        return b.price - a.price
      } else {
        return a[orderProperty] - b[orderProperty]
      }
    });
    setNavData(sorted);
  };

  return (
    <div>
      <select className="select__sorting" defaultValue={0} onChange={(e) => sortData(e.target.value)}>
        <option value={0}>Default</option>
        <option value={1}>Latest</option>
        <option value={2}>Title [A-Z]</option>
        <option value={3}>Title [Z-A]</option>
        <option value={4}>Price $▼</option>
        <option value={5}>Price $▲</option>
      </select>
    </div>
  )
};