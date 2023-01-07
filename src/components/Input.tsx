import React from "react";
import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import db from "../model/db.json";
import { useForm } from "../hooks/useForm";

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
  const { data, handleChange } = useForm(initialState);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(data);
  };

  const elements = (
    param: string,
    name?: string,
    options?: Array<OptionsProps | any>
  ) => {
    switch (param) {
      case "text":
        return (
          <Input
            key={name}
            required
            type={param}
            name={name}
            onChange={handleChange}
          />
        );
      case "date":
        return (
          <Input key={name} type={param} name={name} onChange={handleChange} />
        );

      case "email":
        return (
          <Input key={name} type={param} name={name} onChange={handleChange} />
        );

      case "select":
        return (
          <Select name={name} onChange={handleChange}>
            <option value="">-----</option>
            {options}
          </Select>
        );

      case "checkbox":
        return (
          <Checkbox onChange={handleChange} colorScheme="orange" name={name} />
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
        <form onSubmit={handleSubmit}>
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
