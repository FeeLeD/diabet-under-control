import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout";

const HomePage: FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/measurements");
  }, []);

  return <Layout></Layout>;
};

export default HomePage;
