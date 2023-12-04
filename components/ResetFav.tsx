import { resetFav } from "@redux/nextSlice";
import React from "react";
import { useDispatch } from "react-redux";

const ResetFav = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => dispatch(resetFav())}
        className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300 mt-3 select-none"
      >
        Reset Favorite
      </button>
    </>
  );
};

export default ResetFav;
