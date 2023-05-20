import React from "react";

const NewCollection = () => {
  return (
    <div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Latest articles
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/051.jpg"
                className="w-full"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">I miss the sun</h5>
                      <p>
                        <small>
                          Published <u>13.01.2022</u> by Anna Maria Doe
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                className="w-full"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">
                        Adventure in the desert
                      </h5>
                      <p>
                        <small>
                          Published <u>12.01.2022</u> by Mark Equel
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/045.jpg"
                className="w-full"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">
                        Lonely mountain
                      </h5>
                      <p>
                        <small>
                          Published <u>10.01.2022</u> by Bilbo baggins
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/047.jpg"
                className="w-full"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">Let's go!</h5>
                      <p>
                        <small>
                          Published <u>09.01.2022</u> by Halley Frank
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/028.jpg"
                className="w-full"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">
                        A hut in the mountains
                      </h5>
                      <p>
                        <small>
                          Published <u>07.01.2022</u> by David Beak
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/049.jpg"
                className="w-full"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold text-lg mb-3">
                        Beautiful waterfall
                      </h5>
                      <p>
                        <small>
                          Published <u>04.01.2022</u> by Joe Svan
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewCollection;
