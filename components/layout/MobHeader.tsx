"use client";
import logo from "@public/assets/icons/logo.png";
import cart from "@public/assets/icons/cartIcon.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUser, FaRegHeart } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { HiOutlineSearch } from "react-icons/hi";
import Link from "next/link";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "@type";
import { useSession, signIn } from "next-auth/react";
import { addUser } from "@redux/nextSlice";
import { useEffect } from "react";

const MobHeader = () => {
  const { data: session } = useSession();
  console.log(session);
  const dispatch = useDispatch();
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);
  const { productData, favoriteData, userInfo } = useSelector(
    (e: StateProps) => e.next
  );
  console.log(userInfo);
  return (
    <header className="lg:hidden p-2 bg-a_blue text-white text-lg">
      <div className="between">
        <div className="center py-2">
          <div className="p-2 hover:scale-125 cursor-pointer">
            <LuMenu />
          </div>
          <div className="ps-2 cursor-pointer">
            <Image src={logo} alt="logo" height={25} />
          </div>
        </div>
        <ul className="center gap-3">
          {userInfo ? (
            <img
              src={userInfo.image}
              alt="user"
              className="w-6 h-6 rounded-full"
            />
          ) : (
            <li
              className="hover:scale-125 cursor-pointer"
              onClick={() => signIn()}
            >
              <FaUser />
            </li>
          )}
          <li className="hover:scale-125 text-2xl cursor-pointer relative">
            <FaRegHeart />
            <Link href={"/favorite"}>
              {favoriteData.length ? (
                <span className="absolute top-1 text-xs left-2 text-a_yellow">
                  {favoriteData.length}
                </span>
              ) : null}
            </Link>
          </li>
          <li className="hover:scale-125 cursor-pointer relative">
            {/* <MdOutlineShoppingCart /> */}
            <Link href={"/cart"} className="">
              <Image
                className="w-auto object-cover h-5"
                src={cart}
                alt="cart"
              />
              <span className="absolute -top-1 left-[12px] text-a_yellow text-xs">
                {productData ? productData.length : 0}
              </span>
            </Link>
          </li>
        </ul>
      </div>
      {/* search */}
      <div className="relative flex px-2">
        <input
          type="text"
          placeholder="search products"
          className="h-full w-full rounded-md placeholder:text-sm capitalize text-base text-black border-[3px] border-transparent outline-none focus-visible:border-a_yellow"
        />
        <span className="w-12 h-full text-black bg-a_yellow text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md cursor-pointer">
          <HiOutlineSearch />
        </span>
      </div>
    </header>
  );
};

export default MobHeader;
