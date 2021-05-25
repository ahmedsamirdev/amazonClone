import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Banner() {
  return (
    <div className="relative ">
      <div className="absolute bottom-0 z-20 w-full h-52 bg-gradient-to-t from-gray-100 to-transparent" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src="/1.jpg" alt="" loading="lazy" />
        </div>
        <div>
          <img src="/2.jpg" alt="" loading="lazy" />
        </div>
        <div>
          <img src="/3.jpg" alt="" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
}
