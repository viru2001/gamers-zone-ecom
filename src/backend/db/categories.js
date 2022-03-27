import { v4 as uuid } from "uuid";
import {
  MonitorCategoryImg,
  ChairCategoryImg,
  MouseCategoryImg,
  HeadphonesCategoryImg,
  KeyboardCategoryImg,
} from "../../frontend/assets";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Monitor",
    img: MonitorCategoryImg,
    imgAltText: "monitor image",
    imgId: "monitor-img",
  },
  {
    _id: uuid(),
    categoryName: "Gaming-Chair",
    img: ChairCategoryImg,
    imgAltText: "chair image",
    imgId: "chair-img",
  },
  {
    _id: uuid(),
    categoryName: "Keyboard",
    img: KeyboardCategoryImg,
    imgAltText: "keyboard image",
    imgId: "keyboard-img",
  },
  {
    _id: uuid(),
    categoryName: "Headphone",
    img: HeadphonesCategoryImg,
    imgAltText: "headphone image",
    imgId: "headphone-img",
  },
  {
    _id: uuid(),
    categoryName: "Mouse",
    img: MouseCategoryImg,
    imgAltText: "mouse image",
    imgId: "mouse-img",
  },
];
