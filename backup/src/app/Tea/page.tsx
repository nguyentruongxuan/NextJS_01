"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
const Tea = () => {
  const router = useRouter();
  const goToCoffeePage = () => {
    router.push("/");
  };

  return (
    <div>
      <Button variant="primary"> ntxuan</Button>
      <p>Tea Page toi la tra</p>
      <button onClick={goToCoffeePage}>comback</button>
    </div>
  );
};

export default Tea;
