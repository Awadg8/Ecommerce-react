import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { HideHeaderFooterContext } from "../context/HideContext";

function Cart() {
  const { setHideHeaderFooter } = useContext(HideHeaderFooterContext);

  const navigate = useNavigate();
  const { cartItems, removeItemFromCart, cartProducts } =
    useContext(CartContext);

  const [quantities, setQuantities] = useState({});
  const [showCartEmpty, setShowCartEmpty] = useState(true);
  const [showItemCart, setShowItemCart] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      setShowCartEmpty(true);
      setShowItemCart(false);
    } else {
      setShowCartEmpty(false);
      setShowItemCart(true);
    }
  }, [cartItems]);

  useEffect(() => {
    const initialQuantities = { ...quantities };
    cartProducts.forEach((product) => {
      if (!initialQuantities[product.id]) {
        initialQuantities[product.id] = 1;
      }
    });
    setQuantities(initialQuantities);
  }, [cartProducts]);

  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = Math.max(1, Math.min(newQuantity, 99));
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const handleDecreaseQty = (productId) => {
    if (quantities[productId] > 1) {
      handleQuantityChange(productId, quantities[productId] - 1);
    }
  };

  const handleIncreaseQty = (productId) => {
    handleQuantityChange(productId, quantities[productId] + 1);
  };

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

  const handleRemoveItem = (productId) => {
    removeItemFromCart(productId);
  };

  const handleCheckOutPage = () => {
    setHideHeaderFooter(true);
    navigate("/checkout");
  };

  return (
    <div>
      {showCartEmpty && (
        <main>
          <div className="container max-w-[1480px] mx-auto py-0 px-5 sm:py-0 sm:px-10">
            <div className=" text-center my-[100px] sm:my-[170px] ">
              <div className=" relative inline-block mb-[6px]">
                <svg
                  focusable="false"
                  width="81"
                  height="70"
                  viewBox="0 0 81 70"
                >
                  <g
                    transform="translate(0 2)"
                    stroke-width="4"
                    stroke="#48484d"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <circle
                      stroke-linecap="square"
                      cx="34"
                      cy="60"
                      r="6"
                    ></circle>
                    <circle
                      stroke-linecap="square"
                      cx="67"
                      cy="60"
                      r="6"
                    ></circle>
                    <path d="M22.9360352 15h54.8070373l-4.3391876 30H30.3387146L19.6676025 0H.99560547"></path>
                  </g>
                </svg>
              </div>

              <p className=" text-[25px] sm:text-[28px] mb-5 sm:mb-4 leading-[1.45] sm:leading-[1.43] font-semibold text-[#48484d]">
                Your cart is empty
              </p>

              <p className=" text-[15px] sm:text-base font-semibold text-[#677279] mb-4">
                Spend more and get free shipping!
              </p>

              <div className=" mt-4">
                <a
                  href="/"
                  className=" outline-none min-w-[230px] bg-[#48484d] hover:bg-[#48484dcc] relative inline-block px-[30px] leading-[48px] rounded-sm text-center text-base font-semibold cursor-pointer text-white"
                >
                  Shop our products
                </a>
              </div>
            </div>
          </div>
        </main>
      )}

      {showItemCart && (
        <div>
          <main>
            <div>
              <section>
                <div className="container max-w-[1480px] mx-auto py-0 px-5 sm:px-10">
                  <header className="page-header flex justify-between flex-col items-start my-5 mx-0 sm:my-[35px]">
                    <h1 className="page-title mb-0 text-[25px] sm:text-[29px] leading-[1.45] text-[#48484d] font-semibold">
                      My Cart
                    </h1>

                    {grandTotal > 500 ? (
                      <p className="page-description mb-0 mt-[10px] mx-0 text-[15px] sm:text-base text-[#677279] font-semibold">
                        You are eligible for free shipping!
                      </p>
                    ) : (
                      <p className="page-description mb-0 mt-[10px] mx-0 text-[15px] sm:text-base text-[#677279] font-semibold">
                        Spend{" "}
                        <span>
                          $<span>{500 - grandTotal}</span>
                        </span>{" "}
                        or more and get free shipping!
                      </p>
                    )}
                  </header>
                </div>

                <div className="cart-wrapper min-h-0 lg:min-h-[350px] lg:max-w-[1480px] lg:mx-auto">
                  <div className=" lg:relative">
                    <div className="cart-wrapper-inner lg:w-[calc(100%-380px)]">
                      <div className="container max-w-[1480px] mx-auto py-0 px-5 sm:px-10">
                        <div className="card relative mb-[10px] bg-[#ffffff] border-b border-t border-solid border-[#e1e3e4] sm:mb-[30px] sm:rounded-[3px] sm:border">
                          <div className="table-wrapper overflow-auto lg:overflow-visible lg:whitespace-normal">
                            <table className="line-item-table border-collapse border-spacing-0 w-full text-left text-[15px]">
                              <thead className=" hidden sm:table-header-group text-[#677279]">
                                <tr>
                                  <th className=" font-normal h-[30px] leading-[30px] py-[15px] px-[30px]">
                                    Product
                                  </th>

                                  <th className=" font-normal h-[30px] leading-[30px] py-[15px] px-[30px] text-center">
                                    Quantity
                                  </th>

                                  <th className=" font-normal h-[30px] leading-[30px] py-[15px] px-[30px] text-right">
                                    Total
                                  </th>
                                </tr>
                              </thead>

                              <tbody>
                                {cartItems.map((product, index) => (
                                  <tr
                                    key={index}
                                    className="line-item border-t border-solid border-[#e1e3e4]"
                                  >
                                    <td className="line-item-product py-[26px] px-[30px]">
                                      <div className="product-wrapper flex items-start sm:items-center">
                                        <div className="product-image w-[60px] min-w-[60px] mr-5 sm:w-[90px] sm:min-w-[90px]">
                                          <div className="aspect-ratio relative mx-auto mb-[56.25%]">
                                            <img src={product.imageSrc} />
                                          </div>
                                        </div>

                                        <div className="product-meta text-[15px] text-[#48484d] font-semibold">
                                          <p className=" block mb-1 leading-[1.5] sm:whitespace-normal">
                                            {product.name}
                                          </p>

                                          <div className="price-list">
                                            <span className="price text-[#10b59f] text-base font-semibold inline-block">
                                              ₹{product.price}
                                            </span>
                                          </div>

                                          <div className="line-item-qty block mt-3 sm:hidden">
                                            <div className="quantity-selector inline-flex items-center h-[38px] text-base border border-solid border-[#e1e3e4] rounded-[3px] align-middle">
                                              <button
                                                className="minus-btn flex items-center pt-0 px-3 text-[#67727999] h-full touch-manipulation cursor-pointer hover:text-[#48484d] transition-[.2]"
                                                type="button"
                                                onClick={() =>
                                                  handleDecreaseQty(product.id)
                                                }
                                              >
                                                <svg
                                                  focusable="false"
                                                  className="icon-minus w-[10px] h-[2px] inline-block fill-current pointer-events-none align-middle bg-none overflow-visible"
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
                                                className=" appearance-none min-w-8 py-0 px-[5px] text-center border-none bg-transparent outline-none"
                                                size={2}
                                                type="text"
                                                value={
                                                  quantities[product.id] +
                                                    product.quantity || 1
                                                }
                                                onChange={(e) =>
                                                  handleQuantityChange(
                                                    product.id,
                                                    e.target.value,
                                                    e.preventDefault()
                                                  )
                                                }
                                              />

                                              <button
                                                className="plus-btn flex items-center pt-0 px-3 text-[#67727999] h-full touch-manipulation cursor-pointer hover:text-[#48484d] transition-[.2]"
                                                type="button"
                                                onClick={() =>
                                                  handleIncreaseQty(product.id)
                                                }
                                              >
                                                <svg
                                                  focusable="false"
                                                  className="icon-plus w-[10px] h-[10px] inline-block fill-current pointer-events-none align-middle bg-none overflow-visible"
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

                                            <a
                                              href=""
                                              className=" inline-block ml-[10px] leading-none text-[14px] text-[#677279]"
                                            >
                                              Remove
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </td>

                                    <td className="line-item-qty py-[26px] px-[30px] text-center hidden sm:table-cell">
                                      <div className="quantity-selector inline-flex items-center h-[38px] text-base border border-solid border-[#e1e3e4] rounded-[3px] text-[#677279] font-semibold align-middle">
                                        <button
                                          className="minus-btn flex items-center pt-0 px-3 text-[#67727999] h-full touch-manipulation cursor-pointer hover:text-[#48484d] transition-[.2]"
                                          type="button"
                                          onClick={() =>
                                            handleDecreaseQty(product.id)
                                          }
                                        >
                                          <svg
                                            focusable="false"
                                            className="icon-minus w-[10px] h-[2px] inline-block fill-current pointer-events-none align-middle bg-none overflow-visible"
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
                                          className=" appearance-none min-w-8 py-0 px-[5px] text-center border-none bg-transparent outline-none"
                                          size={2}
                                          type="text"
                                          value={
                                            quantities[product.id] +
                                              product.quantity || 1
                                          }
                                          onChange={(e) =>
                                            handleQuantityChange(
                                              product.id,
                                              e.target.value,
                                              e.preventDefault()
                                            )
                                          }
                                        />

                                        <button
                                          className="plus-btn flex items-center pt-0 px-3 text-[#67727999] h-full touch-manipulation cursor-pointer hover:text-[#48484d] transition-[.2]"
                                          type="button"
                                          onClick={() =>
                                            handleIncreaseQty(product.id)
                                          }
                                        >
                                          <svg
                                            focusable="false"
                                            className="icon-plus w-[10px] h-[10px] inline-block fill-current pointer-events-none align-middle bg-none overflow-visible"
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

                                      <button
                                        type="button"
                                        className=" inline-block ml-[10px] leading-none text-[14px] text-[#677279] sm:block sm:w-max sm:mt-[10px] sm:mb-0 sm:mx-auto"
                                        onClick={() =>
                                          handleRemoveItem(product.id)
                                        }
                                      >
                                        Remove
                                      </button>
                                    </td>

                                    <td className="line-item-price py-[26px] px-[30px] text-right text-[#677279] font-semibold hidden sm:table-cell">
                                      <span>
                                        ₹{calculateSubtotal(product).toFixed(2)}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <form className="cart-recap lg:absolute lg:right-10 lg:top-0 lg:w-[350px] lg:h-full">
                          <div className="cart-recap lg:top-[calc(228px+30px)] lg:sticky">
                            <div className="card relative mb-[10px] bg-[#ffffff] border-t border-b border-solid border-[#e1e3e4] sm:mb-[30px] sm:rounded-[3px] sm:border">
                              <div className="card-section relative p-5 sm:p-[30px]">
                                <div className="card-price text-[16px] flex justify-between mb-1 mt-[-.435em] font-semibold text-[#48484d] sm:text-[19px]">
                                  <span>Total</span>

                                  <span>₹{grandTotal.toFixed(2)}</span>
                                </div>

                                <div className="card-notice my-6 mx-0 break-words">
                                  <p className=" mb-0 text-[#677279] text-[16px]">
                                    Tax included.{" "}
                                    <a
                                      href="/"
                                      className=" text-[#48484d] underline pb-1"
                                    >
                                      Shipping
                                    </a>{" "}
                                    calculated at checkout
                                  </p>
                                </div>

                                <button
                                  type="button"
                                  className="cart-checkout relative inline-block py-0 px-[30px] leading-[55px] text-center rounded-sm text-[18px] font-semibold cursor-pointer text-[#ffffff] bg-[#48484d] w-full hover:bg-[#64646b]"
                                  onClick={handleCheckOutPage}
                                >
                                  Checkout
                                </button>
                              </div>
                            </div>

                            <div className="card-secure">
                              <p className=" mb-[10px] text-center font-semibold text-[#677279]">
                                <svg
                                  focusable="false"
                                  className="icon-lock mr-2 align-text-top inline-block w-[1em] h-[1em] fill-current bg-none pointer-events-none overflow-visible"
                                  viewBox="0 0 12 15"
                                  role="presentation"
                                >
                                  <g
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="none"
                                    fill-rule="evenodd"
                                    stroke-linecap="square"
                                  >
                                    <path d="M6 1C4.32 1 3 2.375 3 4.125V6h6V4.125C9 2.375 7.68 1 6 1zM1 6h10v8H1z"></path>
                                  </g>
                                </svg>
                                100% Secure Payments
                              </p>

                              <div className=" justify-center flex flex-wrap max-w-[300px] my-[-4px] mx-auto">
                                <svg
                                  className="payment-list__item m-1 h-6 w-[38px]"
                                  viewBox="0 0 38 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="38"
                                  height="24"
                                  role="img"
                                  aria-labelledby="pi-paypal"
                                >
                                  <title id="pi-paypal">PayPal</title>
                                  <path
                                    opacity=".07"
                                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                                  ></path>
                                  <path
                                    fill="#fff"
                                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                                  ></path>
                                  <path
                                    fill="#003087"
                                    d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
                                  ></path>
                                  <path
                                    fill="#3086C8"
                                    d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
                                  ></path>
                                  <path
                                    fill="#012169"
                                    d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default Cart;
