"use client";
import React, { useEffect } from "react";
import logo from "@public/assets/icons/logo.png";
import cart from "@public/assets/icons/cartIcon.png";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineSearch } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "@type";
import { useSession, signIn } from "next-auth/react";
import { addUser, removeUser } from "@redux/nextSlice";

const Header = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  // dispatch(removeUser());
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
  }, [session, dispatch]);
  const { productData, favoriteData, userInfo } = useSelector(
    (e: StateProps) => e.next
  );
  return (
    <header className="hidden lg:flex h-20 bg-a_blue text-lightText sticky top-0 z-50 items-center mdl:gap-3 justify-evenly">
      {/* logo */}
      <Link
        href={"/"}
        className="w-28 h-12 my-auto p-2 border border-transparent hover:border-white cursor-pointer"
      >
        <Image src={logo} alt="logo" />
      </Link>
      {/* location */}
      <div className="text-xs flex items-center gap-2 border border-transparent hover:border-white p-2  cursor-pointer">
        <FaLocationDot />
        <div className="text-s capitalize">
          <p>dilever to</p>
          <p className="text-white font-bold uppercase">usa</p>
        </div>
      </div>
      {/* search bar */}
      <div className="hidden relative h-10 flex-1 md:inline-flex">
        <input
          type="text"
          placeholder="search products"
          className="px-2 h-full w-full rounded-md placeholder:text-sm capitalize text-base text-black border-[3px] border-transparent outline-none focus-visible:border-a_yellow"
        />
        <span className="w-12 h-full text-black bg-a_yellow text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md cursor-pointer">
          <HiOutlineSearch />
        </span>
      </div>
      {/* sign in */}
      {userInfo ? (
        <div className="between text-xs capitalize p-2 border border-transparent hover:border-white  cursor-pointer">
          <Image
            src={userInfo.image}
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-xs text-gray-100 ">
            <h3 className="text-white font-bold">{userInfo.name}</h3>
            <h4>{userInfo.email}</h4>
          </div>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="text-xs capitalize p-2 border border-transparent hover:border-white  cursor-pointer"
        >
          <p>Hello, sign in</p>
          <p className="text-white flex items-center">
            acounts & lists{"  "}
            <span>
              <AiFillCaretDown />
            </span>
          </p>
        </div>
      )}

      {/* favorite */}
      <Link
        href={"/favorite"}
        className="text-xs capitalize p-2 border border-transparent hover:border-white relative"
      >
        <p>marked</p>
        <p className="text-white cursor-pointer">& favorite</p>
        {favoriteData.length ? (
          <span className="absolute right-1 top-1 w-4 h-4 text-a_yellow border-[1px] border-gray-400 text-xs text-center  ">
            {favoriteData.length}
          </span>
        ) : null}
      </Link>
      {/* cart */}
      <Link
        href={"/cart"}
        className="flex items-center text-xs capitalize p-2 cursor-pointer border border-transparent hover:border-white relative"
      >
        <Image className="w-auto object-cover h-8" src={cart} alt="cart" />
        <p className="text-xs text-white font-bold mt-3">cart</p>
        <span className="absolute top-2 left-[30px] text-a_yellow font-semibold">
          {productData ? productData.length : 0}
        </span>
      </Link>
    </header>
  );
};

export default Header;
