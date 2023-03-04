import React from "react";
import Titles from "./Titles";
import { BsCollectionFill } from "react-icons/bs";
import { moviesData } from "@/data/movies";
import Movie from "./Movie";

function PopularMovies() {
  return (
    <section className="my-16">
      <Titles title="Popular Movies" Icon={BsCollectionFill} />
      <main className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {moviesData.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </main>
    </section>
  );
}

export default PopularMovies;
