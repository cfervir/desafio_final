import { Link } from "react-router-dom";

import AllProducts from "../components/AllProducts";
import Images from "../images";

export default function Home() {

  return(
    <div className="container container__content">
      <Link to="/category/terror">
        <img src={Images.Banner} alt="Mask Season Incoming" className="gallery__banner" />
      </Link>
      <AllProducts />
    </div>
  )
}