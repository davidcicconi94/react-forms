import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const Form = (): JSX.Element => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        rounded={"xl"}
        boxShadow={"lg"}
        p="15"
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
        <FormControl id="nombre" isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input _placeholder={{ color: "gray.500" }} type="email" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="tu-mail@ejemplo.com" />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"yellow.500"}
            color={"white"}
            _hover={{
              bg: "yellow.600",
            }}
          >
            Enviar
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Form;
