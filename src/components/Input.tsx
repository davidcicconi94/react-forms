import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Heading, Stack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import db from "../model/db.json";
import { Text } from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types";
import { saveResults } from "../model/api";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import NotificationForm from "./NotificationForm";
import { buttonAnimation } from "./animations/animations";

interface OptionsProps {
  value: string;
  label: string;
}

const schema = yup.object({
  full_name: yup.string().required("Por favor, ingrese su nombre y apellido."),
  birth_date: yup
    .string()
    .required("Por favor, ingrese su fecha de nacimiento."),
  email: yup
    .string()
    .email("Formato de correo erróneo.")
    .required("Por favor, ingrese su correo electrónico"),
  country_of_origin: yup
    .string()
    .required("Por favor, ingrese su país de origen"),
  terms_and_conditions: yup
    .bool()
    .oneOf([true], "Debes aceptar los términos y condiciones"),
});

const InputForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const animationBtn = `${buttonAnimation} infinite 1s`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    saveResults(data);
    setSubmitted(true);
  };

  const elements = (
    param: string,
    name?: string,
    options?: Array<OptionsProps | any>
  ) => {
    switch (param) {
      case "text":
        return (
          <div>
            <Input
              key={name}
              type={param}
              {...register(`${name}`, {
                required: true,
              })}
            />
            {errors?.full_name && (
              <p
                style={{ color: "red", marginTop: "5px" }}
              >{`${errors?.full_name?.message}`}</p>
            )}
          </div>
        );
      case "date":
        return (
          <div>
            <Input
              key={name}
              type={param}
              {...register(`${name}`, {
                required: true,
              })}
            />
            {errors?.birth_date && (
              <p
                style={{ color: "red", marginTop: "5px" }}
              >{`${errors?.birth_date?.message}`}</p>
            )}
          </div>
        );

      case "email":
        return (
          <div>
            <Input
              key={name}
              type={param}
              {...register(`${name}`, {
                required: true,
              })}
            />
            {errors?.email && (
              <p
                style={{ color: "red", marginTop: "7px" }}
              >{`${errors?.email?.message}`}</p>
            )}
          </div>
        );

      case "select":
        return (
          <div>
            <Select
              {...register(`${name}`, {
                required: true,
              })}
            >
              <option value="">-----</option>
              {options}
            </Select>
            <>
              {errors?.country_of_origin && (
                <p
                  style={{ color: "red", marginTop: "7px" }}
                >{`${errors?.country_of_origin?.message}`}</p>
              )}
            </>
          </div>
        );

      case "checkbox":
        return (
          <div>
            <Checkbox
              {...register(`${name}`, {
                required: true,
              })}
              colorScheme="orange"
              name={name}
            />
            <>
              {" "}
              {errors?.terms_and_conditions && (
                <p
                  style={{ color: "red", marginTop: "7px" }}
                >{`${errors?.terms_and_conditions?.message}`}</p>
              )}{" "}
            </>
          </div>
        );

      case "submit":
        return (
          <Stack spacing={6}>
            <Button
              bg={"yellow.500"}
              color={"white"}
              _hover={{
                animation: animationBtn,
              }}
              name={name}
              type={param}
            >
              Enviar
            </Button>
          </Stack>
        );

      default:
        break;
    }
  };

  return (
    <>
      {!submitted ? (
        <>
          <Heading
            textAlign={"center"}
            lineHeight={1.1}
            fontSize={{ base: "2xl", md: "3xl" }}
            p={"20px"}
          >
            Completar formulario
          </Heading>
          {db.items.map((item) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isRequired={item.required}>
                <FormLabel>
                  {item.label === "Enviar" ? null : item.label}
                </FormLabel>
                {elements(
                  item.type,
                  item.name,
                  item.options?.map((op) => (
                    <option key={op.value} value={op.value}>
                      {op.label}
                    </option>
                  ))
                )}
              </FormControl>
            </form>
          ))}
        </>
      ) : (
        <NotificationForm />
      )}
    </>
  );
};

export default InputForm;
