import { useContext } from "react";
import { Auth0Context } from "@auth0/auth0-react";
import React from 'react';

export default function useAuth() {
  return useContext(Auth0Context) ;
}