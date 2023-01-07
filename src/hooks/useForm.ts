import { useState } from "react";

export const useForm = <T>(initialState: T) => {
  const [data, setData] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      terms_and_conditions: e.target.checked,
    }));
  };

  return {
    // propiedades
    data,
    // metodos
    handleChange,
  };
};
