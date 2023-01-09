import React from "react";
import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import db from "../model/db.json";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

interface OptionsProps {
  value: string;
  label: string;
}

interface Data {
  full_name: string | null;
  email: string | null;
  birth_date: string | null;
  country_of_origin: string | null;
  terms_and_conditions: boolean;
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Data | any> = (data) => console.log(data);

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
                bg: "yellow.600",
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
      {db.items.map((item) => (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired={item.required}>
            <FormLabel>{item.label === "Enviar" ? null : item.label}</FormLabel>
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
  );
};

export default InputForm;
