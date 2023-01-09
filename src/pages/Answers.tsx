import { Card } from "@chakra-ui/card";
import { Flex, Text } from "@chakra-ui/layout";
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
  const [loading, setLoading] = useState<boolean>(false);

  const getItems = async () => {
    const users = await getResults();

    const forms: Array<any> = [];

    users.forEach((doc) => {
      forms.push({ ...doc.data(), id: doc.id });
    });
    setItems(forms);
    console.log(items);
  };

  useEffect(() => {
    getItems();
    setLoading(true);
  }, []);

  return (
    <>
      <Text textAlign="center" fontSize="40px" p={20}>
        Lista de usuarios que han completado el formulario
      </Text>
      <Flex m="auto">
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
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default Answers;
