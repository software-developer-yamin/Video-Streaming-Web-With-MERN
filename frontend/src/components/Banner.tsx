import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { moviesData } from "@/data/movies";
import Image from "next/legacy/image";
import FlexMovieItems from "./FlexMovieItems";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

type Props = {};

const Banner = (props: Props) => {
  return (
    <header className="relative w-full">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        modules={[Autoplay]}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48"
      >
        {moviesData
          .slice(0, 6)
          .map(({ image, titleImage, name, category, year, time }, index) => (
            <SwiperSlide
              key={index}
              className="relative rounded overflow-hidden"
            >
              <section className="w-full h-full relative">
                <Image
                  src={`/images/movies/${image}`}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  loading="lazy"
                />
              </section>
              <section className="absolute xl:pl-52 sm:pl-32 top-0 pl-8 bottom-0 flex flex-col justify-center right-0 left-0 lg:gap-8 md:gap-5 gap-4 linear-bg">
                <h1 className="xl:text-4xl capitalize font-sans sm:text-2xl text-xl font-bold truncate">
                  {name}
                </h1>
                <div className="flex gap-5 items-center text-dryGray">
                  <FlexMovieItems category={category} year={year} time={time} />
                </div>
                <div className="flex gap-5 items-center">
                  <Link
                    href={`/movie/${name}`}
                    className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
                  >
                    Watch
                  </Link>
                  <button className="bg-white hover:text-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30">
                    <FaHeart />
                  </button>
                </div>
              </section>
            </SwiperSlide>
          ))}
      </Swiper>
    </header>
  );
};

export default Banner;
