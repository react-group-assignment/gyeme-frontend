import { useContext } from "react";
import { Auth0Context } from "@auth0/auth0-react";
import React from 'react';

//This is a hook which can check if a user has been authenticated

export default function useAuth() {
  return useContext(Auth0Context) ;
}