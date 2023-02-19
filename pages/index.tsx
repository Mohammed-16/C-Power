import React from "react";
import type { NextPage } from "next";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { Landing } from "../components/Landing";
import ArcanaaAuth from "../components/ArcanaaAuth";
import ReactDOM from "react-dom/client";
 
const provider = new AuthProvider(
  `${"3429ed01c22d144816d3a8fbfd94a329cbb36c32"}`
); // required
const Home: NextPage = () => {
  return (
    <React.StrictMode>
      <ProvideAuth provider={provider}>
        <Landing />
		
      </ProvideAuth>
    </React.StrictMode>
  );
};

export default Home;
