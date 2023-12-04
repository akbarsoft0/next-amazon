import FormattedPrice from "@components/FormattedPrice";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

import AddToCart from "@components/AddToCart";
import { deleteFav } from "@redux/nextSlice";
import { useDispatch } from "react-redux";

const FavoriteProduct = ({ item }: any) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="md:flex items-center gap-2 px-2">
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
            <div onClick={() => dispatch(deleteFav(item._id))}>
              <AddToCart p={item} />
            </div>
            <div
              onClick={() => dispatch(deleteFav(item._id))}
              className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 caret-purple-50 cursor-pointer duration-300"
            >
              <IoMdClose />
              <strong className="select-none capitalize">remove</strong>
            </div>
          </div>
        </div>
        <div className="text-lg font-semibold text-a_blue pr-2">
          <FormattedPrice amount={item.price} />
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
