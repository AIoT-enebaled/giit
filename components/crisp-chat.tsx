"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0fedfd29-9303-4c38-a5a2-26d9025e1d4e");
  }, []);

  return null;
};
