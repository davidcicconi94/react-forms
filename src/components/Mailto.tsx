import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

interface MailProps {
  email: string;
  subject: string;
  body: string;
  children?: React.ReactNode;
}

const Mailto = ({ subject, email, body, ...props }: MailProps) => {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
};

export default Mailto;
