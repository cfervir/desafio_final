import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import ContextUser from "../ContextUser";
import ContextData from "../ContextData";

export default function UserAddNew() {

  const [ file, setFile ] = useState();
  const { useForm, isAuth, setModalMsg, toggleModal } = useContext(ContextUser);
  const { setNavData } = useContext(ContextData);

  const navigate = useNavigate();

  const initialState = {};
  const { values, changeHandler } = useForm(initialState);

  const uploadFile = e => {
    const newFile = URL.createObjectURL(e.target.files[0]);
    setFile(newFile);
  }

  const removeFile = (e) => {
    setFile();
  }

  const newPicture = (e) => {
    e.preventDefault();

    if (file !== undefined) {
      if (values.category === "Choose one!" || values.category === undefined) {
        toggleModal();
        setModalMsg([
          {
            title: 'Eeep!',
            content: 'You need to choose a category!'
          }
        ]);
      } else {
          setNavData(currentArt => [...currentArt, {
            user: isAuth.name,
            userId: isAuth.id,
            id: `${Date.now()}`,
            img: file,
            imgSmall: file,
            title: values.title,
            desc: values.desc,
            category: values.category,
            price: values.price
          }
        ])
        navigate("/user");

        toggleModal();
        setModalMsg([
          {
            title: 'Nice!',
            content: `${values.title} has been added!`
          }
        ]);
      }
    } else {
      toggleModal();
      setModalMsg([
        {
          title: 'Ooops!',
          content: 'The picture was removed, you need to add a new one!'
        }
      ]);
    }
  }
  
  return (
    <form onSubmit={newPicture}>
      <div className="input__label--container">
        <label htmlFor="title" className="input__label">Title</label>
        <input type="text" className="input input__form" name="title" onChange={changeHandler} maxLength="20" required placeholder="New title" />
      </div>
      <div className="input__label--container">
        <label htmlFor="desc" className="input__label">Description</label>
        <input type="text" className="input input__form" name="desc" onChange={changeHandler} maxLength="40" required placeholder="Short Description" />
      </div>
      <div className="input__wrap">
        <div className="input__label--container input__variable">
          <label htmlFor="category" className="input__label">Category</label>
          <select className="input input__form" name="category" required onChange={changeHandler}>
            <option>Choose one!</option>
            <option>Originals</option>
            <option>Fantasy</option>
            <option>Terror</option>
            <option>Movies</option>
          </select>
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="price" className="input__label">Price</label>
          <input type="number" className="input input__form" name="price" min="0" max="999" onChange={changeHandler} required placeholder="Some number" />
        </div>
      </div>
      <div>
        <div className="input__upload container--flex">
          <div className="input__label--container input__upload">
            <label htmlFor="file" className="input__label">Your file</label>
            <input type="file" accept=".jpg,.png" className="input input__form" name="file" required onChange={uploadFile} placeholder="Your file..." />
          </div>
        </div>
        <p className="input__warning">* Files can only be a JPG or PNG width a max. size of 5MB.</p>
      </div>
      <div className="input__final container--flex">
        <div className="input__image">
          { file === undefined ?
            <div className="input__image--prev">PREVIEW</div> :
            <div className="input__reset">
              <span className="input__reset--remove" onClick={removeFile}>X</span>
              <img src={file} alt="This will be uploaded!" />
            </div>
          }
        </div>
        <div className="input__checking">
          <div className="input__label--sub">
            <input type="checkbox" name="submit__eula" required />
            <label htmlFor="submit__eula" className="form__submit">I accept the <Link className="form__purple" to="/eula">terms and conditions of Impreza*</Link></label>
          </div>
          <div className="input__label--sub">
            <input type="checkbox" name="submit__owner" required />
            <label htmlFor="submit__owner" className="form__submit">I declare to be the <strong className="form__purple">owner of this file and its contents.</strong></label>
          </div>
          {/* <div className="input__label--sub">
            <input type="checkbox" name="submit__mature" />
            <label htmlFor="submit__mature" className="form__submit">This has <strong className="form__purple">mature content.</strong></label>
          </div> */}
          <button className="btn btn__width btn__blue btn__add btn__add--new">Upload</button>
        </div>
      </div>
    </form>
  )
}