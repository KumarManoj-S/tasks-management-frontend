import React from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";
import Home from "./Home";

const HomeWrapper = (props) => {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["name"]);
  if (!cookies.userId) {
    return <Redirect to="/login" />;
  }
  return <Home {...props} userName={cookies.userName} />;
};

export default HomeWrapper;
