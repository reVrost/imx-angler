"use client";

import { useEffect } from "react";
import { passportInstance } from "../../immutable/passport";

export default function Callback() {
  useEffect(() => {
    passportInstance.logoutSilentCallback("http://localhost:3000");
  }, []);
  return <>Logout</>;
}
