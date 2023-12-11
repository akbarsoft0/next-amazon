"use client";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { ProductProps, StateProps } from "@type";
import CartProduct from "@components/CartProduct";
import ResetCart from "@components/ResetCart";
import CartPayment from "@components/CartPayment";

const Cart = () => {
  const { productData } = useSelector((state: StateProps) => state.next);
  return (
    <section className="max-w-screen-2xl mx-auto px-6 grid lg:grid-cols-5 gap-10 py-4 ">
      {productData.length > 0 ? (
        <>
          <div className="bg-white col-span-4 p-4 rounded-lg">
            <div className="border-b-[1px] border-b-gray-400 pb-1 flex items-baseline justify-between">
              <h2 className="capitalize text-2xl font-semibold text-a_blue">
                shoping cart
              </h2>
              <h3 className="text-lg font-semibold text-a_blue capitalize">
                subtitle
              </h3>
            </div>
            {productData.map((item: ProductProps) => (
              <div
                key={item._id}
                className="bg-gray-100 rounded-lg flex lg:flex-row flex-col items-center mt-3 gap-4"
              >
                <CartProduct item={item} />
              </div>
            ))}
            <ResetCart />
          </div>
          <div className="bg-white h-64 center flex-col p-5 rounded-lg shadow-lg ">
            <CartPayment />
          </div>
        </>
      ) : (
        <div className="bg-white h-64 col-span-5 center flex-col py-5 rounded-lg shadow-lg ">
          <h1 className="text-lg font-medium mb-1 capitalize">
            your cart is empty
          </h1>
          <Link href={"/"}>
            <button className="w-52 h-10 capitalize bg-a_blue text-white rounded text-sm font-semibold hover:bg-a_yellow hover:text-a_blue duration-300">
              go to shopping
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
