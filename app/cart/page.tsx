"use client";
import { StateProps } from "@type";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { productData } = useSelector((state: StateProps) => state.next);
  return (
    <section className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4 ">
      {productData.length > 0 ? (
        <div></div>
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
