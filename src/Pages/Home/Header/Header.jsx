import React from "react";

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
        <div className="container bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)] h-full flex flex-col justify-center px-20">
          <div className="flex items-center">
            <div className="max-w-xl ">
              <h1 className="text-5xl text-white font-bold mb-4">
                Choose your favorite superhero Toys
              </h1>
              <p className="text-white mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                varius justo id arcu faucibus, vitae consectetur velit faucibus.
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
