"use client";
import CartProduct from "@components/CartProduct";
import ResetCart from "@components/ResetCart";
import { ProductProps, StateProps } from "@type";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { productData } = useSelector((state: StateProps) => state.next);
  return (
    <section className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4 ">
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
                className="bg-gray-100 rounded-lg flex items-center mt-3 gap-4"
              >
                <CartProduct item={item} />
              </div>
            ))}
            <ResetCart />
          </div>
        </>
      ) : (
        <div>
          <h1>your cart is empty</h1>
          <button>go to shopping</button>
        </div>
      )}
    </section>
  );
};

export default Cart;
