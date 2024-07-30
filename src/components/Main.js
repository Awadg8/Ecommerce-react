import React from "react";
import { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/productContext";

function Main() {
  const { products } = useContext(ProductContext);

  const [currentSlide, setCurrentSlide] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(window.innerWidth);
  const [showProduct, setShowProduct] = useState(true);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [showSliderAndAbout, setShowSliderAndAbout] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showRecommandation, setShowRecommandation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setViewportHeight(window.innerWidth - 100);
      } else if (window.innerWidth < 768) {
        setViewportHeight(window.innerWidth - 440);
      } else if (window.innerWidth < 850) {
        setViewportHeight(window.innerWidth - 500);
      } else if (window.innerWidth < 1000) {
        setViewportHeight(window.innerWidth - 570);
      } else if (window.innerWidth < 1150) {
        setViewportHeight(window.innerWidth - 670);
      } else if (window.innerWidth < 1280) {
        setViewportHeight(window.innerWidth - 770);
      } else {
        setViewportHeight(window.innerWidth - 870);
      }
    };

    window.addEventListener("resize", handleResize);

    const intervalId = setInterval(handleResize, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
    };

    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const handleProductClick = (product) => {
    setShowSliderAndAbout(false);
    setShowProductDetails(true);
    setShowRecommandation(true);
    setShowProduct(false);
    setSelectedProduct(product);
  };

  const handleNextProductClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % products.length);
  };

  const handlePrevProductClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 4 : prevIndex - 4
    );
  };

  return (
    <div>
      <main className="main block">
        {/* slide animation start here */}
        {showSliderAndAbout && (
          <div>
            <section className="block">
              <div>
                <div
                  className="slideshow select-none h-auto relative overflow-visible"
                  style={{ color: "#ffffff" }}
                >
                  <div
                    className="flickity-viewport relative overflow-hidden w-full touch-pan-y h-full"
                    style={{ height: viewportHeight }}
                  >
                    <div className="flickity-slider absolute w-full h-full will-change-transform">
                      <div
                        className={`slide ${
                          currentSlide === 1 ? "active" : ""
                        }`}
                      >
                        <a
                          className="slideshow-slide absolute text-[#ffffff] h-auto block w-full"
                          href="/"
                        >
                          <div className="slideshow-slide-inner relative block w-auto h-auto text-center top-0 left-0 bg-cover bg-center">
                            <div
                              className="aspect-ratio-phone hidden sm:block relative mx-auto"
                              style={{ paddingBottom: "33.33%" }}
                            >
                              <img
                                className=" absolute h-full w-full max-w-full max-h-full top-0 left-0 border-none align-top"
                                alt=""
                                src="https://shop.parallellearning.in/cdn/shop/files/Product_Banner_Samples_1_42c5397c-3cc9-4d50-a960-3d04c4e07946_1400x.jpg?v=1702054378"
                              ></img>
                            </div>

                            <div
                              className="aspect-ratio-tablet sm:hidden relative mx-auto"
                              style={{ paddingBottom: "86.11%" }}
                            >
                              <img
                                className=" absolute h-full w-full max-w-full max-h-full top-0 left-0 border-none align-top"
                                alt=""
                                src="https://shop.parallellearning.in/cdn/shop/files/Final_Mobile_Banners_for_PARALLEL_LEARNING_2_600x.jpg?v=1702098824"
                              ></img>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div
                        className={`slide ${
                          currentSlide === 2 ? "active" : ""
                        }`}
                      >
                        <a
                          className="slideshow-slide  slide-overlay absolute text-[#ffffff] h-auto block w-full"
                          href="/"
                        >
                          <div className="slideshow-slide-inner relative block w-auto h-auto text-center top-0 left-0 bg-cover bg-center">
                            <div
                              className="aspect-ratio-phone hidden sm:block relative mx-auto"
                              style={{ paddingBottom: "33.33%" }}
                            >
                              <img
                                className=" absolute h-full w-full max-w-full max-h-full top-0 left-0 border-none align-top"
                                alt=""
                                src="https://shop.parallellearning.in/cdn/shop/files/Product_Banner_Samples_1_1400x.jpg?v=1693485875"
                              ></img>
                            </div>

                            <div
                              className="aspect-ratio-tablet sm:hidden relative mx-auto"
                              style={{ paddingBottom: "86.11%" }}
                            >
                              <img
                                className=" absolute h-full w-full max-w-full max-h-full top-0 left-0 border-none align-top bg-cover"
                                alt=""
                                src="https://shop.parallellearning.in/cdn/shop/files/Final_Mobile_Banners_for_PARALLEL_LEARNING_600x.jpg?v=1693493061"
                              ></img>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div
                        className={`slide ${
                          currentSlide === 3 ? "active" : ""
                        }`}
                      >
                        <a
                          className="slideshow-slide absolute text-[#ffffff] h-auto block w-full"
                          href="/"
                        >
                          <div className="slideshow-slide-inner relative block w-auto h-auto text-center top-0 left-0 bg-cover bg-center">
                            <div
                              className="aspect-ratio-phone hidden sm:block relative mx-auto"
                              style={{ paddingBottom: "33.33%" }}
                            >
                              <img
                                className=" absolute h-full w-full max-w-full max-h-full top-0 left-0 border-none align-top"
                                alt=""
                                src="https://shop.parallellearning.in/cdn/shop/files/Product_Banner_Samples_1400x.jpg?v=1695624342"
                              ></img>
                            </div>

                            <div
                              className="aspect-ratio-tablet sm:hidden relative mx-auto"
                              style={{ paddingBottom: "86.11%" }}
                            >
                              <img
                                className=" absolute h-full w-full max-w-full max-h-full top-0 left-0 border-none align-top bg-cover"
                                alt=""
                                src="https://shop.parallellearning.in/cdn/shop/files/Final_Mobile_Banners_for_PARALLEL_LEARNING_bdf133f9-267c-4a8b-9ca2-164006056bf4_600x.jpg?v=1695624365"
                              ></img>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <ol className="flickity-page-dot bottom-[30px] absolute w-full p-0 list-none text-center leading-[0px] sm:mb-[60px] md:mb-[80px] lg:mb-[80px] xl:mb-10">
                    <li
                      className={`dot w-3 h-3 mx-2 border-solid border-[3px] border-[#ffffff] rounded-full transform-none relative inline-block cursor-pointer ${
                        currentSlide === 1 ? "bg-[#10b59f]" : "bg-[#ffffff]"
                      }`}
                      onClick={() => goToSlide(1)}
                    ></li>

                    <li
                      className={`dot w-3 h-3 mx-2 border-solid border-[3px] border-[#ffffff] rounded-full transform-none relative inline-block cursor-pointer ${
                        currentSlide === 2 ? "bg-[#10b59f]" : "bg-[#ffffff]"
                      }`}
                      onClick={() => goToSlide(2)}
                    ></li>

                    <li
                      className={`dot w-3 h-3 mx-2 border-solid border-[3px] border-[#ffffff] rounded-full transform-none relative inline-block cursor-pointer ${
                        currentSlide === 3 ? "bg-[#10b59f]" : "bg-[#ffffff]"
                      }`}
                      onClick={() => goToSlide(3)}
                    ></li>
                  </ol>
                </div>
              </div>
            </section>
          </div>
        )}

        {showProductDetails && <ProductCard product={selectedProduct} />}

        {/* product start here */}
        {showRecommandation && (
          <div className="container max-w-[1480px] mx-auto px-5 sm:px-10 mt-12 mb-10 sm:mt-16 sm:mb-12">
            <header className=" flex justify-between items-baseline mb-4 overflow-hidden sm:overflow-visible sm:mb-5">
              <h2 className=" text-[21px] sm:text-[22px] leading-[1.5] font-semibold text-[#48484d]">
                You may also like
              </h2>
            </header>

            <div className=" scroller overflow-x-auto overflow-y-hidden overflow-scroll whitespace-nowrap no-scrollbar">
              <div className="group-item relative flex-nowrap flex overflow-visible w-full z-[1]">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer relative p-5 min-w-0 whitespace-normal flex-shrink-0 flex flex-col w-[50%] sm:w-[34%] lg:w-[25%] border border-[#e1e3e4]"
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                      transition: "transform 0.8s ease-in-out",
                    }}
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>

                    <h3 className="mt-4 text-sm text-gray-700">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-lg font-medium text-gray-900">
                      ₹{product.price}
                    </p>
                  </div>
                ))}

                <button
                  className="btn-previous hidden lg:inline-flex absolute justify-center opacity-0 items-center w-[50px] h-[50px] top-[calc(50%+65px)] visible rounded-full bg-[#abb1b4] scale-[0.7] z-[1] hover:bg-[#48484d] left-1"
                  onClick={handlePrevProductClick}
                  disabled={currentIndex === 0}
                >
                  <svg
                    className="flickity-button-icon relative w-[15px] h-[15px] fill-white align-middle"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                      className="arrow"
                    ></path>
                  </svg>
                </button>

                <button
                  className="btn-next hidden lg:inline-flex absolute justify-center opacity-0 items-center w-[50px] h-[50px] top-[calc(50%+65px)] visible rounded-full bg-[#abb1b4] scale-[0.7] z-[1] right-[3px] hover:bg-[#48484d]"
                  type="button"
                  onClick={handleNextProductClick}
                >
                  <svg
                    className="flickity-button-icon relative w-[15px] h-[15px] fill-white align-middle"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                      className="arrow"
                      transform="translate(100, 100) rotate(180) "
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {showProduct && (
          <div className="bg-white flex justify-center">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:pb-16 sm:pt-8 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <a
                    key={product.id}
                    href={product.href}
                    className="group cursor-pointer border border-solid border-[#e1e3e4] p-[10px] rounded"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>

                    <h3 className="mt-4 text-sm text-gray-700">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-lg font-medium text-gray-900">
                      ₹{product.price}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* About Us start here */}
        {showSliderAndAbout && (
          <div className="about-us">
            <div className="px-[30px] pb-[50px]">
              <h1
                style={{ textAlign: "center", padding: "20px 20px 0px 20px" }}
              >
                {}
              </h1>

              <div className="faq-container m-auto max-w-[1000px]">
                <div className="faq-container-item rounded-lg overflow-hidden mb-[10px]">
                  <input
                    type="checkbox"
                    id="tab1"
                    style={{ display: "none" }}
                    className="toggle"
                  />

                  <label
                    htmlFor="tab1"
                    className="faq-question rounded-lg flex font-bold bg-[#30c9a7] justify-between py-[15px] px-5 text-[#ffffff] text-lg"
                  >
                    About Us
                  </label>

                  <div className="faq-answer relative w-full px-5 h-0 opacity-0 overflow-hidden invisible">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source.
                    </p>
                  </div>
                </div>

                <div className="faq-container-item rounded-lg overflow-hidden mb-[10px]">
                  <input
                    type="checkbox"
                    id="tab2"
                    className="toggle"
                    style={{ display: "none" }}
                  />

                  <label
                    htmlFor="tab2"
                    className="faq-question rounded-lg flex font-bold bg-[#30c9a7] justify-between py-[15px] px-5 text-[#ffffff] text-lg"
                  >
                    Terms And Conditions
                  </label>

                  <div className="faq-answer relative w-full px-5 h-0 opacity-0 overflow-hidden invisible">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Contrary to
                      popular belief, Lorem Ipsum is not simply random text. It
                      has roots in a piece of classical Latin literature from 45
                      BC, making it over 2000 years old. Richard McClintock, a
                      Latin professor at Hampden-Sydney College in Virginia,
                      looked up one of the more obscure Latin words,
                      consectetur, from a Lorem Ipsum passage, and going through
                      the cites of the word in classical literature, discovered
                      the undoubtable source. Contrary to popular belief, Lorem
                      Ipsum is not simply random text. It has roots in a piece
                      of classical Latin literature from 45 BC, making it over
                      2000 years old. Richard McClintock, a Latin professor at
                      Hampden-Sydney College in Virginia, looked up one of the
                      more obscure Latin words, consectetur, from a Lorem Ipsum
                      passage, and going through the cites of the word in
                      classical literature, discovered the undoubtable source.
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Contrary to
                      popular belief, Lorem Ipsum is not simply random text. It
                      has roots in a piece of classical Latin literature from 45
                      BC, making it over 2000 years old. Richard McClintock, a
                      Latin professor at Hampden-Sydney College in Virginia,
                      looked up one of the more obscure Latin words,
                      consectetur, from a Lorem Ipsum passage, and going through
                      the cites of the word in classical literature, discovered
                      the undoubtable source. Contrary to popular belief, Lorem
                      Ipsum is not simply random text. It has roots in a piece
                      of classical Latin literature from 45 BC, making it over
                      2000 years old. Richard McClintock, a Latin professor at
                      Hampden-Sydney College in Virginia, looked up one of the
                      more obscure Latin words, consectetur, from a Lorem Ipsum
                      passage, and going through the cites of the word in
                      classical literature, discovered the undoubtable source.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Main;
