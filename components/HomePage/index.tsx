import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";

const HomePage: FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/measurements");
  }, []);

  return <></>;
};

export default HomePage;
