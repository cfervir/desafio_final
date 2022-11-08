import { Link } from "react-router-dom";

export default function UserAddNew() {
  
  return (
    <form>
      <div className="input__label--container">
        <label htmlFor="user__title" className="input__label">Title</label>
        <input type="text" className="input input__form" name="user__title" placeholder="New title" />
      </div>
      <div className="input__label--container">
        <label htmlFor="user__description" className="input__label">Description</label>
        <input type="text" className="input input__form" name="user__description" placeholder="Short Description" />
      </div>
      <div className="input__wrap">
        <div className="input__label--container input__variable">
          <label htmlFor="user__category" className="input__label">Category</label>
          <select className="input input__form" name="user__category">
            <option defaultValue="0">Choose one</option>
            <option defaultValue="1">Originals</option>
            <option defaultValue="2">Anime/Manga</option>
            <option defaultValue="3">Fantasy</option>
            <option defaultValue="4">Terror</option>
            <option defaultValue="5">Movies</option>
          </select>
        </div>
        <div className="input__label--container input__variable">
          <label htmlFor="user__price" className="input__label">Price</label>
          <input type="number" className="input input__form" name="user__price" placeholder="Some number" />
        </div>
      </div>
      <div>
        <div className="input__upload container--flex">
          <div className="input__label--container input__upload">
            <label htmlFor="user__file" className="input__label">Password</label>
            <input type="text" className="input input__form" name="user__file" placeholder="Your file..." />
          </div>
          <div className="input__label--container">
            <button className="btn btn__mag btn__upload">Load</button>
          </div>
        </div>
        <p className="input__warning">* Files can only be a JPG, SVG or PNG width a max. size of 5MB.</p>
      </div>
      <div className="input__final container--flex">
        <div className="input__image">
          <div className="input__image--prev">PREVIEW</div>
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
          <div className="input__label--sub">
            <input type="checkbox" name="submit__mature" />
            <label htmlFor="submit__mature" className="form__submit">This has <strong className="form__purple">mature content.</strong></label>
          </div>
          <button className="btn btn__width btn__blue btn__add btn__add--new">Upload</button>
        </div>
      </div>
    </form>
  )
}