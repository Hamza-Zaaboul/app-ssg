"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("2a9308c6-0eff-4577-b610-c72bf150cb14");
  });

  return null;
}

export default CrispChat;