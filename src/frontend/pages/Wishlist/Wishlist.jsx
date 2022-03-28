import { ProductList } from "../../components";
import { v4 as uuid } from "uuid";
import "./Wishlist.css";
import {
  Monitor1,
  Monitor2,
  Chair1,
  Chair2,
} from "../../assets";
const products = [
  {
    _id: uuid(),
    name: "Samsung G5 68.58cm (27 Inches) WQHD QLED Gaming 144Hz Monitor",
    discountPrice: 23899,
    originalPrice: 30000,
    categoryName: "monitor",
    tag: "",
    savePercent: 37,
    img: Monitor1,
    rating: 3.7,
  },
  {
    _id: uuid(),
    name: "Asus TUF 68.58cm (27 Inches) Full HD Flat Panel Gaming 165Hz Monitor",
    discountPrice: 27499,
    originalPrice: 34999,
    categoryName: "monitor",
    tag: "",
    savePercent: 21,
    img: Monitor2,
    rating: 3.5,
  },
  {
    _id: uuid(),
    name: "Greysteel Massage Gaming Chair with Foot Rest & Computer Ergonomic Chair",
    discountPrice: 16300,
    originalPrice: 33000,
    categoryName: "chair",
    tag: "Limited Time Deal",
    savePercent: 51,
    img: Chair1,
    rating: 2.7,
  },
  {
    _id: uuid(),
    name: "Vertagear Racing Series S-Line SL1000 Gaming Chair Black/Blue Edition",
    discountPrice: 29999,
    originalPrice: 33999,
    categoryName: "chair",
    tag: "",
    savePercent: 12,
    img: Chair2,
    rating: 4.1,
  },
];
const Wishlist = () => {
  return <ProductList products={products} page={"Wishlist"} />;
};

export { Wishlist };
