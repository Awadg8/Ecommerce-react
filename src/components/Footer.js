import React, { useContext, useState } from "react";
import { HideHeaderFooterContext } from "../context/HideContext";

function Footer() {
  const { hideHeaderFooter } = useContext(HideHeaderFooterContext);
  const [showPlusBtn, setShowPlusBtn] = useState(false);
  const [showPlusBtn2, setShowPlusBtn2] = useState(false);
  const [showPlusBtn3, setShowPlusBtn3] = useState(false);

  if (hideHeaderFooter) return null;

  return (
    <div className="section-footer">
      <footer className="footer sm:p-0 pt-[10px] pb-8 sm:px-0 bg-[#f3f5f6] text-[#677279]">
        <div className="container max-w-[1480px] mx-auto px-5 sm:px-10">
          <div className="footer-wrapper sm:py-[50px]">
            <div className="footer-block-list flex flex-col sm:mx-[-20px] sm:my-[-35px] sm:flex-row flex-wrap">
              <div className="block-item-text mr-[-20px] pr-5 border-b-[1px] border-[#e1e3e4] border-solid sm:flex-grow-0 sm:flex-shrink-0 sm:basis-[50%] sm:py-5 sm:px-[35px] sm:m-0 sm:border-none sm:border-b-0 lg:flex-grow lg:flex-shrink-0 lg:basis-[300px]">
                <button
                  className="footer-title relative sm:block w-full sm:mb-[0.85em] text-[#10b59f] text-left cursor-pointer sm:cursor-text text-sm font-semibold uppercase flex items-center justify-between mb-0 py-[19px] px-0 sm:p-0"
                  onClick={() => {
                    setShowPlusBtn(!showPlusBtn);
                  }}
                >
                  <span>Find Us</span>

                  <span
                    className={` plus-button block relative right-0 w-[10px] h-[10px] top-[calc(50%-5px)] text-[#10b59f] sm:hidden ${
                      showPlusBtn ? "showplus" : ""
                    } `}
                  ></span>
                </button>

                <div
                  className="footer-collapse h-0 overflow-hidden sm:overflow-visible "
                  style={{
                    height: showPlusBtn ? "auto" : "",
                  }}
                >
                  <div className="footer-collapse-content pr-5 pb-[25px] sm:p-0">
                    <div className="rte break-words mt-[-.425em] sm:mt-0">
                      <p className=" mb-[0.7em] text-base leading-8 font-medium">
                        Sector Number 7 Rd, MIDC Sector 2 Industrial Area, MIDC,
                        Bhosari, Pimpri-Chichwad, Maharashtra 411026
                      </p>

                      <p className=" mb-[0.7em] text-base leading-8 font-medium">
                        <strong>✉</strong> : sales@parallellearning.in
                      </p>

                      <p className=" mb-0 text-base leading-8 font-medium">
                        <strong>✆</strong> : +91 92090 03414
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="block-item-text mr-[-20px] pr-5 border-b-[1px] border-[#e1e3e4] border-solid sm:flex-grow-0 sm:flex-shrink-0 sm:basis-[50%] sm:py-5 sm:px-[35px] sm:m-0 sm:border-none sm:border-b-0 lg:flex-grow lg:flex-shrink-0 lg:basis-[300px]">
                <button
                  className="footer-title relative sm:block w-full sm:mb-[0.85em] text-[#10b59f] text-left cursor-pointer sm:cursor-text text-sm font-semibold uppercase flex items-center justify-between mb-0 py-[19px] px-0 sm:p-0"
                  onClick={() => {
                    setShowPlusBtn2(!showPlusBtn2);
                  }}
                >
                  <span>Quick Links</span>

                  <span
                    className={` plus-button block relative right-0 w-[10px] h-[10px] top-[calc(50%-5px)] text-[#10b59f] sm:hidden ${
                      showPlusBtn2 ? "showplus" : ""
                    } `}
                  ></span>
                </button>

                <div
                  className="footer-collapse h-0 overflow-hidden sm:overflow-visible"
                  style={{
                    height: showPlusBtn2 ? "auto" : "",
                  }}
                >
                  <div className="footer-collapse-content">
                    <ul className="footer-list list-none mt-[-8px] mb-[-5px] sm:mt-[-2px] sm:mb-0 leading-[1.4]">
                      <li>
                        <a
                          href="/"
                          className="footer-link block py-[5px] cursor-pointer hover:text-[#10b59f] text-base font-medium"
                        >
                          Parallel Learning
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          className="footer-link block py-[5px] cursor-pointer hover:text-[#10b59f] text-base font-medium"
                        >
                          3D Acrylic Signage
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          className="footer-link block py-[5px] cursor-pointer hover:text-[#10b59f] text-base font-medium"
                        >
                          3D Medical Signage
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          className="footer-link block py-[5px] cursor-pointer hover:text-[#10b59f] text-base font-medium"
                        >
                          3D Educational Signage
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          className="footer-link block py-[5px] cursor-pointer hover:text-[#10b59f] text-base font-medium"
                        >
                          Custom Photo Print
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          className="footer-link block py-[5px] cursor-pointer hover:text-[#10b59f] text-base font-medium"
                        >
                          24/7 CCTV
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          className="footer-link block py-[5px] cursor-pointer hover:text-[#10b59f] text-base font-medium"
                        >
                          View Cart
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="block-item-text mr-[-20px] pr-5 border-b-[1px] border-[#e1e3e4] border-solid sm:flex-grow-0 sm:flex-shrink-0 sm:basis-[50%] sm:py-5 sm:px-[35px] sm:m-0 sm:border-none sm:border-b-0 lg:flex-grow lg:flex-shrink-0 lg:basis-[300px]">
                <button
                  className="footer-title relative sm:block w-full sm:mb-[0.85em] text-[#10b59f] text-left cursor-pointer sm:cursor-text text-sm font-semibold uppercase flex items-center justify-between mb-0 py-[19px] px-0 sm:p-0"
                  onClick={() => {
                    setShowPlusBtn3(!showPlusBtn3);
                  }}
                >
                  <span>Policies</span>

                  <span
                    className={` plus-button block relative right-0 w-[10px] h-[10px] top-[calc(50%-5px)] text-[#10b59f] sm:hidden ${
                      showPlusBtn3 ? "showplus" : ""
                    } `}
                  ></span>
                </button>

                <div
                  className="footer-collapse h-0 overflow-hidden sm:overflow-visible "
                  style={{
                    height: showPlusBtn3 ? "auto" : "",
                  }}
                >
                  <div className="footer-collapse-content">
                    <div className="rte break-words">
                      <p className=" mb-[0.7em] text-[#48484d] underline underline-offset-4 cursor-pointer text-base font-medium">
                        <a href="/">Privacy Policy</a>
                      </p>

                      <p className=" mb-[0.7em] text-[#48484d] underline underline-offset-4 cursor-pointer text-base font-medium">
                        <a href="/">Refund & Return Policy</a>
                      </p>

                      <p className=" mb-[0.7em] text-[#48484d] underline underline-offset-4 cursor-pointer text-base font-medium">
                        <a href="/">Shipping & Delivery</a>
                      </p>

                      <p className=" mb-[0.7em] text-[#48484d] underline underline-offset-4 cursor-pointer text-base font-medium">
                        <a href="/">Term & Conditions</a>
                      </p>

                      <p className="mb-0 text-[#48484d] underline underline-offset-4 cursor-pointer text-base font-medium">
                        <a href="/">Contact Us</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="block-item-newsletter mr-[-20px] pr-5 sm:flex-grow-0 sm:flex-shrink-0 sm:basis-[50%] sm:py-5 sm:px-[35px] sm:m-0 sm:max-w-[350px] lg:flex-grow lg:flex-shrink-0 lg:basis-[300px]">
                <p className="footer-title relative sm:block w-full sm:mb-[0.85em] text-[#10b59f] text-left cursor-pointer sm:cursor-text text-sm font-semibold uppercase flex items-center justify-between mb-0 py-[19px] px-0 sm:p-0">
                  Newsletter
                </p>

                <div className="footer-news-wrapper">
                  <div className="footer-news-text mt-[-0.425em] sm:mt-0 break-words">
                    <p className="text-base font-medium leading-8">
                      Subscribe with us to receive offers and newly launched
                      products.
                    </p>
                  </div>

                  <form className="footer-news-form mt-5">
                    <div className="form-wrappers relative w-full mb-3">
                      <input
                        type="email"
                        className="form-fields pt-5 pb-[3px] px-3 block rounded-sm border border-solid border-[#d4d6d8] w-full leading-normal h-12 text-[#48484d] bg-[#ffffff] resize-none text-base"
                        required
                      />

                      <label className="form-labals absolute left-[13px] top-0 leading-[48px] text-base text-[#677279] pointer-events-none origin-top-left scale-100">
                        Your email
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="form-submit bg-[#10b59f] mt-3 block text-[#ffffff] relative py-0 px-[30px] leading-[48px] rounded-sm text-center text-base font-medium cursor-pointer hover:bg-[#49bfaf]"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <aside className="footer-aside flex flex-col mt-[10px] text-[13px] sm:text-sm sm:flex-row sm:flex-wrap sm:justify-between sm:mt-[75px] lg:items-start">
              <div className="aside-item lg:w-auto hidden lg:block">
                <p>© 2024 Parallel Learning </p>
              </div>

              <div className="aside-item-social mt-[34px] sm:mt-0">
                <p className="aside-title mb-[0.8em]">Follow Us</p>

                <ul className="aside-social-list flex flex-wrap m-[-5px] text-sm list-none">
                  <li className="social-media-item inline-block m-[5px] ">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <svg
                        className="facebook w-7 h-7 opacity-40 inline-block fill-current align-middle bg-none pointer-events-none overflow-visible "
                        focusable="false"
                        viewBox="0 0 30 30"
                      >
                        <path
                          d="M15 30C6.71572875 30 0 23.2842712 0 15 0 6.71572875 6.71572875 0 15 0c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15zm3.2142857-17.1429611h-2.1428678v-2.1425646c0-.5852979.8203285-1.07160109 1.0714928-1.07160109h1.071375v-2.1428925h-2.1428678c-2.3564786 0-3.2142536 1.98610393-3.2142536 3.21449359v2.1425646h-1.0714822l.0032143 2.1528011 1.0682679-.0099086v7.499969h3.2142536v-7.499969h2.1428678v-2.1428925z"
                          fill="currentColor"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>

                  <li className="social-media-item inline-block m-[5px]">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <svg
                        className="instagram w-7 h-7 opacity-40 inline-block fill-current align-middle bg-none pointer-events-none overflow-visible"
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
                    </a>
                  </li>

                  <li className="social-media-item inline-block m-[5px]">
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <svg
                        className="youtube w-7 h-7 opacity-40 inline-block fill-current align-middle bg-none pointer-events-none overflow-visible"
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
                    </a>
                  </li>

                  <li className="social-media-item inline-block m-[5px]">
                    <a
                      href="https://in.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <svg
                        className="linkedin w-7 h-7 opacity-40 inline-block fill-current align-middle bg-none pointer-events-none overflow-visible"
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
                    </a>
                  </li>
                </ul>
              </div>

              <div className="aside-item-payment mt-[34px] sm:mt-0">
                <p className="aside-title mb-[0.8em]">We Accept</p>

                <div className="payment-list flex flex-wrap m-[-4px]">
                  <svg
                    className=" w-[38px] h-6 m-1"
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

              <div className="aside-item-copyright mt-[45px] sm:mt-[34px] sm:w-full lg:hidden">
                <p>© 2024 Parallel Learning </p>
              </div>
            </aside>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
