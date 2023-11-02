import logo from "@public/assets/icons/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-20 bg-a_light text-gray-300 capitalize flex items-center justify-center gap-4">
      <Image className="w-24" src={logo} alt="logo" />
      <p className="text-sm -mt-4">
        &copy; all rights reserved{" "}
        <a
          className="hover:text-white hover:underline decoration-[1px] cursor-pointer"
          href="https://akbar63.netlify.app/"
        >
          @Mohammad Akbar
        </a>
      </p>
    </footer>
  );
};

export default Footer;
