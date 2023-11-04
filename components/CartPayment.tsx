import { SiMediamarkt } from "react-icons/si";
import FormattedPrice from "./FormattedPrice";
import { useSelector } from "react-redux";
import { StateProps, ProductProps } from "@type";
import { useEffect, useState } from "react";

const CartPayment = () => {
  const { productData } = useSelector((state: StateProps) => state.next);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: ProductProps) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotal(amt);
  }, [productData]);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          your order qualifies for free shipping by choosing this option at
          checkout. see details...
        </p>
      </div>
      <p className="between uppercase font-semibold">
        total:{" "}
        <span className="font-bold text-xl">
          <FormattedPrice amount={total} />
        </span>
      </p>
      <div className="center flex-col">
        <button className="w-52 h-10 m-auto capitalize bg-a_blue bg-opacity-50 text-white rounded text-sm font-semibold duration-300 hover:cursor-not-allowed">
          proceed to buy
        </button>
        <button className="text-xs mt-2 text-red-500 font-semibold animate-bounce">
          please login
        </button>
      </div>
    </div>
  );
};

export default CartPayment;
