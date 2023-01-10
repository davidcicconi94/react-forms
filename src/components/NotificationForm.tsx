import { Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const NotificationForm = () => {
  const notify = () => {
    toast.success("Formulario completado con éxito.", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    notify();
  }, []);

  return (
    <Text fontSize={20}>
      Para ver la lista de usuarios, entre{" "}
      <Link to="/answers">
        <b>aquí</b>
      </Link>
      <ToastContainer />
    </Text>
  );
};

export default NotificationForm;
