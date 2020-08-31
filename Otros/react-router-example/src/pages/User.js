import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { name } = useParams();

  return <h2>{`User autenticado ${name}`}</h2>;
};

export default User;
