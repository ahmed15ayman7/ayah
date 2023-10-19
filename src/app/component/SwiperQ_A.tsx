"use client";
import QCard from "./QCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { ItemsQ } from "../../assets/Quran-Json/Quran";
import { Button, Card } from "react-bootstrap";
import { useRouter } from "next/navigation";

const SwiperQ_A = ({ n }: { n: number }) => {
  let navigate = useRouter();

  const breakpoints = {
      0: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      730: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      974: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      1030: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
    },
    autoplay = {
      delay: 10000 + n * 100,
      disableOnInteraction: true,
      waitForTransition: true,
    };
  return (
    <Swiper
      style={{
        position: "relative",
        "--swiper-navigation-position": "absolute",
        "--swiper-navigation-color": "#000000",
        "--swiper-pagination-color": "#000000",
        padding: " 25px 20px ",
      }}
      modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={35}
      slidesPerView={4}
      navigation
      autoplay={autoplay}
      breakpoints={breakpoints}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      onSwiper={() => {}}
      onSlideChange={() => {}}>
      {ItemsQ.slice(n, n + 10).map((e, i) => (
        <SwiperSlide key={i}>
          <QCard
            id={e.id}
            title={e.name}
            type={e.type}
            numAyat={e.array.length}
          />
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <div>
          <h3
            className="text-center mb-2 text-white"
            style={{
              textShadow: "1px 1px #000000",
              textDecoration: "overline",
            }}>
            0
          </h3>
          <Card
            className="text-center "
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "25px",
              boxShadow: "0 0 25px 0 #3D3D3D",
            }}>
            <Card.Body className="p-5 pb-3 mb-5">
              <Button
                className="btn-Q mb-2 mt-2"
                onClick={() => navigate.push("/al-quran/all")}>
                المزيد
              </Button>
            </Card.Body>
          </Card>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperQ_A;
