import { Link } from "react-router-dom";
import { CategoryCard } from "./CategoryCard";
import "./Category.css";
import { useState, useEffect } from "react";
import axios from "axios";

const CategoryContainer = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const categoriesResponse = await axios.get("/api/categories");
        setCategories(categoriesResponse.data.categories);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <>
      <h2 className="headline-lg text-center my-8" id="featured-heading">
        Featured Categories
      </h2>

      <section className="d-flex flex-wrap justify-around">
        {categories &&
          categories.map(({ id, img, categoryName, imgAltText, imgId }) => {
            return (
              <Link key={id} to="/products" className="text-dec-none">
                <CategoryCard
                  img={img}
                  categoryName={categoryName}
                  imgAltText={imgAltText}
                  imgId={imgId}
                />
              </Link>
            );
          })}
      </section>
    </>
  );
};

export { CategoryContainer };
