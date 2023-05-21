import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-2 lg:px-28 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://www.sideshow.com/cdn-cgi/image/height=850,quality=90,f=auto/https://www.sideshow.com/storage/product-images/903595/doctor-strange_marvel_gallery_5c4c5320ef6e7.jpg"
                data-aos="zoom-out-up"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://blogger.googleusercontent.com/img/a/AVvXsEiqBShbng64OFaQE1W8eoFdakeO-LJCFcyo4715GVtoIlRFjW2lA2xN7qy5ToZHhas6O5-QsLlOPWD5nQr6Cw5n4VuSix8ZWvGdWVBfMx3ANW_8-11JKhS9hCh0yZVxkZVkGbNxnCCMwEwrshok1W7OIITv2RBUxet48cyG4-DOupBHSRWTa3S5WzeTcg=w640-h564"
                data-aos="zoom-out-up"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/9736e58216275e0e840357f18d6062c7.jpg"
                data-aos="zoom-out-up"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://news.tfw2005.com/wp-content/uploads/sites/10/2020/02/DSC00049-1278x665.jpg"
                data-aos="zoom-out-up"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJiveUQLAV9g_lrfyMIX9LmrlvOkC0kLlNw&usqp=CAU"
                data-aos="zoom-out-up"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://momlovesbest.com/wp-content/uploads/2020/08/Best-Spiderman-Toys-e1598620970603.webp"
                data-aos="zoom-out-up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
