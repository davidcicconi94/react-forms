import { Flex, Stack } from "@chakra-ui/react";
import InputForm from "../components/Input";

const Form = (): JSX.Element => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('/background_form.jpg')"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
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
        <InputForm />
      </Stack>
    </Flex>
  );
};

export default Form;
