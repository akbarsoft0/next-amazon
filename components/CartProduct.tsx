"use client";
import { ProductProps } from "@type";
import Image from "next/image";
import React from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@redux/nextSlice";
interface CartProductProps {
  item: ProductProps;
}

const CartProduct = ({ item }: CartProductProps) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 px-2">
      <Image width={150} height={150} src={item.image} alt="productImage" />
      <div>
        <h2 className="uppercase font-semibold text-a_blue">{item.title}</h2>
        <p className="text-sm text-gray-600">{item.description}</p>
        <p className="text-sm text-gray-600 uppercase font-semibold">
          unit price{" "}
          <span className="text-a_blue">
            <FormattedPrice amount={item.price} />
          </span>
        </p>
        <div className="flex items-center gap-6 mt-2 select-none">
          <div className="flex items-center justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300 ">
            <span
              onClick={() => dispatch(decreaseQuantity(item))}
              className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
            >
              <LuMinus />
            </span>
            <span>{item.quantity}</span>
            <span
              onClick={() => dispatch(increaseQuantity(item))}
              className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
            >
              <LuPlus />
            </span>
          </div>
          <div
            onClick={() => dispatch(deleteProduct(item._id))}
            className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 caret-purple-50 cursor-pointer duration-300"
          >
            <IoMdClose />
            <strong className="select-none">remove</strong>
          </div>
        </div>
      </div>
      <div className="text-lg font-semibold text-a_blue pr-2">
        <FormattedPrice amount={item.price * item.quantity} />
      </div>
    </div>
  );
};

export default CartProduct;
