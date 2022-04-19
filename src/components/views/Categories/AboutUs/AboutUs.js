import { useState } from "react";

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
        <div>
          <h1>Nosotros</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            officiis. Molestias modi cumque quidem tenetur molestiae minima
            atque est? Dicta saepe perferendis vero eius incidunt voluptatibus
            cupiditate illo. Molestiae, quia.
          </h5>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
