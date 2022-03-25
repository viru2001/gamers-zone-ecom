import { Carousel } from "react-responsive-carousel";
import { CarouselItem } from "./CarouselItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import { SetupImg1, SetupImg2, SetupImg3, SetupImg4 } from "../../assets";
const MyCarousel = () => {
  const images = [SetupImg4, SetupImg1, SetupImg2, SetupImg3];
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
      emulateTouch={true}
      dynamicHeight={true}
    >
      {images.map((img, index) => (
        <CarouselItem img={img} key={index} />
      ))}
    </Carousel>
  );
};

export { MyCarousel };
