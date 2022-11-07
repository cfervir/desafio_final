import { useNavigate } from "react-router-dom";

export default function NotFound() {

  const goBack = useNavigate();
 
  return (
    <div className="container container__content">
      <h2>There's nothing to see here!</h2>
      <p className="not-found">Let's go back and continue browsing for cool stuff!</p>
      <button className="btn btn--info-back btn--detail" onClick={ () => goBack(`/`) }>Go Back</button>
    </div>
  );
}