import { useContext } from "react";
import { useParams  } from "react-router-dom";

import ContextData from "../ContextData";

export default function UserGallery() {

  const { navData } = useContext(ContextData);
  const { dataUser } = useParams();

  return(
    <div className="container container__content">
      Lalo
      { navData.filter(data => data.userId === dataUser).map(filtered => (
          <div key={filtered.id} className="gallery__ind container--flex">
            <img
              src={ filtered.imgSmall }
              alt={ filtered.name }
              className="gallery__ind--img"
            />
          </div>
      ))}
    </div>
  )
}