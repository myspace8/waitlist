import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";


export async function getProducts() {
    const productsRef = collection(db, 'waitlistproducts');
    const snapshot = await getDocs(productsRef);
    const products = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return products;
  }