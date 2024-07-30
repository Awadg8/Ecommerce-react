import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { HideHeaderFooterContext } from "../context/HideContext";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, cartProducts } = useContext(CartContext);
  const { setHideHeaderFooter } = useContext(HideHeaderFooterContext);

  const [showModal, setShowModal] = useState(true);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [quantities, setQuantities] = useState({});

  const handleCartPage = () => {
    setHideHeaderFooter(false);
    navigate("/cart");
  };

  const handleOrderSummary = () => {
    setShowModal(!showModal);
    setShowOrderSummary(!showOrderSummary);
  };

  const updateModalVisibility = () => {
    if (window.innerWidth > 1024) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  useEffect(() => {
    updateModalVisibility();
    window.addEventListener("resize", updateModalVisibility);

    return () => {
      window.removeEventListener("resize", updateModalVisibility);
    };
  }, []);

  useEffect(() => {
    const initialQuantities = { ...quantities };
    cartProducts.forEach((product) => {
      if (!initialQuantities[product.id]) {
        initialQuantities[product.id] = 1;
      }
    });
    setQuantities(initialQuantities);
  }, [cartProducts, quantities]);

  const calculateSubtotal = (item) => {
    const quantity = quantities[item.id] + item.quantity || 1;
    return item.price * quantity;
  };

  const calculateGrandTotal = (items, quantities, isCartProducts = false) => {
    return items.reduce((total, item) => {
      const quantity = isCartProducts
        ? quantities[item.id] || 1
        : item.quantity;
      return total + item.price * quantity;
    }, 0);
  };

  const totalPrice1 = calculateGrandTotal(cartProducts, quantities, true);
  const totalPrice2 = calculateGrandTotal(cartItems, quantities, false);
  const grandTotal = totalPrice1 + totalPrice2;

  return (
    <div className=" m-5 sm:mx-16 md:mx-36 lg:mx-16">
      <header className=" border-b border-solid border-[#dad2d2] bg-cover flex justify-center">
        <div className=" w-full contain-inline-size max-w-[57rem] p-[2.1rem]">
          <div className=" relative">
            <header className=" min-w-full content-center items-center flex relative justify-between">
              <div className=" relative max-w-[17.8rem]">
                <span>
                  <a
                    href="/"
                    className=" transition-all duration-200 ease-in-out relative no-underline"
                  >
                    <img
                      className=" pointer-events-none block h-auto max-w-full"
                      alt=""
                      width="178px"
                      height="60.075px"
                      src="https://cdn.shopify.com/s/files/1/0431/9854/6075/files/Parallel_Learning_Logo_256_37650529-4139-4577-aa05-91d09bedd9d6_x320.jpg?v=1614344537"
                    />
                  </a>
                </span>
              </div>

              <span>
                <a
                  onClick={handleCartPage}
                  className=" text-[#5e97f7] no-underline relative cursor-pointer"
                >
                  <span className=" stroke-current h-[calc(1.4rem*1.71429)] w-[calc(1.4rem*1.71429)] min-h-[calc(1.4rem*1.71429)] min-w-[calc(1.4rem*1.71429)] block max-w-full max-h-full">
                    <svg
                      className=" w-full fill-none block max-h-full max-w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path d="M2.675 10.037 3.072 4.2h7.856l.397 5.837A2.4 2.4 0 0 1 8.932 12.6H5.069a2.4 2.4 0 0 1-2.394-2.563"></path>
                      <path d="M4.9 3.5a2.1 2.1 0 1 1 4.2 0v1.4a2.1 2.1 0 0 1-4.2 0z"></path>
                    </svg>
                  </span>
                </a>
              </span>
            </header>
          </div>
        </div>
      </header>

      <div className="border-b border-solid border-[#dad2d2] block lg:hidden">
        <button
          className=" text-left bg-[#f6f6f6] text-[#5e97f7] relative z-[2] flex justify-center w-full lg:hidden"
          onClick={handleOrderSummary}
        >
          <span className=" py-[1.7rem] px-[2.1rem] w-full max-w-[57rem] items-center content-center flex justify-between">
            {showModal ? (
              <span className=" text-sm">
                Hide order summary
                <span className=" stroke-current ml-2 h-[calc(1.4rem*0.71429)] w-[calc(1.4rem*0.71429)] min-h-[calc(1.4rem*0.71429)] min-w-[calc(1.4rem*0.71429)] align-middle max-w-full max-h-full inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    focusable="false"
                    aria-hidden="true"
                    className=" w-full fill-none max-w-full max-h-full block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.1 8.4 4.653-4.653a.35.35 0 0 1 .495 0L11.9 8.4"
                    ></path>
                  </svg>
                </span>
              </span>
            ) : (
              <span className=" text-sm">
                Show order summary
                <span className=" stroke-current ml-2 h-[calc(1.4rem*0.71429)] w-[calc(1.4rem*0.71429)] min-h-[calc(1.4rem*0.71429)] min-w-[calc(1.4rem*0.71429)] align-middle max-w-full max-h-full inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    focusable="false"
                    aria-hidden="true"
                    className=" w-full fill-none max-w-full max-h-full block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m11.9 5.6-4.653 4.653a.35.35 0 0 1-.495 0L2.1 5.6"
                    ></path>
                  </svg>
                </span>
              </span>
            )}

            <span>
              <div className=" relative justify-items-end">
                {grandTotal < 300 ? (
                  <p className=" text-[19px] font-semibold text-[#000] relative">
                    ₹{(grandTotal + 99).toFixed(2)}
                  </p>
                ) : grandTotal > 300 && grandTotal < 500 ? (
                  <p className=" text-[19px] font-semibold text-[#000] relative">
                    ₹{(grandTotal + 49).toFixed(2)}
                  </p>
                ) : grandTotal > 500 ? (
                  <p className=" text-[19px] font-semibold text-[#000] relative">
                    ₹{grandTotal.toFixed(2)}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </span>
          </span>
        </button>

        {(showModal || window.innerWidth > 1024) && (
          <div className=" h-auto overflow-visible relative  transition-opacity duration-300">
            <div className=" border-t border-solid border-[#dad2d2] relative z-[1] flex justify-center w-full bg-[#fafafa] text-black">
              <div className=" pt-[2.1rem] pb-[1.7rem] px-[2.1rem] w-full max-w-[57rem]">
                <section className=" relative block">
                  <div className=" relative">
                    <div className=" relative border-b border-solid border-[rgb(218,210,210)]">
                      <section className=" relative block">
                        <div className=" flex flex-col justify-start">
                          {cartItems.map((product) => (
                            <div className=" mb-16 last:mb-[1.7rem] flex h-full">
                              <div className=" flex flex-col">
                                <div className=" max-h-[6.4rem] min-h-[6.4rem] max-w-[6.4rem] min-w-[6.4rem] rounded-[5px] bg-[#f1f1f1] text-black relative">
                                  <div className="relative border border-[#dad2d2] rounded-md">
                                    <img src={product.imageSrc} alt="" />
                                  </div>

                                  <div className=" right-0 translate-x-[25%] translate-y-[-50%] top-0 absolute">
                                    <div className=" px-[0.7rem] rounded-full bg-[#0000008f] text-white min-h-[2.2rem] min-w-[2.2rem] font-semibold justify-center text-sm items-center inline-flex">
                                      <div>{product.quantity + 1}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className=" pl-[1.4rem] justify-center flex-grow flex flex-col">
                                <div className=" break-words relative block">
                                  <p className=" relative text-base">
                                    {product.name}
                                  </p>
                                </div>
                              </div>

                              <div className=" pl-[1.4rem] flex flex-col justify-start">
                                <div className=" whitespace-pre min-h-[6.4rem] justify-center flex-col items-end relative flex">
                                  <span className=" text-base">
                                    ₹{calculateSubtotal(product).toFixed(2)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>

                    <section className=" relative block py-[1.7rem]">
                      <div className=" break-words">
                        <div className=" flex justify-between">
                          <div>
                            <span className=" text-sm">Subtotal</span>
                          </div>
                          <div className=" justify-self-end text-right">
                            <span className=" text-base">
                              ₹{grandTotal.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className=" flex justify-between mt-[0.7rem]">
                          <div>
                            <div className="flex relative">
                              <div className=" flex justify-start relative">
                                <div className=" flex-wrap justify-start content-center items-center flex min-h-full">
                                  <span className=" text-sm mr-[6px]">
                                    Shipping
                                  </span>

                                  <span className=" justify-center pointer-events-none text-center flex">
                                    <span className=" stroke-current w-[1rem] h-[1rem] min-w-[1rem] min-h-[1rem] max-h-full max-w-full block">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14"
                                        focusable="false"
                                        aria-hidden="true"
                                        className=" fill-none w-full max-h-full max-w-full block"
                                      >
                                        <circle cx="7" cy="7" r="5.6"></circle>
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M5.6 5.1c.2-1.3 2.6-1.3 2.8 0S6.95 6.4 6.95 7.45m.055 2.35H7v.005h.005z"
                                        ></path>
                                        <circle
                                          cx="7"
                                          cy="9.7"
                                          r="0.1"
                                        ></circle>
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {grandTotal < 300 ? (
                            <div className=" justify-self-end text-right">
                              <span className=" text-sm">₹99.00</span>
                            </div>
                          ) : grandTotal > 300 && grandTotal < 500 ? (
                            <div className=" justify-self-end text-right">
                              <span className=" text-sm">₹49.00</span>
                            </div>
                          ) : grandTotal > 500 ? (
                            <div className=" justify-self-end text-right">
                              <span className=" text-sm">FREE</span>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>

                        <div className=" mt-[0.7rem] flex justify-between items-center">
                          <div className="">
                            <span className=" text-[19px] font-semibold">
                              Total
                            </span>
                          </div>
                          <div className="">
                            <div className=" flex relative justify-start">
                              <div className=" flex-wrap justify-start items-baseline flex min-h-full">
                                <abbr className=" no-underline text-xs text-[#0000008f] mr-[6px]">
                                  INR
                                </abbr>

                                {grandTotal < 300 ? (
                                  <strong className=" text-[21px] font-semibold">
                                    ₹{(grandTotal + 20).toFixed(2)}
                                  </strong>
                                ) : grandTotal > 300 && grandTotal < 500 ? (
                                  <strong className=" text-[21px] font-semibold">
                                    ₹{(grandTotal + 10).toFixed(2)}
                                  </strong>
                                ) : grandTotal > 500 ? (
                                  <strong className=" text-[21px] font-semibold">
                                    ₹{grandTotal.toFixed(2)}
                                  </strong>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className=" lg:flex pt-[1.7rem]">
        <div className=" h-full flex justify-center">
          <div className=" w-full max-w-[66rem] lg:pr-5 h-full lg:border-r border-solid border-[#dfdfdf]">
            <main>
              <div className=" relative">
                <form className=" contents">
                  <div className=" relative">
                    <div className=" mb-10">
                      <section>
                        <div className=" relative">
                          <div className=" items-baseline justify-between flex flex-wrap">
                            <h2 className=" leading-[1.2] text-[21px] font-semibold">
                              Contact
                            </h2>
                          </div>

                          <div className=" relative">
                            <div className="py-[0.9rem]">
                              <div className="form-wrapper relative">
                                <div className=" border border-solid border-[#dedede] rounded-[5px] z-[0] cursor-text">
                                  <input
                                    type="email"
                                    className=" leading-[1.5] text-sm bg-none rounded-[5px] p-[1.1rem] text-ellipsis z-[1] outline-none w-full relative overflow-visible focus:ring focus:ring-[#5e97f7]"
                                    required
                                  />

                                  <label className="form-labels left-[calc(1.1rem+1px)] max-w-[calc(100%-1.85714em)] translate-y-[0.215em] z-[1] select-none pointer-events-none absolute scale-100 origin-top-left leading-[48px] top-4">
                                    <span className=" text-[#707070] text-sm">
                                      <span className=" text-ellipsis whitespace-nowrap block">
                                        Email
                                      </span>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className=" relative">
                              <div className=" relative flex items-center">
                                <div className=" h-[1.5rem] w-[1.5rem] relative flex-shrink-0">
                                  <input
                                    type="checkbox"
                                    className=" cursor-pointer h-full w-full"
                                  />
                                </div>

                                <label className=" pl-[1rem] cursor-pointer block max-w-full text-[14px]">
                                  Get order updates on WhatsApp
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>

                    <div>
                      <section>
                        <div className=" relative">
                          <div className=" relative pb-3">
                            <h1 className=" font-semibold leading-[1.2] text-[21px]">
                              Delivery
                            </h1>
                          </div>

                          <div className=" relative">
                            <section className=" relative block">
                              <div className=" relative">
                                <div className=" relative">
                                  <div className=" relative mb-9">
                                    <div className=" relative">
                                      <div className=" py-[0.6rem] text-base leading-[1.5]">
                                        <div className=" relative">
                                          <label className=" left-[calc(1.1rem+1px)] top-[0.25rem] pointer-events-none absolute select-none">
                                            <span className=" leading-[1.5] text-sm">
                                              <span className=" text-ellipsis whitespace-nowrap text-[#707070]">
                                                Country/Region
                                              </span>
                                            </span>
                                          </label>

                                          <select className=" pl-[1.1rem] pr-[4rem] pt-6 pb-2 border border-[#dedede] outline-none rounded-[5px] text-ellipsis w-full whitespace-nowrap focus:ring focus:ring-[#5e97f7]">
                                            <option value="1">India</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>

                                    <div className=" relative sm:flex justify-between">
                                      <div className=" leading-[1.5] py-[0.6rem] text-base w-full">
                                        <div className="form-wrapper relative">
                                          <div className=" border border-solid border-[#dedede] rounded-[5px] cursor-text">
                                            <input
                                              type="text"
                                              className=" leading-[1.5] text-base w-full p-[1.1rem] rounded-[5px] outline-none focus:ring focus:ring-[#5e97f7]"
                                              required
                                            />

                                            <label className="form-labels left-[calc(1.1rem+1px)] scale-100 origin-top-left  leading-[48px] pointer-events-none absolute top-5">
                                              <span className=" text-[#707070] pointer-events-none text-sm">
                                                <span className=" text-ellipsis whitespace-nowrap block">
                                                  First name
                                                </span>
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>

                                      <div className=" leading-[1.5] p-[0.6rem] px-0 sm:pl-[1.1rem] text-base w-full">
                                        <div className="form-wrapper relative">
                                          <div className=" border border-solid border-[#dedede] rounded-[5px] cursor-text">
                                            <input
                                              type="text"
                                              className=" leading-[1.5] text-base p-[1.1rem] rounded-[5px] w-full outline-none focus:ring focus:ring-[#5e97f7]"
                                              required
                                            />

                                            <label className="form-labels left-[calc(1.1rem+1px)] pointer-events-none absolute top-5  scale-100 origin-top-left  leading-[48px]">
                                              <span className=" text-[#707070] pointer-events-none text-sm">
                                                <span className=" text-ellipsis whitespace-nowrap block">
                                                  Last name
                                                </span>
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className=" relative">
                                      <div className=" relative">
                                        <div className=" py-[0.6rem] leading-[1.5] text-sm">
                                          <div className="form-wrapper relative">
                                            <div className=" border border-solid border-[#dedede] cursor-text">
                                              <input
                                                type="text"
                                                className=" p-[1.1rem] text-ellipsis rounded-[5px] text-base outline-none w-full focus:ring focus:ring-[#5e97f7]"
                                                required
                                              />

                                              <label className="form-labels left-[calc(1.1rem+1px)] max-w-[calc(100%-1.857em)] top-5 pointer-events-none absolute  scale-100 origin-top-left  leading-[48px]">
                                                <span className=" text-[#707070] text-sm">
                                                  <span className=" block text-ellipsis whitespace-nowrap">
                                                    Address
                                                  </span>
                                                </span>
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className=" relative">
                                      <div className=" py-[0.6rem] text-base leading-[1.5]">
                                        <div className="form-wrapper relative">
                                          <div className=" rounded-[5px] border border-solid border-[#dedede] cursor-text">
                                            <input
                                              type="text"
                                              className=" p-[1.1rem] leading-[1.5] text-base rounded-[5px] outline-none w-full focus:ring focus:ring-[#5e97f7]"
                                              required
                                            />

                                            <label className="form-labels left-[calc(1.1rem+1px)] top-5 pointer-events-none select-none absolute  scale-100 origin-top-left  leading-[48px]">
                                              <span className=" text-sm text-[#707070]">
                                                <span className=" text-ellipsis block whitespace-nowrap">
                                                  Apartment, suite, etc.
                                                  (optional)
                                                </span>
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className=" relative sm:flex">
                                      <div className=" p-[0.6rem] pl-0 pr-0 sm:pr-[1.1rem] text-base leading-[1.5] ">
                                        <div className="form-wrapper relative">
                                          <div className=" rounded-[5px] border border-solid border-[#dedede] cursor-text">
                                            <input
                                              type="text"
                                              className=" p-[1.1rem] leading-[1.5] text-base rounded-[5px] focus:ring focus:ring-[#5e97f7] outline-none w-full"
                                              required
                                            />

                                            <label className="form-labels left-[calc(1.1rem+1px)] top-5 pointer-events-none select-none absolute  scale-100 origin-top-left  leading-[48px]">
                                              <span className=" text-sm text-[#707070]">
                                                <span className=" text-ellipsis block whitespace-nowrap">
                                                  City
                                                </span>
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>

                                      <div className=" py-[0.6rem] text-base leading-[1.5]">
                                        <div className=" relative">
                                          <label className=" left-[calc(1.1rem+1px)] top-2 pointer-events-none select-none absolute">
                                            <span className=" text-xs text-[#707070]">
                                              <span className=" text-ellipsis block whitespace-nowrap">
                                                State
                                              </span>
                                            </span>
                                          </label>

                                          <select className=" pl-[1.1rem] pr-[calc(4rem*0.75)] pt-7 pb-4 border border-[#dedede] rounded-[5px] w-full outline-none text-ellipsis whitespace-nowrap text-sm leading-[1.5] focus:ring focus:ring-[#5e97f7]">
                                            <option value="AN">
                                              Andaman and Nicobar Islands
                                            </option>
                                            <option value="AP">
                                              Andhra Pradesh
                                            </option>
                                            <option value="AR">
                                              Arunachal Pradesh
                                            </option>
                                            <option value="AS">Assam</option>
                                            <option value="BR">Bihar</option>
                                            <option value="CH">
                                              Chandigarh
                                            </option>
                                            <option value="CG">
                                              Chhattisgarh
                                            </option>
                                            <option value="DN">
                                              Dadra and Nagar Haveli
                                            </option>
                                            <option value="DD">
                                              Daman and Diu
                                            </option>
                                            <option value="DL">Delhi</option>
                                            <option value="GA">Goa</option>
                                            <option value="GJ">Gujarat</option>
                                            <option value="HR">Haryana</option>
                                            <option value="HP">
                                              Himachal Pradesh
                                            </option>
                                            <option value="JK">
                                              Jammu and Kashmir
                                            </option>
                                            <option value="JH">
                                              Jharkhand
                                            </option>
                                            <option value="KA">
                                              Karnataka
                                            </option>
                                            <option value="KL">Kerala</option>
                                            <option value="LA">Ladakh</option>
                                            <option value="LD">
                                              Lakshadweep
                                            </option>
                                            <option value="MP">
                                              Madhya Pradesh
                                            </option>
                                            <option value="MH">
                                              Maharashtra
                                            </option>
                                            <option value="MN">Manipur</option>
                                            <option value="ML">
                                              Meghalaya
                                            </option>
                                            <option value="MZ">Mizoram</option>
                                            <option value="NL">Nagaland</option>
                                            <option value="OR">Odisha</option>
                                            <option value="PY">
                                              Puducherry
                                            </option>
                                            <option value="PB">Punjab</option>
                                            <option value="RJ">
                                              Rajasthan
                                            </option>
                                            <option value="SK">Sikkim</option>
                                            <option value="TN">
                                              Tamil Nadu
                                            </option>
                                            <option value="TS">
                                              Telangana
                                            </option>
                                            <option value="TR">Tripura</option>
                                            <option value="UP">
                                              Uttar Pradesh
                                            </option>
                                            <option value="UK">
                                              Uttarakhand
                                            </option>
                                            <option value="WB">
                                              West Bengal
                                            </option>
                                          </select>
                                        </div>
                                      </div>

                                      <div className=" p-[0.6rem] pr-0 pl-0 sm:pl-[1.1rem] text-sm leading-[1.5]">
                                        <div className="form-wrapper relative">
                                          <div className=" rounded-[5px] border border-solid border-[#dedede] cursor-text">
                                            <input
                                              type="number"
                                              className=" p-[1.1rem] leading-[1.5] text-base rounded-[5px] outline-none w-full focus:ring focus:ring-[#5e97f7] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                              required
                                            />

                                            <label className="form-labels left-[calc(1.1rem+1px)] top-5 pointer-events-none select-none absolute scale-100 origin-top-left  leading-[48px]">
                                              <span className=" text-sm text-[#707070]">
                                                <span className=" text-ellipsis block whitespace-nowrap">
                                                  PIN code
                                                </span>
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className=" relative">
                                      <div className=" py-[0.6rem] text-base leading-[1.5]">
                                        <div className="form-wrapper relative w-full">
                                          <div className=" flex rounded-[5px] w-full border border-solid border-[#dedede] cursor-text">
                                            <input
                                              type="number"
                                              className=" p-[1.1rem] leading-[1.5] text-base rounded-[5px] outline-none w-full focus:ring focus:ring-[#5e97f7] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                              required
                                            />

                                            <label className="form-labels left-[calc(1.1rem+1px)] top-5 pointer-events-none select-none absolute  scale-100 origin-top-left  leading-[48px] ">
                                              <span className=" text-sm text-[#707070]">
                                                <span className=" text-ellipsis block whitespace-nowrap">
                                                  Phone number for order updates
                                                </span>
                                              </span>
                                            </label>

                                            <div className=" pr-2 sm:pr-[1.1rem] z-[1] cursor-default relative self-center">
                                              <div className=" flex justify-start relative">
                                                <div className=" flex-wrap justify-start items-center content-center flex min-h-full">
                                                  <button
                                                    type="button"
                                                    className="question-btn text-left text-inherit cursor-pointer items-stretch flex relative"
                                                  >
                                                    <span className=" flex-grow">
                                                      <span className=" stroke-current h-[calc(1.4rem*1.285)] w-[calc(1.4rem*1.285)] min-h-[calc(1.4rem*1.285)] min-w-[calc(1.4rem*1.285)] text-[#707070] block max-h-full max-w-full">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          viewBox="0 0 14 14"
                                                          focusable="false"
                                                          aria-label="More information"
                                                          className=" w-full fill-none max-h-full max-w-full block"
                                                        >
                                                          <circle
                                                            cx="7"
                                                            cy="7"
                                                            r="5.6"
                                                          ></circle>
                                                          <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M5.6 5.1c.2-1.3 2.6-1.3 2.8 0S6.95 6.4 6.95 7.45m.055 2.35H7v.005h.005z"
                                                          ></path>
                                                          <circle
                                                            cx="7"
                                                            cy="9.7"
                                                            r="0.1"
                                                          ></circle>
                                                        </svg>
                                                      </span>
                                                    </span>
                                                  </button>

                                                  <div className="question-hover absolute rounded-md text-center z-10 w-[135px] h-[80px] left-[-90px] sm:left-[-55px] top-[-5.8rem] bottom-0 bg-[#353030]">
                                                    <div>
                                                      <div className=" absolute p-4">
                                                        <p className=" text-white text-xs">
                                                          In case we need to
                                                          contact you about your
                                                          order
                                                        </p>
                                                      </div>
                                                    </div>
                                                    <svg
                                                      focusable="false"
                                                      class="nav-triangle stroke-[#353030] absolute top-[80px] w-[18px] h-2 z-[2] right-[21px] sm:right-[57px] inline-block align-middle bg-none pointer-events-none overflow-visible rotate-180"
                                                      viewBox="0 0 20 9"
                                                      role="presentation"
                                                    >
                                                      <path
                                                        d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                                                        fill="#353030"
                                                      ></path>
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div>
                                      <div className=" relative flex items-center pt-3">
                                        <div className=" flex-shrink-0 h-[1.5rem] w-[1.5rem] relative">
                                          <input
                                            type="checkbox"
                                            className=" w-full rounded-[5px] cursor-pointer block h-full focus:ring focus:ring-[#5e97f7]"
                                            required
                                          />
                                        </div>

                                        <label className=" pl-[1.1rem] cursor-pointer max-w-full block text-sm">
                                          Save this information for next time
                                        </label>
                                      </div>
                                    </div>
                                  </div>

                                  <div className=" relative">
                                    <h3 className=" relative leading-[1.2] font-semibold text-base">
                                      Shipping method
                                    </h3>

                                    <div className=" will-change-contents pt-4">
                                      <div className=" relative">
                                        <fieldset>
                                          <legend className=" h-[1px] w-[1px] overflow-hidden m-[-1px] p-0 absolute">
                                            Choose a shopping method
                                          </legend>

                                          <div>
                                            {grandTotal < 300 ? (
                                              <div className=" border border-solid border-[#5e97f7] flex justify-between p-[1rem] rounded-[5px]">
                                                <div>
                                                  <h4 className=" font-normal leading-[1.5] text-sm">
                                                    <div className=" relative">
                                                      <p className=" relative text-sm">
                                                        Delivery Charges (Online
                                                        Payment below Rs 300 )
                                                      </p>
                                                    </div>
                                                  </h4>
                                                </div>
                                                <div>
                                                  <span className=" font-semibold text-sm">
                                                    ₹99.00
                                                  </span>
                                                </div>
                                              </div>
                                            ) : grandTotal > 300 &&
                                              grandTotal < 500 ? (
                                              <div className=" border border-solid border-[#5e97f7] flex justify-between p-[1rem] rounded-[5px]">
                                                <div>
                                                  <h4 className=" font-normal leading-[1.5] text-sm">
                                                    <div className=" relative">
                                                      <p className=" relative text-sm">
                                                        Delivery Charges (Online
                                                        Payment from 300/- to
                                                        500/-)
                                                      </p>
                                                    </div>
                                                  </h4>
                                                </div>
                                                <div>
                                                  <span className=" font-semibold text-sm">
                                                    ₹49.00
                                                  </span>
                                                </div>
                                              </div>
                                            ) : grandTotal > 500 ? (
                                              <div className=" border border-solid border-[#5e97f7] flex justify-between p-[1rem] rounded-[5px]">
                                                <div>
                                                  <h4 className=" font-normal leading-[1.5] text-sm">
                                                    <div className=" relative">
                                                      <p className=" relative text-sm">
                                                        Delivery Charges (Online
                                                        Payment from 500/-
                                                        onwards)
                                                      </p>
                                                    </div>
                                                  </h4>
                                                </div>
                                                <div>
                                                  <span className=" font-semibold text-sm">
                                                    Free
                                                  </span>
                                                </div>
                                              </div>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        </fieldset>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </section>
                    </div>

                    <section className=" mt-9">
                      <div>
                        <div className=" relative">
                          <div className=" relative">
                            <h2 className=" leading-[1.5] font-semibold text-[21px]">
                              Payment
                            </h2>

                            <p className=" text-sm text-[#0000008f]">
                              All transactions are secure and encrypted.
                            </p>
                          </div>

                          <div className=" relative">
                            <div className=" relative">
                              <div className=" relative">
                                <fieldset>
                                  <legend className=" absolute h-[1px] w-[1px] p-0 whitespace-nowrap overflow-hidden m-[-1px]">
                                    Choose a payment method
                                  </legend>

                                  <div className="mt-3">
                                    <div>
                                      <div className=" relative p-[1rem] border border-solid border-[#5e97f7] rounded-tl-[5px] rounded-tr-[5px] ">
                                        <div className=" flex justify-between">
                                          <div>
                                            <span className=" text-sm">
                                              Razorpay Secure (UPI, Cards,
                                              Wallets, NetBanking)
                                            </span>
                                          </div>

                                          <div className=" min-w-[6rem]">
                                            <div className=" cursor-default">
                                              <div className=" flex justify-start relative">
                                                <div className=" flex justify-start min-h-full items-center content-center">
                                                  <img
                                                    alt="upi"
                                                    src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/dcdfe7e1d5626b0a1dda.svg"
                                                    width="38"
                                                    height="24"
                                                    className=""
                                                  />

                                                  <img
                                                    alt="visa"
                                                    src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg"
                                                    width="38"
                                                    height="24"
                                                    className=""
                                                  />

                                                  <img
                                                    alt="master"
                                                    src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/5e3b05b68f3d31b87e84.svg"
                                                    width="38"
                                                    height="24"
                                                    className=""
                                                  />

                                                  <img
                                                    alt="rupay"
                                                    src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/fe904f1307590b94f8e6.svg"
                                                    width="38"
                                                    height="24"
                                                    className=" hidden sm:block"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className=" relative h-auto overflow-visible">
                                        <div className=" p-[1.7rem] break-words border border-solid border-[#dfdfdf]">
                                          <div className=" justify-center flex flex-col relative">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="-252.3 356.1 163 80.9"
                                              className=" h-[5.87em] w-auto text-[#0000008f]"
                                            >
                                              <path
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-miterlimit="10"
                                                stroke-width="2"
                                                d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"
                                              ></path>
                                              <circle
                                                cx="-227.8"
                                                cy="361.9"
                                                r="1.8"
                                                fill="currentColor"
                                              ></circle>
                                              <circle
                                                cx="-222.2"
                                                cy="361.9"
                                                r="1.8"
                                                fill="currentColor"
                                              ></circle>
                                              <circle
                                                cx="-216.6"
                                                cy="361.9"
                                                r="1.8"
                                                fill="currentColor"
                                              ></circle>
                                              <path
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-miterlimit="10"
                                                stroke-width="2"
                                                d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"
                                              ></path>
                                            </svg>

                                            <div className=" justify-center flex">
                                              <div className=" max-w-[22rem] mt-6 break-words block">
                                                <p className=" relative text-center text-sm">
                                                  After clicking “Pay now”, you
                                                  will be redirected to Razorpay
                                                  Secure (UPI, Cards, Wallets,
                                                  NetBanking) to complete your
                                                  purchase securely.
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </div>
                            </div>

                            <div className=" relative mt-9">
                              <h2 className=" text-base leading-[1.2] font-semibold">
                                Billing address
                              </h2>

                              <fieldset>
                                <legend className=" h-[1px] w-[1x] m-[-1px] overflow-hidden p-0 whitespace-nowrap absolute">
                                  Choose a billing address
                                </legend>

                                <div className=" border border-solid border-[#5e97f7] rounded-[5px] mt-4">
                                  <label className=" p-[1.2rem] relative cursor-pointer">
                                    <div className=" relative flex items-center">
                                      <div className=" relative mr-3 ml-4">
                                        <input
                                          type="radio"
                                          className=" bg-white border-[.4285em] border-solid border-[#5e97f7] rounded-[50%] h-[1.4rem] w-[1.4rem] cursor-pointer block overflow-visible"
                                        />
                                      </div>

                                      <span className=" cursor-pointer text-sm">
                                        Same as shipping address
                                      </span>
                                    </div>
                                  </label>
                                </div>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className=" mt-10">
                        <div className=" relative">
                          <button
                            type="button"
                            className=" text-left rounded-[5px] p-[18px] font-semibold bg-[#3579ec] text-white select-none cursor-pointer  min-w-full hover:bg-[#1f62d3]"
                          >
                            <span className=" pointer-events-none text-center justify-center flex">
                              <span className=" text-base">Pay now</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </section>
                  </div>
                </form>
              </div>
            </main>

            <footer className=" mt-[4.6rem] border-t border-solid border-[#dfdfdf] ">
              <div className=" w-full max-w-[calc(66rem+52rem)]">
                <div className=" relative">
                  <div className=" flex relative justify-around">
                    <div className=" justify-around items-start content-start flex-wrap min-h-full flex">
                      <button className=" text-left select-none text-[#5e97f7] inline-block relative cursor-pointer underline mr-3">
                        <span className=" text-center pointer-events-none flex justify-center text-base">
                          Refund policy
                        </span>
                      </button>

                      <button className=" text-left select-none text-[#5e97f7] inline-block relative cursor-pointer underline mr-3">
                        <span className=" text-center pointer-events-none flex justify-center text-base">
                          Shipping policy
                        </span>
                      </button>

                      <button className=" text-left select-none text-[#5e97f7] inline-block relative cursor-pointer underline mr-3">
                        <span className=" text-center pointer-events-none flex justify-center text-base">
                          Privacy policy
                        </span>
                      </button>

                      <button className=" text-left select-none text-[#5e97f7] inline-block relative cursor-pointer underline mr-3">
                        <span className=" text-center pointer-events-none flex justify-center text-base">
                          Terms of service
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>

        <div className=" hidden lg:block">
          <div className=" w-full min-w-[24rem] p-[38px] lg:pl-5 lg:pr-5 top-0 bottom-0 sticky">
            <aside>
              <div>
                <section className=" relative block">
                  <div className=" relative">
                    <div className=" relative">
                      <section className=" block relative">
                        <div className=" flex flex-col">
                          {cartItems.map((product) => (
                            <div className=" mt-0 mb-16 last:mb-3 flex h-full">
                              <div className=" flex-col flex justify-start">
                                <div className=" relative min-h-[6.4rem] text-black bg-[#f1f1f1] rounded-[5px] min-w-[6.4rem] max-h-[6.4rem] max-w-[6.4rem]">
                                  <div className=" relative border border-solid border-[#dfdfdf] rounded-[5px]">
                                    <img src={product.imageSrc} alt="" />
                                  </div>
                                  <div className=" right-0 top-0 absolute translate-x-[25%] translate-y-[-50%]">
                                    <div className=" px-[0.7rem] rounded-full text-white bg-[#0000008f] min-h-[2.2rem] min-w-[2.2rem] justify-center items-center inline-flex text-sm">
                                      <div>{product.quantity + 1}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className=" pl-[1.4rem] flex-grow justify-center flex flex-col">
                                <div className=" break-words relative block">
                                  <p className=" relative text-sm">
                                    {product.name}
                                  </p>
                                </div>
                              </div>

                              <div className=" pl-[1.4rem] flex flex-col justify-start">
                                <div className=" min-h-[6.4rem] whitespace-pre justify-center flex-col items-end flex relative">
                                  <span className=" text-sm">
                                    ₹{calculateSubtotal(product).toFixed(2)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>

                    <section className=" relative block mt-8">
                      <div className=" break-words">
                        <div className=" flex justify-between">
                          <div>
                            <span className=" text-sm">Subtotal</span>
                          </div>
                          <div className=" text-right justify-self-end">
                            <span className=" text-sm">
                              ₹{grandTotal.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className=" mt-[0.7rem] flex justify-between">
                          <div>
                            <div className=" relative">
                              <div className=" relative flex justify-start">
                                <div className=" justify-start items-center flex-wrap min-h-full content-center flex">
                                  <span className=" text-sm mr-2">
                                    Shipping
                                  </span>
                                  <span className=" justify-center items-center pointer-events-none flex">
                                    <span className=" stroke-current min-h-[1.4rem] min-w-[1.4erem] h-[1.4rem] w-[1.4rem] block max-h-full max-w-full text-[#0000008f]">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14"
                                        focusable="false"
                                        aria-hidden="true"
                                        className=" fill-none w-full max-w-full max-h-full block"
                                      >
                                        <circle cx="7" cy="7" r="5.6"></circle>
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M5.6 5.1c.2-1.3 2.6-1.3 2.8 0S6.95 6.4 6.95 7.45m.055 2.35H7v.005h.005z"
                                        ></path>
                                        <circle
                                          cx="7"
                                          cy="9.7"
                                          r="0.1"
                                        ></circle>
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className=" justify-self-end text-right">
                            {grandTotal < 300 ? (
                              <span className=" text-[14px]">₹99.00</span>
                            ) : grandTotal > 300 && grandTotal < 500 ? (
                              <span className=" text-[14px]">₹49.00</span>
                            ) : grandTotal > 500 ? (
                              <span className=" text-[14px]">Free</span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className=" mt-[0.7rem] flex justify-between">
                          <div>
                            <span className=" text-[21px] font-semibold">
                              Total
                            </span>
                          </div>

                          <div>
                            <div className=" flex relative justify-start">
                              <div className=" flex-wrap justify-start items-baseline min-h-full flex">
                                <abbr className=" text-xs text-[#0000008f] mr-2">
                                  INR
                                </abbr>

                                {grandTotal < 300 ? (
                                  <strong className=" text-[21px] font-semibold">
                                    ₹{(grandTotal + 99).toFixed(2)}
                                  </strong>
                                ) : grandTotal > 300 && grandTotal < 500 ? (
                                  <strong className=" text-[21px] font-semibold">
                                    ₹{(grandTotal + 49).toFixed(2)}
                                  </strong>
                                ) : grandTotal > 500 ? (
                                  <strong className=" text-[21px] font-semibold">
                                    ₹{grandTotal.toFixed(2)}
                                  </strong>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
