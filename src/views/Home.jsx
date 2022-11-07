import AllProducts from "../components/AllProducts";
import Images from "../images";

export default function Home() {

  return(
    <div className="container container__content">
      <img src={Images.Banner} alt="Mask Season Incoming" className="gallery__banner" />
      <AllProducts />
    </div>
  )
}