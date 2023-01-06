import React from "react";
import { firestore } from "../firebase/config";

const Form = () => {
  console.log(firestore);
  return (
    <div>
      <h2>Este es el formulario</h2>
    </div>
  );
};

export default Form;
