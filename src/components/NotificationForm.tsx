import { Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotificationForm = () => {
  return (
    <>
      <Heading
        textAlign={"center"}
        lineHeight={1.1}
        fontSize={{ base: "2xl", md: "3xl" }}
        p={"20px"}
      >
        ¡Formulario completado correctamente!
      </Heading>
      <div style={{ margin: "auto", padding: "15px" }}>
        <Image boxSize="150px" src="/checked.png" objectFit="cover" />
      </div>
      <Text align={"center"} fontSize={20} p={5}>
        Para ver la lista de usuarios, entre
        <Link to="/answers">
          <b style={{ color: "orange" }}> aquí</b>
        </Link>
      </Text>
    </>
  );
};

export default NotificationForm;
