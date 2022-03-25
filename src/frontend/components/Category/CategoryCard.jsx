const CategoryCard = ({ img, categoryName, imgAltText, imgId }) => {
  return (
    <section className="featured-card card-wrapper my-8">
      <div className="px-4 py-2">
        <img
          className="img-responsive d-block m-auto"
          id={imgId}
          src={img}
          alt={imgAltText}
        />
      </div>

      <div className="p-2">
        <p className="category-card-heading font-wt-bold text-center">
          {categoryName}
        </p>
      </div>
    </section>
  );
};
export { CategoryCard };
