import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { HideHeaderFooterContext } from "../context/HideContext";

import headerImg from "../assets/header-img.gif";

function Header() {
  const { hideHeaderFooter } = useContext(HideHeaderFooterContext);
  const { setHideHeaderFooter } = useContext(HideHeaderFooterContext);

  const navigate = useNavigate();

  const { cartItems, removeItemFromCart, cartProducts } =
    useContext(CartContext);

  const [showSecondaryIcon, setShowSecondaryIcon] = useState(false);
  const [showSecondaryIcon2, setShowSecondaryIcon2] = useState(false);
  const [showSecondaryIcon3, setShowSecondaryIcon3] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [displayStyle, setDisplayStyle] = useState("none");
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showCartEmpty, setShowCartEmpty] = useState(true);
  const [showItemCart, setShowItemCart] = useState(false);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth > 640) {
        setDisplayStyle("flex");
      } else {
        if (showSearchBar) {
          setDisplayStyle("block");
        } else {
          setDisplayStyle("none");
        }
      }
    }, 0);

    return () => clearInterval(interval);
  }, [showSearchBar]);

  const handlePrimaryIconClick = () => {
    setShowSecondaryIcon(!showSecondaryIcon);
    setShowSecondaryIcon2(false);
    setShowSecondaryIcon3(false);
  };

  const handlePrimaryIcon2Click = () => {
    setShowSecondaryIcon2(!showSecondaryIcon2);
    setShowSecondaryIcon(false);
    setShowSecondaryIcon3(false);
    setShowLoginForm(true);
  };

  const handlePrimaryIcon3Click = () => {
    setShowSecondaryIcon3(!showSecondaryIcon3);
    setShowSecondaryIcon(false);
    setShowSecondaryIcon2(false);
  };

  const handleSearchIconClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(!showRegisterForm);
    setShowLoginForm(false);
  };

  const handleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(false);
  };

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
  }, [cartProducts, quantities]);

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

  const calculateTotalPrice = (items, quantities, isCartProducts = false) => {
    return items.reduce((total, item) => {
      const quantity = isCartProducts
        ? quantities[item.id] || 1
        : item.quantity;
      return total + item.price * quantity;
    }, 0);
  };

  const totalPrice1 = calculateTotalPrice(cartProducts, quantities, true);
  const totalPrice2 = calculateTotalPrice(cartItems, quantities, false);
  const total = totalPrice1 + totalPrice2;

  const handleRemoveItem = (productId) => {
    removeItemFromCart(productId);
  };

  const handleViewCartClick = () => {
    navigate("/cart");
  };

  const handleCheckOutPage = () => {
    setHideHeaderFooter(true);
    navigate("/checkout");
  };

  if (hideHeaderFooter) return null;

  return (
    <div className="header-section z-[5] sticky top-0">
      <header
        className="header relative py-3 sm:py-5 bg-[#10b59f] text-[#ffffff] flex items-center min-h-16 sm:block sm:min-h-0 "
        style={{
          marginBottom:
            window.innerWidth > 640 ? "" : showSearchBar ? "59px" : "",
        }}
      >
        <div className="container max-w-[1480px] mx-auto sm:px-10 px-5 ">
          <div className="header-inner flex flex-wrap items-center sm:flex-nowrap">
            <nav className="mobile-nav lg:hidden inline-block mr-5">
              <button
                className="mobile-nav-toggle -top-[1px] relative align-middle"
                onClick={handlePrimaryIconClick}
              >
                <span
                  className={`icon-primary transition-transform duration-300 ${
                    showSecondaryIcon
                      ? "opacity-0 scale-30"
                      : "opacity-100 scale-100"
                  }`}
                >
                  <svg
                    className="icon block h-4 w-5 fill-current align-middle bg-none overflow-visible pointer-events-none"
                    focusable="false"
                    viewBox="0 0 20 16"
                    role="presentation"
                  >
                    <path
                      d="M0 14h20v2H0v-2zM0 0h20v2H0V0zm0 7h20v2H0V7z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>

                {showSecondaryIcon && (
                  <span
                    className={`icon-secondary transition-transform duration-300 ${
                      showSecondaryIcon
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-30"
                    }`}
                  >
                    <svg
                      className="icon block h-5 w-5 fill-current align-middle bg-none overflow-visible pointer-events-none"
                      focusable="false"
                      viewBox="0 0 19 19"
                      role="presentation"
                    >
                      <path
                        d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                        fill="currentColor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                )}
              </button>

              <div
                id="mobile-menu"
                className={`mobile-menu absolute w-[100vw] h-[100vh] left-0 top-full transition-all duration-300 text-[#677279] text-[17px] ${
                  showSecondaryIcon
                    ? "visible opacity-100 scale-100"
                    : "invisible opacity-0 scale-90"
                }`}
                style={{ maxHeight: showSecondaryIcon ? "498.5px" : "0px" }}
              >
                <svg
                  focusable="false"
                  className="nav-triangle left-5 sm:left-10 absolute bottom-full w-[18px] h-2 z-[1] inline-block fill-current align-middle pointer-events-none bg-none overflow-visible"
                  viewBox="0 0 20 9"
                  role="presentation"
                >
                  <path
                    d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                    fill="#ffffff"
                  ></path>
                </svg>

                <div className="mobile-menu-inner relative max-w-[100vw] h-full overflow-hidden">
                  <div className="mobile-menu-panel relative h-full bg-white overflow-y-auto overflow-x-hidden overscroll-none">
                    <div className="mobile-menu-section border border-solid border-[#e1e3e4] py-4 px-5">
                      <ul className="mobile-menu-nav list-none">
                        <li className="mobile-menu-nav-item">
                          <button className="mobile-menu-nav-link flex items-center justify-between w-full pt-2 pb-2 cursor-pointer ">
                            Acrylic Signage
                            <svg
                              focusable="false"
                              className=" w-2 h-3 inline-block fill-current align-middle pointer-events-none bg-none overflow-visible"
                              viewBox="0 0 8 12"
                              role="presentation"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M2 2l4 4-4 4"
                                fill="none"
                                strokeLinecap="square"
                              ></path>
                            </svg>
                          </button>
                        </li>
                        <li className="mobile-menu-nav-item">
                          <button className="mobile-menu-nav-link flex items-center justify-between w-full pt-2 pb-2 cursor-pointer">
                            Custom Acrylic Signage
                            <svg
                              focusable="false"
                              className=" w-2 h-3 inline-block fill-current align-middle pointer-events-none bg-none overflow-visible"
                              viewBox="0 0 8 12"
                              role="presentation"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M2 2l4 4-4 4"
                                fill="none"
                                strokeLinecap="square"
                              ></path>
                            </svg>
                          </button>
                        </li>
                        <li className="mobile-menu-nav-item">
                          <button className="mobile-menu-nav-link flex items-center justify-between w-full pt-2 pb-2 cursor-pointer">
                            Dual language Signage
                            <svg
                              focusable="false"
                              className=" w-2 h-3 inline-block fill-current align-middle pointer-events-none bg-none overflow-visible"
                              viewBox="0 0 8 12"
                              role="presentation"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M2 2l4 4-4 4"
                                fill="none"
                                strokeLinecap="square"
                              ></path>
                            </svg>
                          </button>
                        </li>
                        <li className="mobile-menu-nav-item">
                          <button className="mobile-menu-nav-link flex items-center justify-between w-full pt-2 pb-2 cursor-pointer">
                            Stickers & Boards
                            <svg
                              focusable="false"
                              className=" w-2 h-3 inline-block fill-current align-middle pointer-events-none bg-none overflow-visible"
                              viewBox="0 0 8 12"
                              role="presentation"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M2 2l4 4-4 4"
                                fill="none"
                                strokeLinecap="square"
                              ></path>
                            </svg>
                          </button>
                        </li>
                        <li className="mobile-menu-nav-item">
                          <button className="mobile-menu-nav-link flex items-center justify-between w-full pt-2 pb-2 cursor-pointer">
                            Badges
                            <svg
                              focusable="false"
                              className=" w-2 h-3 inline-block fill-current align-middle pointer-events-none bg-none overflow-visible"
                              viewBox="0 0 8 12"
                              role="presentation"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M2 2l4 4-4 4"
                                fill="none"
                                strokeLinecap="square"
                              ></path>
                            </svg>
                          </button>
                        </li>
                        <li className="mobile-menu-nav-item">
                          <a
                            href="/"
                            className="flex items-center justify-between w-full pt-2 pb-2 cursor-pointer"
                          >
                            Photo Acrylic
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="mobile-menu-section border border-solid border-[#e1e3e4] py-[18px] px-5">
                      <p className="mobile-menu-section-title text-[17px] leading-7 uppercase text-[#48484d] font-semibold mb-[17px]">
                        Need Help?
                      </p>
                      <div className="mobile-menu-help flex items-center">
                        <svg
                          className="phone mr-4 w-6 h-6 inline-block fill-current align-middle bg-none pointer-events-none overflow-visible"
                          focusable="false"
                          viewBox="0 0 24 24"
                          role="presentation"
                        >
                          <g
                            strokeWidth="2"
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="square"
                          >
                            <path
                              d="M17 15l-3 3-8-8 3-3-5-5-3 3c0 9.941 8.059 18 18 18l3-3-5-5z"
                              stroke="#48484d"
                            ></path>
                            <path
                              d="M14 1c4.971 0 9 4.029 9 9m-9-5c2.761 0 5 2.239 5 5"
                              stroke="#48484d"
                            ></path>
                          </g>
                        </svg>
                        <span>Call us +91 9874567890</span>
                      </div>

                      <div className="mobile-menu-help flex items-center mt-[18px]">
                        <svg
                          focusable="false"
                          className="email mr-[18px] w-[22px] h-[22px] inline-block fill-current align-middle bg-none pointer-events-none overflow-visible"
                          viewBox="0 0 22 22"
                          role="presentation"
                        >
                          <g fill="none" fillRule="evenodd">
                            <path
                              stroke="#48484d"
                              d="M.916667 10.08333367l3.66666667-2.65833334v4.65849997zm20.1666667 0L17.416667 7.42500033v4.65849997z"
                            ></path>
                            <path
                              stroke="#48484d"
                              strokeWidth="2"
                              d="M4.58333367 7.42500033L.916667 10.08333367V21.0833337h20.1666667V10.08333367L17.416667 7.42500033"
                            ></path>
                            <path
                              stroke="#48484d"
                              strokeWidth="2"
                              d="M4.58333367 12.1000003V.916667H17.416667v11.1833333m-16.5-2.01666663L21.0833337 21.0833337m0-11.00000003L11.0000003 15.5833337"
                            ></path>
                            <path
                              d="M8.25000033 5.50000033h5.49999997M8.25000033 9.166667h5.49999997"
                              stroke="#48484d"
                              strokeWidth="2"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                        <a href="/" className="email-link">
                          abc@abcgmail.com
                        </a>
                      </div>
                    </div>

                    <div className="mobile-menu-section py-[18px] px-5">
                      <p className=" text-[17px] font-semibold uppercase text-[#48484d] mb-[17px]">
                        Follow us
                      </p>

                      <ul className="mobile-social-list block my-[-10px] list-none">
                        <li className="social-media-item block m-0 py-[7px] ">
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <svg
                              className="facebook w-7 h-7 opacity-40 inline-block fill-current align-top mr-3 bg-none pointer-events-none overflow-visible "
                              focusable="false"
                              viewBox="0 0 30 30"
                            >
                              <path
                                d="M15 30C6.71572875 30 0 23.2842712 0 15 0 6.71572875 6.71572875 0 15 0c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15zm3.2142857-17.1429611h-2.1428678v-2.1425646c0-.5852979.8203285-1.07160109 1.0714928-1.07160109h1.071375v-2.1428925h-2.1428678c-2.3564786 0-3.2142536 1.98610393-3.2142536 3.21449359v2.1425646h-1.0714822l.0032143 2.1528011 1.0682679-.0099086v7.499969h3.2142536v-7.499969h2.1428678v-2.1428925z"
                                fill="currentColor"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                            Facebook
                          </a>
                        </li>

                        <li className="social-media-item block m-0 py-[7px]">
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <svg
                              className="instagram w-7 h-7 opacity-40 inline-block fill-current align-top mr-3 bg-none pointer-events-none overflow-visible"
                              focusable="false"
                              role="presentation"
                              viewBox="0 0 30 30"
                            >
                              <path
                                d="M15 30C6.71572875 30 0 23.2842712 0 15 0 6.71572875 6.71572875 0 15 0c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15zm.0000159-23.03571429c-2.1823849 0-2.4560363.00925037-3.3131306.0483571-.8553081.03901103-1.4394529.17486384-1.9505835.37352345-.52841925.20532625-.9765517.48009406-1.42331254.926823-.44672894.44676084-.72149675.89489329-.926823 1.42331254-.19865961.5111306-.33451242 1.0952754-.37352345 1.9505835-.03910673.8570943-.0483571 1.1307457-.0483571 3.3131306 0 2.1823531.00925037 2.4560045.0483571 3.3130988.03901103.8553081.17486384 1.4394529.37352345 1.9505835.20532625.5284193.48009406.9765517.926823 1.4233125.44676084.446729.89489329.7214968 1.42331254.9268549.5111306.1986278 1.0952754.3344806 1.9505835.3734916.8570943.0391067 1.1307457.0483571 3.3131306.0483571 2.1823531 0 2.4560045-.0092504 3.3130988-.0483571.8553081-.039011 1.4394529-.1748638 1.9505835-.3734916.5284193-.2053581.9765517-.4801259 1.4233125-.9268549.446729-.4467608.7214968-.8948932.9268549-1.4233125.1986278-.5111306.3344806-1.0952754.3734916-1.9505835.0391067-.8570943.0483571-1.1307457.0483571-3.3130988 0-2.1823849-.0092504-2.4560363-.0483571-3.3131306-.039011-.8553081-.1748638-1.4394529-.3734916-1.9505835-.2053581-.52841925-.4801259-.9765517-.9268549-1.42331254-.4467608-.44672894-.8948932-.72149675-1.4233125-.926823-.5111306-.19865961-1.0952754-.33451242-1.9505835-.37352345-.8570943-.03910673-1.1307457-.0483571-3.3130988-.0483571zm0 1.44787387c2.1456068 0 2.3997686.00819774 3.2471022.04685789.7834742.03572556 1.2089592.1666342 1.4921162.27668167.3750864.14577303.6427729.31990322.9239522.60111439.2812111.28117926.4553413.54886575.6011144.92395217.1100474.283157.2409561.708642.2766816 1.4921162.0386602.8473336.0468579 1.1014954.0468579 3.247134 0 2.1456068-.0081977 2.3997686-.0468579 3.2471022-.0357255.7834742-.1666342 1.2089592-.2766816 1.4921162-.1457731.3750864-.3199033.6427729-.6011144.9239522-.2811793.2812111-.5488658.4553413-.9239522.6011144-.283157.1100474-.708642.2409561-1.4921162.2766816-.847206.0386602-1.1013359.0468579-3.2471022.0468579-2.1457981 0-2.3998961-.0081977-3.247134-.0468579-.7834742-.0357255-1.2089592-.1666342-1.4921162-.2766816-.37508642-.1457731-.64277291-.3199033-.92395217-.6011144-.28117927-.2811793-.45534136-.5488658-.60111439-.9239522-.11004747-.283157-.24095611-.708642-.27668167-1.4921162-.03866015-.8473336-.04685789-1.1014954-.04685789-3.2471022 0-2.1456386.00819774-2.3998004.04685789-3.247134.03572556-.7834742.1666342-1.2089592.27668167-1.4921162.14577303-.37508642.31990322-.64277291.60111439-.92395217.28117926-.28121117.54886575-.45534136.92395217-.60111439.283157-.11004747.708642-.24095611 1.4921162-.27668167.8473336-.03866015 1.1014954-.04685789 3.247134-.04685789zm0 9.26641182c-1.479357 0-2.6785873-1.1992303-2.6785873-2.6785555 0-1.479357 1.1992303-2.6785873 2.6785873-2.6785873 1.4793252 0 2.6785555 1.1992303 2.6785555 2.6785873 0 1.4793252-1.1992303 2.6785555-2.6785555 2.6785555zm0-6.8050167c-2.2790034 0-4.1264612 1.8474578-4.1264612 4.1264612 0 2.2789716 1.8474578 4.1264294 4.1264612 4.1264294 2.2789716 0 4.1264294-1.8474578 4.1264294-4.1264294 0-2.2790034-1.8474578-4.1264612-4.1264294-4.1264612zm5.2537621-.1630297c0-.532566-.431737-.96430298-.964303-.96430298-.532534 0-.964271.43173698-.964271.96430298 0 .5325659.431737.964271.964271.964271.532566 0 .964303-.4317051.964303-.964271z"
                                fill="currentColor"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                            Instagram
                          </a>
                        </li>

                        <li className="social-media-item block m-0 py-[7px]">
                          <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <svg
                              className="youtube w-7 h-7 opacity-40 inline-block fill-current align-top mr-3 bg-none pointer-events-none overflow-visible"
                              focusable="false"
                              role="presentation"
                              viewBox="0 0 30 30"
                            >
                              <path
                                d="M15 30c8.2842712 0 15-6.7157288 15-15 0-8.28427125-6.7157288-15-15-15C6.71572875 0 0 6.71572875 0 15c0 8.2842712 6.71572875 15 15 15zm7.6656364-18.7823145C23 12.443121 23 15 23 15s0 2.5567903-.3343636 3.7824032c-.184.6760565-.7260909 1.208492-1.4145455 1.3892823C20.0033636 20.5 15 20.5 15 20.5s-5.00336364 0-6.25109091-.3283145c-.68836364-.1807903-1.23054545-.7132258-1.41454545-1.3892823C7 17.5567903 7 15 7 15s0-2.556879.33436364-3.7823145c.184-.6761452.72618181-1.2085807 1.41454545-1.38928227C9.99663636 9.5 15 9.5 15 9.5s5.0033636 0 6.2510909.32840323c.6884546.18070157 1.2305455.71313707 1.4145455 1.38928227zm-9.302 6.103758l4.1818181-2.3213548-4.1818181-2.3215322v4.642887z"
                                fill="currentColor"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                            Youtube
                          </a>
                        </li>

                        <li className="social-media-item block m-0 py-[7px]">
                          <a
                            href="https://in.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <svg
                              className="linkedin w-7 h-7 opacity-40 inline-block fill-current align-top mr-3 bg-none pointer-events-none overflow-visible"
                              focusable="false"
                              role="presentation"
                              viewBox="0 0 30 30"
                            >
                              <path
                                d="M15 30C6.71572875 30 0 23.2842712 0 15 0 6.71572875 6.71572875 0 15 0c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15zM10.2456033 7.5c-.92709386 0-1.67417473.75112475-1.67417473 1.67662742 0 .92604418.74708087 1.67716898 1.67417473 1.67716898.9233098 0 1.6730935-.7511248 1.6730935-1.67716898C11.9186968 8.25112475 11.1689131 7.5 10.2456033 7.5zM8.80063428 21.4285714h2.88885682v-9.3037658H8.80063428v9.3037658zm4.69979822-9.3037658v9.3037658h2.8829104v-4.6015191c0-1.2141468.2292058-2.3898439 1.7309356-2.3898439 1.4811878 0 1.5001081 1.3879832 1.5001081 2.4667435v4.5246195H22.5V16.326122c0-2.5057349-.5400389-4.4320151-3.4618711-4.4320151-1.4044256 0-2.3466556.7711619-2.7315482 1.502791h-.0394623v-1.2720923h-2.7666859z"
                                fill="currentColor"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                            LinkedIn
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <h1 className="header-logo sm:mr-9 inline-block mb-0 align-middle">
              <a
                href="/"
                alt="headerImg"
                className="header-logo-link block bg-transparent no-underline"
              >
                <img
                  className="header-logo-img h-auto border-none max-h-[130px] sm:max-w-[160px] max-w-[70px]"
                  src={headerImg}
                  alt=""
                />
              </a>
            </h1>

            <div
              className="header-search-bar flex-grow flex-shrink-0 basis-auto hidden sm:inline "
              style={{
                display:
                  window.innerWidth > 640
                    ? "inline"
                    : showSearchBar && window.innerWidth < 640
                    ? "block"
                    : "none",
                marginBottom:
                  window.innerWidth > 640
                    ? ""
                    : showSearchBar
                    ? "-59px"
                    : "0px",
              }}
            >
              <form className="search-bar relative min-w-full pb-[15px] z-[1] mt-0 sm:pb-0 sm:min-w-0">
                <div className="search-bar-wrapper flex items-center justify-between sm:block">
                  <div className="search-bar-top relative flex h-11 items-center rounded-[3px] bg-[#ffffff] text-[#677279] z-[1]">
                    <div className="search-bar-input relative flex-grow flex-shrink-0 basis-auto h-full">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="h-full w-full px-[15px] pb-[1px] outline-none border-none bg-transparent leading-normal text-[#48484d] text-base font-semibold"
                      />
                    </div>

                    <button
                      type="submit"
                      className="search-bar-btn flex-none w-[50px] h-full text-[#ffffff] bg-[#48484d]  rounded-r-[3px]"
                    >
                      <svg
                        className="w-[22px] h-[22px] mx-auto"
                        focusable="false"
                        viewBox="0 0 21 21"
                        role="presentation"
                      >
                        <g
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <path d="M19 19l-5-5" strokeLinecap="square"></path>
                          <circle cx="8.5" cy="8.5" r="7.5"></circle>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="header-action flex ml-auto items-center sm:pl-[28px] lg:pl-[5px]">
              <div className="header-search text-[#ffffff] px-[9px] sm:hidden">
                <a
                  id="search-icon"
                  className="header-search-link block text-[15px] font-semibold"
                  href="/#"
                  onClick={handleSearchIconClick}
                >
                  <svg
                    focusable="false"
                    className="icon-search w-[22px] h-[22px] my-0 mx-auto block fill-current align-middle pointer-events-none bg-none overflow-visible"
                    viewBox="0 0 21 21"
                    role="presentation"
                  >
                    <g
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path d="M19 19l-5-5" strokeLinecap="square"></path>
                      <circle cx="8.5" cy="8.5" r="7.5"></circle>
                    </g>
                  </svg>
                </a>
              </div>

              <div className="header-account px-[9px] sm:relative lg:pl-9 xl:px-9 cursor-pointer">
                <span className="header-account-title xl:block font-normal text-[#f3f5f6] text-sm hidden">
                  Login / Signup
                </span>

                <div className="header-account-content sm:relative sm:max-w-max">
                  <a
                    href="/#"
                    className="header-account-link-sm relative align-middle block font-semibold xl:hidden"
                    onClick={handlePrimaryIcon2Click}
                  >
                    <span
                      className={`icon-primary transition-transform duration-300 ${
                        showSecondaryIcon2
                          ? "opacity-0 scale-30"
                          : "opacity-100 scale-100"
                      }`}
                    >
                      <svg
                        focusable="false"
                        className="icon-account w-5 h-[22px]"
                        viewBox="0 0 20 22"
                        role="presentation"
                      >
                        <path
                          d="M10 13c2.82 0 5.33.64 6.98 1.2A3 3 0 0 1 19 17.02V21H1v-3.97a3 3 0 0 1 2.03-2.84A22.35 22.35 0 0 1 10 13zm0 0c-2.76 0-5-3.24-5-6V6a5 5 0 0 1 10 0v1c0 2.76-2.24 6-5 6z"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        ></path>
                      </svg>
                    </span>

                    {showSecondaryIcon2 && (
                      <span
                        className={`icon-secondary transition-transform duration-300 ${
                          showSecondaryIcon2
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-30"
                        }`}
                      >
                        <svg
                          focusable="false"
                          className="icon-close w-5 h-5"
                          viewBox="0 0 19 19"
                          role="presentation"
                        >
                          <path
                            d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                            fill="currentColor"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    )}
                  </a>

                  <a
                    href="/#"
                    className="header-account-link xl:block font-semibold text-base hidden"
                    onClick={handlePrimaryIcon2Click}
                  >
                    My account
                    <svg
                      className=" w-3 h-2 ml-1 inline-block fill-current align-middle bg-transparent pointer-events-none overflow-visible"
                      focusable="false"
                      viewBox="0 0 12 8"
                      role="presentation"
                    >
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M10 2L6 6 2 2"
                        fill="none"
                        strokeLinecap="square"
                      ></path>
                    </svg>
                  </a>

                  <div
                    className={`account-popover text-center absolute w-[100vw] left-0 top-full bg-white text-[#677279] z-[1]   will-change-transform sm:right-[-5px] xl:right-0 sm:min-w-[320px] sm:w-auto sm:left-auto sm:rounded-[3px] sm:top-[calc(100%+15px)] xl:translate-x-[calc(50%-7px)] ${
                      showSecondaryIcon2
                        ? "visible opacity-100 scale-100"
                        : "invisible opacity-0 scale-90"
                    }`}
                  >
                    <svg
                      focusable="false"
                      className="nav-triangle absolute bottom-full w-[18px] h-2 z-[2] right-[86px] sm:right-[6px] xl:left-[calc(50%-8px)] inline-block fill-current align-middle bg-none pointer-events-none overflow-visible"
                      viewBox="0 0 20 9"
                      role="presentation"
                    >
                      <path
                        d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                        fill="#ffffff"
                      ></path>
                    </svg>

                    <div
                      className="popover-panel-list relative overflow-hidden"
                      style={{
                        height: showLoginForm
                          ? "375px"
                          : showRegisterForm
                          ? "469px"
                          : "",
                      }}
                    >
                      {showLoginForm && (
                        <div
                          id="header-login-panel"
                          className="popover-panel w-full"
                        >
                          <div className="popover-inner py-[15px] px-[25px]">
                            <form id="header-login">
                              <header className="popover-header pt-3 pb-[30px] sm:pb-[15px]">
                                <h2 className="popover-title mb-2 text-[21px] sm:text-[19px] font-semibold text-[#48484d]">
                                  Login to my account
                                </h2>

                                <p className="popover-legend text-[15px] sm:text-[16px] mb-0">
                                  Enter your e-mail and password:
                                </p>
                              </header>

                              <div className="form-input-wrapper relative mb-3 w-full">
                                <input
                                  type="email"
                                  className="form-field block pt-5 pb-[3px] px-3 rounded-sm border border-solid border-[#d4d6d8] w-full leading-normal h-12 text-[#48484d] bg-white resize-none text-base font-semibold"
                                  required
                                />

                                <label className="form-field-label absolute top-0 left-[13px] leading-[48px] text-base text-[#677279] scale-100 origin-top-left pointer-events-none">
                                  Email
                                </label>
                              </div>

                              <div className="form-input-wrapper relative mb-3 w-full">
                                <input
                                  type="password"
                                  className="form-field block pt-5 pb-[3px] px-3 rounded-sm border border-solid border-[#d4d6d8] w-full leading-normal h-12 text-[#48484d] bg-white resize-none text-base font-semibold"
                                  required
                                />

                                <label className="form-field-label absolute top-0 left-[13px] leading-[48px] text-base text-[#677279] scale-100 origin-top-left pointer-events-none">
                                  Password
                                </label>
                              </div>

                              <button
                                type="submit"
                                className="form-submit block mt-5 w-full text-[#fff] bg-[#48484d] relative leading-[48px] px-[30px] text-center rounded-sm text-base font-semibold cursor-pointer overflow-visible border-none"
                              >
                                Login
                              </button>
                            </form>

                            <div className="popover-secondary-action mt-4 text-sm">
                              <p>
                                New customer?{" "}
                                <button
                                  className="cursor-pointer text-[#48484d] hover:underline"
                                  onClick={handleRegisterClick}
                                >
                                  {" "}
                                  Create your account
                                </button>
                              </p>

                              <p>
                                Lost password?{" "}
                                <a
                                  href="/"
                                  className="text-[#48484d] hover:underline"
                                >
                                  Recover password
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {showRegisterForm && (
                        <div
                          id="header-register-panel"
                          className="popover-panel absolute top-0 left-0 w-full"
                        >
                          <div className="popover-inner pt-[15px] pb-5 px-5 sm:py-[15px] sm:px-[25px]">
                            <form id="header-register">
                              <header className="popover-header block pt-3 pb-[30px] sm:pb-[15px]">
                                <h2 className="popover-title mb-1 text-[21px] sm:mb-2 sm:text-[19px] font-semibold text-[#48484d]">
                                  Create my account
                                </h2>
                                <p className="popover-legend mb-0 text-[15px] sm:text-base">
                                  Please fill in the information below:
                                </p>
                              </header>

                              <div className="form-input-wrapper relative w-full mb-3">
                                <input
                                  type="text"
                                  className="form-field pt-5 pb-[3px] px-3 block rounded-sm border border-solid border-[#d4d6d8] h-12 w-full leading-normal text-[#48484d] bg-[#ffffff] resize-none text-base"
                                  required
                                />
                                <label className="form-field-label absolute left-[13px] top-0 text-base leading-[48px] text-[#677279] scale-100 origin-top-left pointer-events-none">
                                  First name
                                </label>
                              </div>

                              <div className="form-input-wrapper relative w-full mb-3">
                                <input
                                  type="text"
                                  className="form-field pt-5 pb-[3px] px-3 block rounded-sm border border-solid border-[#d4d6d8] h-12 w-full leading-normal text-[#48484d] bg-[#ffffff] resize-none text-base"
                                  required
                                />
                                <label className="form-field-label absolute left-[13px] top-0 text-base leading-[48px] text-[#677279] scale-100 origin-top-left pointer-events-none">
                                  Last name
                                </label>
                              </div>

                              <div className="form-input-wrapper relative w-full mb-3">
                                <input
                                  type="email"
                                  className="form-field pt-5 pb-[3px] px-3 block rounded-sm border border-solid border-[#d4d6d8] h-12 w-full leading-normal text-[#48484d] bg-[#ffffff] resize-none text-base"
                                  required
                                />
                                <label className="form-field-label absolute left-[13px] top-0 text-base leading-[48px] text-[#677279] scale-100 origin-top-left pointer-events-none">
                                  Email
                                </label>
                              </div>

                              <div className="form-input-wrapper relative w-full mb-3">
                                <input
                                  type="password"
                                  className="form-field pt-5 pb-[3px] px-3 block rounded-sm border border-solid border-[#d4d6d8] h-12 w-full leading-normal text-[#48484d] bg-[#ffffff] resize-none text-base"
                                  required
                                />
                                <label className="form-field-label absolute left-[13px] top-0 text-base leading-[48px] text-[#677279] scale-100 origin-top-left pointer-events-none">
                                  Password
                                </label>
                              </div>

                              <button
                                type="submit"
                                className="block mt-5 w-full text-[#ffffff] bg-[#48484d] relative px-[30px] leading-[48px] text-center rounded-sm cursor-pointer text-base font-semibold"
                              >
                                Create my account
                              </button>
                            </form>
                            <div className="popover-secondary-action mt-4 text-sm">
                              <p className=" mb-0">
                                Already have an account?{" "}
                                <button
                                  className=" cursor-pointer text-[#48484d] border-none bg-none hover:underline"
                                  onClick={handleLoginForm}
                                >
                                  Login here
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="header-itemcart pr-1 pl-[9px] sm:relative xl:pl-9 xl:pr-0 cursor-pointer">
                <a
                  // href="/#"
                  className="block"
                  onClick={handlePrimaryIcon3Click}
                >
                  <div className=" sm:max-w-max sm:relative">
                    <div className="header-cartIcon relative align-middle ml-[-2px] xl:inline-block xl:mr-[22px] xl:top-[-1px]">
                      <span
                        className={`icon-primary show transition-transform duration-300 block ${
                          showSecondaryIcon3
                            ? "opacity-0 scale-30"
                            : "opacity-100 scale-100"
                        }`}
                      >
                        <svg
                          className=" w-7 h-6 fill-current align-middle bg-transparent pointer-events-none overflow-visible"
                          focusable="false"
                          viewBox="0 0 27 24"
                          role="presentation"
                        >
                          <g
                            transform="translate(0 1)"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <circle
                              strokeLinecap="square"
                              cx="11"
                              cy="20"
                              r="2"
                            ></circle>
                            <circle
                              strokeLinecap="square"
                              cx="22"
                              cy="20"
                              r="2"
                            ></circle>
                            <path d="M7.31 5h18.27l-1.44 10H9.78L6.22 0H0"></path>
                          </g>
                        </svg>

                        <span
                          className="header-cart-count inline-flex absolute right-[-14px] top-[-7px] items-center justify-center h-5 min-w-5 p-1 text-[12px] text-center bg-[#48484d] text-[#ffffff]
                        rounded-[1.75em] will-change-transform z-[1] font-semibold hover:scale-125"
                        >
                          {cartItems.length}
                        </span>
                      </span>

                      {showSecondaryIcon3 && (
                        <span
                          className={`icon-secondary show2 absolute top-1/2 left-2 transition-transform duration-300 ${
                            showSecondaryIcon3
                              ? "opacity-100 scale-100 "
                              : "opacity-0 scale-30"
                          }`}
                        >
                          <svg
                            focusable="false"
                            className="icon--close w-[19px] h-[19px] block fill-current align-middle pointer-events-none bg-none overflow-visible"
                            viewBox="0 0 19 19"
                            role="presentation"
                          >
                            <path
                              d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                              fill="currentColor"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      )}
                    </div>

                    <span className="text-[17px] text-[#fff] font-semibold hidden xl:inline-block">
                      Cart
                    </span>
                  </div>
                </a>

                <form
                  className={`mini-cart left-0 top-full max-h-0 w-screen h-screen sm:left-auto right-0 sm:top-[calc(100%+14px)] sm:max-h-none sm:w-[470px] sm:h-auto rounded-[3px] absolute z-[1] text-[#677279] bg-white will-change-transform ${
                    showSecondaryIcon3
                      ? "visible opacity-100 scale-100"
                      : "invisible opacity-0 scale-90"
                  } `}
                  style={{ maxHeight: showSecondaryIcon3 ? "544px" : "0px" }}
                >
                  <svg
                    focusable="false"
                    className="icon-nav-triangle absolute w-[18px] h-2 right-[43px] sm:right-[6px] bottom-full z-[2] inline-block fill-current align-middle bg-none pointer-events-none overflow-visible xl:right-[58px]"
                    viewBox="0 0 20 9"
                    role="presentation"
                  >
                    <path
                      d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                      fill="#ffffff"
                    ></path>
                  </svg>

                  {showCartEmpty && (
                    <div className="mini-cart-content flex flex-col justify-between h-[calc(100%-20px)] pt-5 pb-[25px] pr-[25px] pl-[25px] sm:block">
                      <p className="alert mb-0 text-[15px] py-[6px] px-[14px] block text-center whitespace-normal rounded-sm break-words bg-[#f7fbfd] text-[#48484d] font-semibold">
                        Spend{" "}
                        <span>
                          <span>$500</span>
                        </span>{" "}
                        or more and get free shipping!
                      </p>

                      <div className="mini-cart-empty text-center pt-[70px] pb-[60px] sm:px-[25px]">
                        <svg
                          className=" mb-[10px] text-center inline-block"
                          focusable="false"
                          width="81"
                          height="70"
                          viewBox="0 0 81 70"
                        >
                          <g
                            transform="translate(0 2)"
                            strokeWidth="4"
                            stroke="#48484d"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <circle
                              strokeLinecap="square"
                              cx="34"
                              cy="60"
                              r="6"
                            ></circle>
                            <circle
                              strokeLinecap="square"
                              cx="67"
                              cy="60"
                              r="6"
                            ></circle>
                            <path d="M22.9360352 15h54.8070373l-4.3391876 30H30.3387146L19.6676025 0H.99560547"></path>
                          </g>
                        </svg>

                        <p className=" mb-0 text-[19px] text-[#48484d] leading-[1.7] font-semibold">
                          Your cart is empty
                        </p>
                      </div>

                      <a
                        href="/"
                        className=" sm:px-[25px] w-full bg-[#48484d] text-[#ffffff] relative inline-block px-[30px] leading-[48px] text-center rounded-sm pointer text-base font-semibold"
                      >
                        Shop our products
                      </a>
                    </div>
                  )}

                  {showItemCart && (
                    <div className="mini-cart-inner">
                      <div className="mini-cart-content">
                        <div className="mini-cart-alert pt-5 px-5">
                          {total > 500 ? (
                            <p className="alert mb-0 text-[15px] py-[6px] px-[14p] text-center block rounded-sm whitespace-normal break-words text-[#48484d] bg-[#f7fbfd] font-semibold">
                              You are eligible for free shipping!
                            </p>
                          ) : (
                            <p className="alert mb-0 text-[15px] py-[6px] px-[14p] text-center block rounded-sm whitespace-normal break-words text-[#48484d] bg-[#f7fbfd] font-semibold">
                              Spend ₹{""}
                              <span>
                                <span className="money">{500 - total}</span>
                              </span>{" "}
                              more and get free shipping
                            </p>
                          )}
                        </div>

                        <div className="mini-cart-item-list max-h-[300px] px-5 overflow-auto">
                          {cartItems.map((product) => (
                            <div className="mini-cart-item flex items-start py-5 px-0">
                              <div className="mini-cart-img-wrpper min-w-[80px] w-[80px] mr-5">
                                <div
                                  className="aspect-ratio relative mx-auto"
                                  style={{ paddingBottom: "56.25%" }}
                                >
                                  <img src={product.imageSrc} alt="" />
                                </div>
                              </div>

                              <div className="mini-cart-item-wrpper sm:flex sm:flex-grow sm:items-start sm:justify-between">
                                <div className="mini-cart-product mb-3 sm:mr-5 sm:my-0 sm:ml-0">
                                  <h1 className="product-title block mb-1 text-[15px] leading-6 text-[#48484d] font-semibold">
                                    {product.name}
                                  </h1>

                                  <span className="product-price text-[16px] font-semibold text-[#10b59f] mr-[0.7em]">
                                    ₹{product.price}
                                  </span>
                                </div>

                                <div className="mini-cart-quantity">
                                  <div className="quantity-selector inline-flex items-center h-[38px] text-base border border-solid border-[#e1e3e4] align-middle rounded-[3px]">
                                    <button
                                      className="minus-btn flex items-center py-0 px-3 text-[#67727999] h-full touch-manipulation cursor-pointer hover:text-[#48484d] transition-[.2]"
                                      type="button"
                                      onClick={() =>
                                        handleDecreaseQty(product.id)
                                      }
                                    >
                                      <svg
                                        focusable="false"
                                        className="icon-minus w-[10px] h-[2px] inline-block fill-current align-middle overflow-visible pointer-events-none bg-none"
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
                                      id={`qty-${product.id}`}
                                      className="quantity-value appearance-none py-0 px-[5px] text-center min-w-8 border-none bg-transparent outline-none"
                                      type="text"
                                      size={2}
                                      value={
                                        quantities[product.id] +
                                          product.quantity || 1
                                      }
                                      onInput={(e) =>
                                        handleQuantityChange(
                                          product.id,
                                          e.target.value,
                                          e.preventDefault()
                                        )
                                      }
                                    />

                                    <button
                                      className="plus-btn flex items-center py-0 px-3 text-[#67727999] h-full touch-manipulation cursor-pointer hover:text-[#48484d] transition-[.2]"
                                      type="button"
                                      onClick={() =>
                                        handleIncreaseQty(product.id)
                                      }
                                    >
                                      <svg
                                        focusable="false"
                                        className="icon-plus w-[10px] h-[10px] inline-block fill-current align-middle overflow-visible pointer-events-none bg-none"
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
                                    className="mini-cart-quantity-remove inline-block ml-[10px] leading-4 text-sm cursor-pointer sm:block sm:w-max sm:mt-[10px] sm:mb-0 sm:mx-auto"
                                    onClick={() => handleRemoveItem(product.id)}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mini-cart-price border border-solid border-[#e1e3e4] pt-[15px] px-5 pb-5 sm:px-[25px] sm:pb-[25px]">
                        <div className="mini-cart-total flex items-center justify-between text-[#48484d] font-semibold">
                          <span>Total</span>

                          <span>
                            <span className="money">₹{total}</span>
                          </span>
                        </div>

                        <div className="mini-cart-btn-container mt-4">
                          <div className=" m-[-10px] flex flex-row flex-wrap">
                            <a
                              className="cart-page-btn m-[10px] px-[15px] flex-grow flex-shrink-0 basis-0 text-[#ffffff] bg-[#10b59f] relative inline-block py-0 leading-[48px] rounded-sm text-center font-semibold text-base cursor-pointer hover:bg-[#39c4b1]"
                              onClick={handleViewCartClick}
                            >
                              View cart
                            </a>

                            <button
                              type="button"
                              className="checkout-page-btn  m-[10px] px-[15px] flex-grow flex-shrink-0 basis-0 text-[#ffffff] bg-[#48484d] relative inline-block py-0 leading-[48px] rounded-sm text-center font-semibold text-base cursor-pointer hover:bg-[#68686e]"
                              onClick={handleCheckOutPage}
                            >
                              Checkout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="nav-bar hidden lg:block lg:relative lg:left-0 lg:w-full lg:border-b-0 lg:border-solid lg:border-[#e1e3e4] bg-[#fff]">
        <div className="nav-bar-inner">
          <div className="container max-w-[1480px] mx-auto md:px-10 md:py-0 sm:px-5 sm:py-0">
            <ul className="nav-bar-list list-none m-0 p-0">
              <li className="nav-bar-item lg:inline-block lg:static lg:mr-9 lg:py-[17px]">
                <a
                  href="/"
                  className="nav-bar-link transition-colors block cursor-pointer text-[#48484d] text-[15px] tracking-wider font-medium py-1"
                >
                  Acrylic Signage
                  <svg
                    className=" w-3 h-2 ml-[10px] inline-block fill-current align-middle bg-none overflow-visible pointer-events-none"
                    focusable="false"
                    viewBox="0 0 12 8"
                    role="presentation"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M10 2L6 6 2 2"
                      fill="none"
                      strokeLinecap="square"
                    ></path>
                  </svg>
                </a>

                <div
                  id="desktop-menu-1"
                  className="menu overflow-auto overscroll-contain absolute w-[100vw] left-0 top-full bg-red-50 rounded-bl-[3px] rounded-br-[3px] border-b border-t border-solid border-[#e1e3e4] invisible opacity-0"
                  role="list"
                >
                  <div className="container px-10 max-w-[1480px] mx-auto">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>

                    <a href="http://localhost:3000/">hello</a>
                  </div>
                </div>
              </li>

              <li className="nav-bar-item lg:relative lg:inline-block lg:mr-9 lg:py-[17px] ">
                <a
                  href="/"
                  className="nav-bar-link transition-colors block cursor-pointer text-[#48484d] text-[15px] tracking-wider font-medium"
                >
                  Custom Acrylic Signage
                  <svg
                    className=" w-3 h-2 ml-[10px] inline-block fill-current align-middle bg-none overflow-visible pointer-events-none"
                    focusable="false"
                    viewBox="0 0 12 8"
                    role="presentation"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M10 2L6 6 2 2"
                      fill="none"
                      strokeLinecap="square"
                    ></path>
                  </svg>
                </a>

                <ul
                  id="desktop-menu-2"
                  className="nav-drop overflow-auto overscroll-contain absolute top-full py-4 list-none bg-white text-[#677279] border border-solid border-[#e1e3e4] invisible whitespace-nowrap opacity-0 z-[1]"
                >
                  <li className="nav-drop-item">
                    <a
                      className="nav-drop-link flex justify-between items-center cursor-pointer py-[2px] pr-12 pl-5"
                      href="/#"
                    >
                      hello
                    </a>
                  </li>

                  <li className="nav-drop-item">
                    <a
                      className="nav-drop-link flex justify-between items-center cursor-pointer py-[2px] pr-12 pl-5"
                      href="/#"
                    >
                      world
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-bar-item lg:relative lg:inline-block lg:mr-9 lg:py-[17px]">
                <a
                  href="/"
                  className="nav-bar-link transition-colors block cursor-pointer text-[#48484d] text-[15px] tracking-wider font-medium"
                >
                  Dual language Signage
                  <svg
                    className=" w-3 h-2 ml-[10px] inline-block fill-current align-middle bg-none overflow-visible pointer-events-none"
                    focusable="false"
                    viewBox="0 0 12 8"
                    role="presentation"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M10 2L6 6 2 2"
                      fill="none"
                      strokeLinecap="square"
                    ></path>
                  </svg>
                </a>

                <ul
                  id="desktop-menu-2"
                  className="nav-drop overflow-auto overscroll-contain absolute top-full py-4 list-none bg-white text-[#677279] border border-solid border-[#e1e3e4] invisible whitespace-nowrap opacity-0 z-[1]"
                >
                  <li className="nav-drop-item">
                    <a
                      className="nav-drop-link flex justify-between items-center cursor-pointer py-[2px] pr-12 pl-5"
                      href="/#"
                    >
                      hello
                    </a>
                  </li>

                  <li className="nav-drop-item">
                    <a
                      className="nav-drop-link flex justify-between items-center cursor-pointer py-[2px] pr-12 pl-5"
                      href="/#"
                    >
                      world
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-bar-item lg:static lg:inline-block lg:mr-9 lg:py-[17px]">
                <a
                  href="/"
                  className="nav-bar-link transition-colors block cursor-pointer text-[#48484d] text-[15px] tracking-wider font-medium"
                >
                  Stickers & Boards
                  <svg
                    className=" w-3 h-2 ml-[10px] inline-block fill-current align-middle bg-none overflow-visible pointer-events-none"
                    focusable="false"
                    viewBox="0 0 12 8"
                    role="presentation"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M10 2L6 6 2 2"
                      fill="none"
                      strokeLinecap="square"
                    ></path>
                  </svg>
                </a>

                <div
                  id="desktop-menu-1"
                  className="menu overflow-auto overscroll-contain absolute w-[100vw] left-0 top-full bg-red-50 rounded-bl-[3px] rounded-br-[3px] border-b border-t border-solid border-[#e1e3e4] invisible opacity-0"
                  role="list"
                >
                  <div className="container px-5 max-w-[1480px] mx-auto">
                    <p>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>

                    <a href="http://localhost:3000/">hello</a>
                  </div>
                </div>
              </li>

              <li className="nav-bar-item lg:relative lg:inline-block lg:mr-9 lg:py-[17px]">
                <a
                  href="/"
                  className="nav-bar-link transition-colors block cursor-pointer text-[#48484d] text-[15px] tracking-wider font-medium"
                >
                  Badges
                  <svg
                    className=" w-3 h-2 ml-[10px] inline-block fill-current align-middle bg-none overflow-visible pointer-events-none"
                    focusable="false"
                    viewBox="0 0 12 8"
                    role="presentation"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M10 2L6 6 2 2"
                      fill="none"
                      strokeLinecap="square"
                    ></path>
                  </svg>
                </a>

                <ul
                  id="desktop-menu-2"
                  className="nav-drop overflow-auto overscroll-contain absolute top-full py-4 list-none bg-white text-[#677279] border border-solid border-[#e1e3e4] invisible whitespace-nowrap opacity-0 z-[1]"
                >
                  <li className="nav-drop-item">
                    <a
                      className="nav-drop-link flex justify-between items-center cursor-pointer py-[2px] pr-12 pl-5"
                      href="/#"
                    >
                      hello
                    </a>
                  </li>

                  <li className="nav-drop-item">
                    <a
                      className="nav-drop-link flex justify-between items-center cursor-pointer py-[2px] pr-12 pl-5"
                      href="/#"
                    >
                      world
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-bar-item lg:relative lg:inline-block lg:mr-9 lg:py-[17px]">
                <a
                  href="/"
                  className="nav-bar-link transition-colors block cursor-pointer text-[#48484d] text-[15px] tracking-wider font-medium"
                >
                  Photo Acrylic
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
