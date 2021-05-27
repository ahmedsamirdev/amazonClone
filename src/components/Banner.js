import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Banner() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute  bottom-0 z-20 w-full h-52 bg-gradient-to-t from-gray-100 to-transparent" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        width={1500}
      >
        <div>
          <Image width={1500} height={600} src="/1.jpg" alt="" loading="lazy" />
        </div>
        <div>
          <Image width={1500} height={600} src="/2.jpg" alt="" loading="lazy" />
        </div>
        <div>
          <Image width={1500} height={600} src="/3.jpg" alt="" loading="lazy" />
        </div>
        <div>
          <Image width={1500} height={600} src="/4.jpg" alt="" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
}
