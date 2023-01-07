import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import db from "../model/db.json";

type OptionsProps = {
  value: string;
  label: string;
};

const InputForm = () => {
  const elements = (
    param: string,
    name?: string,
    options?: Array<OptionsProps | any>
  ) => {
    switch (param) {
      case "text":
        return <Input type={param} name={name} />;
      case "date":
        return <Input type={param} name={name} />;

      case "email":
        return <Input type={param} name={name} />;

      case "select":
        return <Select>{options}</Select>;

      case "checkbox":
        return <Checkbox colorScheme="orange" name={name} />;

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
        <FormControl isRequired={item.required}>
          <FormLabel> {item.label === "Enviar" ? null : item.label} </FormLabel>
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
      ))}
    </>
  );
};

export default InputForm;
