import React, { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tom And Jerry: Thinking Tom",
      href: "#",
      price: 249,
      imageSrc:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "The Boys",
      href: "#",
      price: 239,
      imageSrc:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=90&crop=false",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "CreativiT Graphic Printed T-Shirt",
      href: "#",
      price: 199,
      imageSrc:
        "https://m.media-amazon.com/images/I/71rhSWZvmHL._AC_UY1100_.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "OM Design Printed Black T Shirt",
      href: "#",
      price: 269,
      imageSrc:
        "https://prabhubhakti.in/wp-content/uploads/2023/02/OM-Best-Design-Printed-Black-Oversized-T-Shirt.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      name: "No Pain No Gain - Gym T shirt",
      href: "#",
      price: 249,
      imageSrc:
        "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C616v-k8r4rL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 6,
      name: "Printed Men Round Neck White T-Shirt",
      href: "#",
      price: 299,
      imageSrc:
        "https://rukminim2.flixcart.com/image/850/1000/l3rmzrk0/shopsy-t-shirt/g/l/o/xl-sp-white-zoom-half-stylesmyth-original-imagetdnfenufhkp.jpeg?q=90&crop=false",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 7,
      name: "NZ Bird T-shirts",
      href: "#",
      price: 199,
      imageSrc:
        "https://tumbleweedtees.com/cdn/shop/products/TumbleweedTees-male-adult-tshirt-grey-Kokako-huia-saddleback-tieke-wattlebird_3850a46a-35c9-4762-8afd-b818a4085015.jpg?v=1690364389&width=533",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 8,
      name: "Sueded Cotton T-shirt",
      href: "#",
      price: 279,
      imageSrc:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/t/u/5/xl-llptsnbxl-lucus-london-original-imaggjhtxheakdud.jpeg?q=20",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 9,
      name: "Basic Black Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: 239,
    },
    {
      id: 10,
      name: "Basic Cream Tee",
      href: "#",
      price: 299,
      quantity: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
      id: 11,
      name: "Basic Grey Tee",
      href: "#",
      price: 239,
      quantity: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    {
      id: 12,
      name: "Drtwork Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: 269,
    },
    // More products...
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
