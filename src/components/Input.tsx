import React from "react";
import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import db from "../model/db.json";
import { useFormHook } from "../hooks/useForm";

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

const initialState: Data = {
  full_name: null,
  email: null,
  birth_date: null,
  country_of_origin: null,
  terms_and_conditions: false,
};

const InputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
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
          </div>
        );
      case "date":
        return (
          <Input
            key={name}
            type={param}
            {...register(`${name}`, {
              required: true,
            })}
          />
        );

      case "email":
        return (
          <Input
            key={name}
            type={param}
            {...register(`${name}`, {
              required: true,
            })}
          />
        );

      case "select":
        return (
          <Select
            {...register(`${name}`, {
              required: true,
            })}
          >
            <option value="">-----</option>
            {options}
          </Select>
        );

      case "checkbox":
        return (
          <Checkbox
            {...register(`${name}`, {
              required: true,
            })}
            colorScheme="orange"
            name={name}
          />
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
