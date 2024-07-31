import React, { useState, useContext, useEffect } from "react";
import ImageZoom from "./ImageZoom";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [activeButton, setActiveButton] = useState(null);

  const handleAddToCart = () => {
    addToCart(product);
  };

  useEffect(() => {
    const size3Button = document.getElementById("size3");

    if (size3Button) {
      setActiveButton(size3Button);
      size3Button.classList.add("active");
    }
  }, []);

  const changeSizeBtn = (e) => {
    const clickedBtn = e.target;

    if (activeButton) {
      activeButton.classList.remove("active");
    }

    clickedBtn.classList.add("active");

    setActiveButton(clickedBtn);
  };

  const handleDecreaseQty = () => {
    const qty = document.getElementById("qty");
    const qtyValue = parseInt(qty.value, 10);
    if (qtyValue > 1) {
      qty.value = qtyValue - 1;
    }
  };

  const handleIncreaseQty = () => {
    const qty = document.getElementById("qty");
    const qtyValue = parseInt(qty.value, 10);
    qty.value = qtyValue + 1;
  };

  return (
    <div>
      <div className="container max-w-[1480px] mx-auto px-5 sm:px-10">
        <div className="product-block-list lg:relative">
          <div className="product-list-wrapper min-h-0 lg:min-h-[1048px]  lg:w-[calc(50%-15px)] lg:ml-0">
            <div className="product-list-item-gallery">
              <div className="card-left relative mb-[10px] bg-[#ffffff] border-t border-b border-solid border-[#e1e3e4] sm:rounded-[3px] sm:mb-[30px] sm:border">
                <div className="card-section relative p-5 sm:px-[25px]">
                  <div className="product-gallery relative mb-3 lg:flex lg:flex-row-reverse lg:items-start lg:w-full lg:min-h-[1048px]">
                    <div className="product-gallery-wrapper relative mb-[25px] lg:flex-grow  lg:basis-auto lg:mt-[10px] lg:mr-[5px] lg:mb-0 lg:ml-[42px]">
                      <div className="product-gallery-carousel lg:m-[-4px]">
                        <div className="product-gallery-carousel-item py-0 px-5 lg:p-1 cursor-pointer">
                          <div
                            className="product-gallery-size my-0 mx-auto lg:w-full text-center"
                            style={{ maxWidth: "1920px" }}
                          >
                            <div className="aspect-ratio relative mx-auto lg:mx-auto lg:w-full">
                              {/* <img
                                className="h-full max-h-full max-w-full top-0 left-0 border-none align-top lg:w-full "
                                alt={product.imageAlt}
                                src={product.imageSrc}
                              /> */}

                              <ImageZoom product={product} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <span className="product-gallery-zoom block mt-3 mb-[6px] mx-0 w-full text-center text-[13px] lg:mt-[26px] lg:text-[15px]">
                        <svg
                          focusable="false"
                          className="icon-zoom w-[10px] h-[10px] mr-[10px] align-baseline inline-block fill-current overflow-visible pointer-events-none bg-none lg:mr-[14px] "
                          viewBox="0 0 10 10"
                          role="presentation"
                        >
                          <path
                            d="M7.58801492 6.8808396L9.999992 9.292784l-.70716.707208-2.41193007-2.41199543C6.15725808 8.15916409 5.24343297 8.50004 4.25 8.50004c-2.347188 0-4.249968-1.902876-4.249968-4.2501C.000032 1.902704 1.902812.000128 4.25.000128c2.347176 0 4.249956 1.902576 4.249956 4.249812 0 .99341752-.34083418 1.90724151-.91194108 2.6308996zM4.25.999992C2.455064.999992.999992 2.454944.999992 4.24994c0 1.794984 1.455072 3.249936 3.250008 3.249936 1.794924 0 3.249996-1.454952 3.249996-3.249936C7.499996 2.454944 6.044924.999992 4.25.999992z"
                            fill="currentColor"
                            fillRule="evenodd"
                          ></path>
                        </svg>

                        <span className=" hidden lg:inline-block">
                          Roll over image to zoom in
                        </span>

                        <span className=" inline-block lg:hidden">
                          Click on image to zoom
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-list-item-info lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[calc(50%-15px)] ">
              <div className="card-right relative mb-[10px] bg-[#ffffff] border-t border-b border-solid border-[#e1e3e4] sm:mb-[30px] sm:border sm:rounded-[3px] lg:sticky lg:top-0 lg:mb-0">
                <div className="card-section-right relative p-5 pt-0 sm:p-[30px] sm:pt-0 lg:pt-[30px]">
                  <div className="product-title relative mx-0 mt-[-11px] mb-[5px]">
                    <h1 className="product-name mt-0 text-[#48484d] font-semibold leading-[1.43] text-[25px] mb-[14px] sm:text-[29px]">
                      {product.name}
                    </h1>
                  </div>

                  <hr className="card-separator w-[calc(100%+20px)] mx-0 my-5 border-solid border-t border-[#e1e3e4]" />

                  <form className="product-form sm:-mt-2">
                    <div className="product-form-variants mb-6 sm:mb-[26px]">
                      <div className="product-form-option mb-[23px]">
                        <div className="product-size-wrap -ml-1 mt-[-3px] mb-0 pl-[2px]">
                          <div className="size-box inline-block m-1">
                            <h1>Size</h1>

                            <button
                              id="size1"
                              type="button"
                              className="size border py-3 px-6 mr-4 rounded-md"
                              onClick={changeSizeBtn}
                            >
                              XXS
                            </button>

                            <button
                              id="size2"
                              type="button"
                              className="size border py-3 px-6 mr-4 rounded-md"
                              onClick={changeSizeBtn}
                            >
                              XS
                            </button>

                            <button
                              id="size3"
                              type="button"
                              className="size border py-3 px-6 mr-4 rounded-md"
                              onClick={changeSizeBtn}
                            >
                              S
                            </button>

                            <button
                              id="size4"
                              type="button"
                              className="size border py-3 px-6 mr-4 rounded-md"
                              onClick={changeSizeBtn}
                            >
                              M
                            </button>

                            <button
                              id="size5"
                              type="button"
                              className="size border py-3 px-6 mr-4 rounded-md"
                              onClick={changeSizeBtn}
                            >
                              L
                            </button>

                            <button
                              id="size6"
                              type="button"
                              className="size border py-3 px-6 mr-4 rounded-md"
                              onClick={changeSizeBtn}
                            >
                              XL
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="product-form-option mb-[24px] sm:mb-[26px]">
                        <h1 className=" mb-4">Color</h1>

                        <button
                          className="product-color w-9 h-9 bg-black inline-block mr-3 rounded-full focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-black"
                          type="button"
                        ></button>

                        <button
                          className="product-color w-9 h-9 bg-gray-500 inline-block rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                          type="button"
                        ></button>
                      </div>

                      <div
                        className="product-form-option table w-full mt-[-22px] mb-[6px] mx-0 border-spacing-y-[22px]"
                        style={{ display: "block" }}
                      >
                        <div className="product-form-price table-row">
                          <span className=" table-cell pr-3 align-baseline whitespace-nowrap text-[#48484d] font-semibold">
                            Price:
                          </span>

                          <div className="table-cell w-full items-baseline leading-none">
                            <span className=" text-[#10b59f] text-[25px]">
                              ₹{product.price}
                            </span>
                          </div>
                        </div>

                        <div className="product-form-quantity table-row">
                          <label className=" pt-[6px] table-cell align-middle pr-3 whitespace-nowrap text-[#48484d] font-semibold">
                            Quantity:
                          </label>

                          <div className="product-form-quantity table-cell w-full pt-[6px] align-middle ">
                            <div className="quantity-selector h-11 inline-flex items-center border border-solid border-[#e1e3e4] align-middle rounded-[3px]">
                              <button
                                className="minus-btn py-0 px-4 flex items-center text-[#67727999] h-full touch-manipulation border-none rounded-none overflow-visible bg-none hover:text-[#48484d] transition-[.2]"
                                type="button"
                                onClick={handleDecreaseQty}
                              >
                                <svg
                                  focusable="false"
                                  className="icon-minus w-[10px] h-[2px] inline-block fill-current align-middle visible pointer-events-none bg-none"
                                  viewBox="0 0 10 2"
                                  role="presentation"
                                >
                                  <path
                                    d="M10 0v2H0V0z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </button>

                              <input
                                id="qty"
                                className="quantity-value h-full min-w-16 border-l border-r border-solid border-[#e1e3e4] text-[#48484d] appearance-none px-[5px] py-0 bg-transparent text-center outline-none"
                                type="text"
                                size={3}
                                defaultValue={1}
                              />

                              <button
                                className="plus-btn py-0 px-4 flex items-center text-[#67727999] h-full touch-manipulation border-none rounded-none overflow-visible bg-none hover:text-[#48484d] transition-[.2]"
                                type="button"
                                onClick={handleIncreaseQty}
                              >
                                <svg
                                  focusable="false"
                                  className="icon-plus w-[10px] h-[10px] inline-block fill-current align-middle pointer-events-none bg-none overflow-visible"
                                  viewBox="0 0 10 10"
                                  role="presentation"
                                >
                                  <path
                                    d="M6 4h4v2H6v4H4V6H0V4h4V0h2v4z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="product-form-payment flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:m-[-9px]">
                        <button
                          type="button"
                          className="add-cart-btn relative inline-block px-[30px] py-0 rounded-sm leading-[48px] text-center text-[16px] font-semibold cursor-pointer bg-[#48484d] text-[#ffffff] sm:flex-none sm:w-[calc(50%-18px)] sm:m-[9px]"
                          onClick={handleAddToCart}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
