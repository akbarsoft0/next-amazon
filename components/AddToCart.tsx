"use client";

import { addToCart } from "@redux/nextSlice";
import { useDispatch } from "react-redux";

const AddToCart = ({ p }: any) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(addToCart(p))}
      className="h-10 min-w-[150px] capitalize font-medium bg-a_blue text-white rounded-md hover:bg-a_yellow hover:text-black duration-300 mt-2"
    >
      add to cart
    </button>
  );
};

export default AddToCart;
