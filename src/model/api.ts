import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/config";

const collectionName: string = "items";
interface Data {
  full_name: string | null;
  email: string | null;
  birth_date: string | null;
  country_of_origin: string | null;
  terms_and_conditions: boolean;
}

export const saveResults = (data: Data) => {
  addDoc(collection(firestore, collectionName), data);
};

export const getResults = () => getDocs(collection(firestore, collectionName));
