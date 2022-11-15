import { useContext } from "react";

import ContextUser from "../ContextUser";

export default function Modal() {

  const { modal, modalMsg, toggleModal } = useContext(ContextUser);
  console.log(modalMsg);

  return (
    <>
      {modal ?
        <div className="modal">
          <div onClick={toggleModal} className="modal__overlay">
            <div className="modal__content">
              <h2>{modalMsg[0].title}</h2>
              <p>{modalMsg[0].content}</p>
              <button onChange={toggleModal} className="modal__button">X</button>
            </div>
          </div>
        </div>
      : '' }
    </>
  )
};