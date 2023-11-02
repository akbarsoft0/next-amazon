"use client";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";
import { addToCart, addToFavorite } from "@redux/nextSlice";
import { useDispatch } from "react-redux";

const IconBox = ({ p }: any) => {
  p.quantity = 1;
  const dispatch = useDispatch();
  return (
    <div className="w-12 h-24 absolute bottom-10 right-2 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
      <span
        onClick={() => dispatch(addToCart(p))}
        className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl hover:bg-a_yellow cursor-pointer"
      >
        <HiShoppingCart />
      </span>
      <span
        onClick={() => dispatch(addToFavorite(p))}
        className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl hover:bg-a_yellow cursor-pointer"
      >
        <FaHeart />
      </span>
    </div>
  );
};

export default IconBox;
