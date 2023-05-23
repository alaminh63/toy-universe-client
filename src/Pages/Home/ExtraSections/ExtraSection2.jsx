import React from "react";

const ExtraSection2 = () => {
  return (
    <div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 background-radial-gradient">
          <style>
            {`
          .background-radial-gradient {
            background-color: hsl(218, 41%, 15%);
            background-image: radial-gradient(
              650px circle at 0% 0%,
              hsl(218, 41%, 35%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
            ),
            radial-gradient(
              1250px circle at 100% 100%,
              hsl(218, 41%, 45%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
            );
          }
          `}
          </style>
          <div className="px-6  py-12 md:px-12 text-center lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                <div className="mt-12 lg:mt-0">
                  <h1
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-12"
                    style={{ color: "hsl(218, 81%, 95%)" }}
                  >
                    The best offer <br />
                    <span style={{ color: "hsl(218, 81%, 75%)" }}>
                      for your business
                    </span>
                  </h1>
            
                  <a
                    className="inline-block px-7 py-3 mr-2 bg-gray-200 text-gray-700 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Get started
                  </a>
                  <a
                    className="inline-block px-7 py-3 bg-transparent text-white font-medium text-sm leading-snug uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    See More Details
                  </a>
                </div>
                <div className="mb-12 lg:mb-0">
                  <img
                    src="https://i.ytimg.com/vi/EpwRFsSoMAI/maxresdefault.jpg"
                    className="w-full h-72 rounded-lg shadow-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExtraSection2;
