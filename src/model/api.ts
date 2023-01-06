import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/config";

const collectionName: string = "results";

export const saveResults = (data: any) => {
  addDoc(collection(firestore, collectionName), data);
};

export const getResults = getDocs(collection(firestore, collectionName));
