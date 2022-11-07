import Images from "../images";

export default function About() {

  return(
    <div className="container container__content">
      <img src={ Images.Us } className="images__us" alt="Our Team" />
      <h2>About us</h2>
      <div className="about">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong>. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>

        <p>Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <strong>Mauris massa</strong>. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.</p>
      </div>

    </div>
  )
}