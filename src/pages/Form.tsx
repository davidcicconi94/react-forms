import { Flex, Heading, Stack } from "@chakra-ui/react";
import InputForm from "../components/Input";

const Form = (): JSX.Element => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bgColor="gray">
      <Stack
        spacing={8}
        w={"full"}
        maxW={"lg"}
        rounded={"xl"}
        boxShadow={"2xl"}
        p="25"
        my={12}
        bgColor="white"
      >
        <Heading
          textAlign={"center"}
          lineHeight={1.1}
          fontSize={{ base: "2xl", md: "3xl" }}
          p={"20px"}
        >
          Completar formulario
        </Heading>

        <InputForm />
      </Stack>
    </Flex>
  );
};

export default Form;
