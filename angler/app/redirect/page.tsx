"use client";

import { useEffect } from "react";
import { passportInstance } from "../../immutable/passport";

export default function Redirect() {
  useEffect(() => {
    passportInstance.loginCallback();
  }, []);
  return <>Login</>;
}
