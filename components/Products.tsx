import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import AddToCart from "./AddToCart";
import IconBox from "./IconBox";
import { ProductProps } from "@type";

interface State {
  item: object;
  quantity: number;
}

const products = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const data = await res.json();
  data.forEach((item: State) => (item.quantity = 1));

  return (
    <div className="px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-4 gap-6">
      {data.map((e: ProductProps) => (
        <div
          key={e._id}
          className="bg-white text-black border border-gray-300 rounded-lg group"
        >
          <div className="w-full h-[280px] relative overflow-hidden">
            <Image
              priority
              src={e.image}
              alt="Product Image"
              width={300}
              height={260}
              className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
            />
            <IconBox p={e} />
            {e.isNew && (
              <p className="absolute top-2 right-1 text-a_blue font-medium text-xs tracking-wide animate-bounce">
                !save
                <FormattedPrice amount={e.oldPrice - e.price} />
              </p>
            )}
          </div>
          <hr />
          <div className="px-4 py-3 flex flex-col gap-1">
            <p className="text-xs text-gray-500 tracking-wide">{e.category}</p>
            <p className="text-base font-medium">{e.title}</p>
            <p className="flex items-center gap-2">
              <span className="text-sm line-through">
                <FormattedPrice amount={e.oldPrice} />
              </span>
              <span className="text-a_blue font-semibold">
                <FormattedPrice amount={e.price} />
              </span>
            </p>
            <p className="text-xs text-gray-600 text-justify">
              {e.description.substring(0, 120)}
            </p>
            <AddToCart p={e} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default products;
