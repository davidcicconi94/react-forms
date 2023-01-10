import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import {
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import { Button, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getResults } from "../model/api";

interface Data {
  id: string;
  full_name: string | null;
  email: string | null;
  birth_date: string | null;
  country_of_origin: string | null;
  terms_and_conditions: boolean;
}

const Answers = () => {
  const [items, setItems] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getItems = async () => {
    const users = await getResults();

    const forms: Array<any> = [];

    users.forEach((doc) => {
      forms.push({ ...doc.data(), id: doc.id });
    });
    setItems(forms);
  };

  useEffect(() => {
    getItems().then(() => setLoading(false));
  }, []);

  return (
    <>
      <Text
        textAlign="center"
        fontSize={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
        p={18}
      >
        Lista de usuarios que han completado el formulario
      </Text>
      <Divider />
      {loading ? (
        <Center flexDir="column" minH={"40vh"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="yellow.500"
            size="xl"
            alignItems="center"
            label="Loading"
          />
          <Text>Cargando...</Text>
        </Center>
      ) : (
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            base: "repeat(1,1fr)",
            md: "repeat(2 , 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {items.map((item: Data) => (
            <Card
              borderRadius={10}
              boxShadow="dark-lg"
              bgColor={"blackAlpha.300"}
              key={item.id}
              p={"40px"}
              m="50px"
            >
              <Text fontSize={"25px"} textAlign={"center"} mb={"20px"}>
                ID: {item.id}{" "}
              </Text>
              <Divider />
              <CardBody>
                <Text mb="5px">
                  <b> Nombre completo: </b> {item.full_name}
                </Text>
                <Text mb="5px">
                  <b> Email: </b> {item.email}
                </Text>
                <Text mb="5px">
                  <b> Fecha de nacimiento: </b> {item.birth_date}
                </Text>
                <Text mb="5px">
                  <b> Nacionalidad: </b> {item.country_of_origin}
                </Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="orange" m="auto" variant="outline">
                  Enviar mail
                </Button>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Answers;
