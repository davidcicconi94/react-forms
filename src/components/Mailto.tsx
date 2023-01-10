import React from "react";

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
