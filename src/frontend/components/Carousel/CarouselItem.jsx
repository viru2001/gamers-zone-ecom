import { Link } from "react-router-dom";
const CarouselItem = ({ img }) => {
  return (
    <div>
      <img alt="pc setup" className="carousel-image" src={img} />
      <div
        id="carousel-content"
        className="p-absolute d-flex flex-col align-center legend"
      >
        <h2 id="carousel-heading" className="headline-xl">
          Build Your Dream PC Setup
        </h2>
        <button
          type="button"
          id="carousel-btn"
          className="btn btn-primary btn-link rounded-sm text-md p-5"
        >
          <Link to="/products">Explore</Link>
        </button>
      </div>
    </div>
  );
};
export { CarouselItem };
