import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";

type IFlexMovieItems = {
  category: string;
  year: string;
  time: string;
};

const FlexMovieItems = ({ category, year, time }: IFlexMovieItems) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{category}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaRegCalendarAlt className="w-3 h-3 text-subMain" />
        <span className="text-sm font-medium">{year}</span>
      </div>
      <div className="flex items-center gap-2">
        <BiTime className="w-3 h-3 text-subMain" />
        <span className="text-sm font-medium">{time}</span>
      </div>
    </>
  );
};

export default FlexMovieItems;
