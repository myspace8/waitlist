import { useEffect, useState } from "react";
import { getProducts } from "../firestore/getData";


export function Carousel() {
  const [productList, setProductList] = useState([])
  const [menProducts, setMenProducts] = useState([])
  const [womenProducts, setwomenProducts] = useState([])
  
  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getProducts();
        const filterWomenProducts = data.filter((product) => product.sex === 'f');
        const filterMenProducts = data.filter((product) => product.sex === 'm');
        setwomenProducts(filterWomenProducts);
        setMenProducts(filterMenProducts);
      } catch (error) {
        console.error(error);
      }
    };
    getProductList();
  }, []); 

  return (
    <>
      <div className=" w-full overflow-x-auto pt-1">
        <div className="flex animate-carouselL2R gap-2">
          {womenProducts.map((product) => (
          <div key={product.id} className="h-[20vh] w-2/6 flex-none md:w-1/3">
              <img
                alt={''}
                className="relative h-full w-full object-contain"
                src={
                  product.image
                }
                width={600}
                height={600}
                />
                </div>
              )) }
          </div>
      </div>
      {/* <br /> */}
      <div className=" w-full overflow-x-auto pt-1" dir="rtl">
        <div className="flex animate-carouselR2L gap-2 scroll-ps-6 snap-x">
          {menProducts.map((product ) => (
          <div key={product.id} className="h-[20vh] w-2/6 flex-none md:w-1/3">
              <img
                alt={''}
                className="relative h-full w-full object-contain"
                src={
                  product.image
                }
                width={600}
                height={600}
                />
                </div>
              )) }
          </div>
      </div>
    
    </>
  );
}
