import "../css/components/ImageSlider.css";

export default function ImageSlider() {
  return (
    <div className="img-slider-container">
      <div className="img-gradient-container">
        <div className="gradient"/>
        <img
          className="img-main"
          src={process.env.PUBLIC_URL + "/assets/images/main.png"}
          alt="electrician"
        />
      </div>
      <div className="img-text">
        This is img text <br />
        More text
      </div>
    </div>
  );
}
