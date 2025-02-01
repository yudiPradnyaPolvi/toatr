import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";

export default function ImageCarousel() {
  const swiperRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000, // 3 seconds
          disableOnInteraction: false, // Continue autoplay after manual interaction
        }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="pemandangan1.jpeg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="pemandangan1.jpeg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="pemandangan1.jpeg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
