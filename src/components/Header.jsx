import React from "react";
import Logo from "../../public/images/logo/logo-white.svg";
import Button from "../components/Button";

const Header = () => {
  return (
    <div className="bg-primary h-[328px]">
      <div className="w-full bg-primary fixed z-10">
        <div className="w-layout mx-auto flex justify-between items-center py-5">
          <div className="cursor-pointer">
            <img src={Logo} alt="myDukaan Logo" />
          </div>
          <div className="flex items-center">
            <a
              href="#"
              target="_blank"
              className="text-white galanoRegular text-lg"
            >
              Sign In
            </a>
            <Button
              className={`ml-8 text-primary galanoRegular text-lg bg-white py-3 px-6`}
              link="#"
              children="Dukaan for PC"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
