import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

type Props = {
  movie: {
    name: string;
    desc: string;
    titleImage: string;
    image: string;
    category: string;
    language: string;
    year: string;
    time: string;
    video: string;
    rate: number;
    reviews: number;
  };
};

const Movie = ({ movie }: Props) => {
  return (
    <section className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
      <Link
        href={`/movies/${movie.name}`}
        className="w-full"
        passHref
        legacyBehavior
      >
        <a className="relative h-64 w-full block">
          <Image
            src={`/images/movies/${movie.image}`}
            alt={movie.name}
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </a>
      </Link>
      <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
        <h3 className="font-semibold truncate">{movie.name}</h3>
        <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white">
          <FaHeart/>
        </button>
      </div>
    </section>
  );
};

export default Movie;
