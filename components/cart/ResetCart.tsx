import { useDispatch } from "react-redux";
import { resetCart } from "@redux/nextSlice";

const ResetCart = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(resetCart())}
        className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300 mt-3 select-none"
      >
        ResetCart
      </button>
    </div>
  );
};

export default ResetCart;
