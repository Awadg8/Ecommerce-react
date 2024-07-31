import React, { useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";

const ImageZoom = ({ product }) => {
  const imgRef = useRef(null);
  const resultRef = useRef(null);
  const lensRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const result = resultRef.current;
    const lens = lensRef.current;

    const cx = result.offsetWidth / lens.offsetWidth;
    const cy = result.offsetHeight / lens.offsetHeight;

    result.style.backgroundImage = `url('${img.src}')`;
    result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

    const moveLens = (e) => {
      e.preventDefault();
      const pos = getCursorPos(e);
      let x = pos.x - lens.offsetWidth / 2;
      let y = pos.y - lens.offsetHeight / 2;

      if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
      if (x < 0) x = 0;
      if (y > img.height - lens.offsetHeight)
        y = img.height - lens.offsetHeight;
      if (y < 0) y = 0;

      lens.style.left = `${x}px`;
      lens.style.top = `${y}px`;
      result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    };

    const getCursorPos = (e) => {
      const a = img.getBoundingClientRect();
      const x = e.pageX - a.left - window.pageXOffset;
      const y = e.pageY - a.top - window.pageYOffset;
      return { x, y };
    };

    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    return () => {
      lens.removeEventListener("mousemove", moveLens);
      img.removeEventListener("mousemove", moveLens);
      lens.removeEventListener("touchmove", moveLens);
      img.removeEventListener("touchmove", moveLens);
    };
  }, []);

  return (
    <div>
      <div className="relative group/img hidden lg:block">
        <img
          ref={imgRef}
          src={product.imageSrc}
          alt={product.imageAlt}
          className="img h-full w-full object-cover object-center group-hover:opacity-75"
        />

        <div
          ref={lensRef}
          className="group-hover/img:visible invisible absolute border border-gray-300 w-32 h-32"
          style={{ pointerEvents: "none" }}
        ></div>

        <div
          ref={resultRef}
          className=" group-hover/img:visible invisible border border-gray-300 w-[27rem] h-[27rem] z-[1] absolute -top-4 left-[428px]"
          style={{ backgroundSize: "cover" }}
        ></div>
      </div>
    </div>
  );
};

export default ImageZoom;
