import { useState } from "react";
import aboutUsImg from "../AboutUs/aboutUs.jpg";

const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <div className="container spinner">
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader">
            <div className="loader loader-inner"></div>
          </div>
        </div>
      ) : (
        <div
          className="about"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
          }}
        >
          <img src={aboutUsImg} alt="aboutUsImg" className="aboutImg" />
          <p className="aboutText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            officiis. Molestias modi cumque quidem tenetur molestiae minima
            atque est? Dicta saepe perferendis vero eius incidunt voluptatibus
            cupiditate illo. Molestiae, quia.
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
