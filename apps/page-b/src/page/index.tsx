import React from "react";
import { PageName } from "@wetravel/atoms";

interface AppProps {
  name: string;
}

export const App = (props: AppProps) => {
  const { name } = props;

  return <PageName name={name} />;
};
