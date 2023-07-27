import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";


export function Carousel() {
  return (
    <div className=" w-full overflow-x-auto pb-6 pt-1">
      <div className="flex animate-carousel gap-2">
        <div className="h-[30vh] w-2/3 flex-none md:w-1/3">
          <img
            alt={''}
            className="relative h-full w-full object-contain"
            src={
              'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6065e8ddd52c46688bd2ae9200ad6eb7_9366/Campus_00s_Shoes_Blue_GY9473_01_standard.jpg'
            }
            width={600}
            height={600}
          />
        </div>
        <div className="h-[30vh] w-2/3 flex-none md:w-1/3">
          <img
            alt={''}
            className="relative h-full w-full object-contain"
            src={
              'https://5.imimg.com/data5/GLADMIN/Default/2022/6/RU/KZ/JJ/151793842/air-jordan-retro-1-sports-shoes-500x500.jpeg'
            }
            width={600}
            height={600}
          />
        </div>
        <div className="h-[30vh] w-2/3 flex-none md:w-1/3">
          <img
            alt={''}
            className="relative h-full w-full object-contain"
            src={
              'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6065e8ddd52c46688bd2ae9200ad6eb7_9366/Campus_00s_Shoes_Blue_GY9473_01_standard.jpg'
            }
            width={600}
            height={600}
          />
        </div>
        <div className="h-[30vh] w-2/3 flex-none md:w-1/3">
          <img
            alt={''}
            className="relative h-full w-full object-contain"
            src={
              'https://www.thesneakerone.com/40173-large_default/NIKE-BLAZER-MID-77-WHITE-LEMON-DROP-DN5052-100.jpg'
            }
            width={600}
            height={600}
          />
        </div>
        <div className="h-[30vh] w-2/3 flex-none md:w-1/3">
          <img
            alt={''}
            className="relative h-full w-full object-contain"
            src={'https://www.nakedcph.com/images/53144/product.jpg'}
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
