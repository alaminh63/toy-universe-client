import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div
        className="relative bg-[center_top_-1rem]  h-[30rem] bg-cover bg-opacity-75"
        style={{
          backgroundImage:
            'url("https://w.forfun.com/fetch/28/281e9cd5a0353e8045ec41d2ddafbd7f.jpeg?w=1470&r=0.5625")',
        }}
      >
        <div className="container bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)] h-full flex flex-col justify-center md:px-20">
          <div className="flex items-center ml-12">
            <div className="max-w-xl ">
              <h1 className="text-5xl text-orange-500 font-bold mb-4">
                Experience the <br /> Thrill of Action Toys
              </h1>
              <p className="text-orange-200 mb-6">
                Discover and Shop Amazing Action Toys <br /> Unleash the
                Excitement with an Incredible Selection of Action Toys!
              </p>
              <button className="bg-orange-500 text-white py-2 px-4 rounded">
                <Link to="/alltoy">Visit Our Toy Collection</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
