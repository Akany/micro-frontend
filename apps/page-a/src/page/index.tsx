import React from "react";

interface AppProps {
  name: string;
}

export const App = (props: AppProps) => {
  const { name } = props;

  return <>Page {name}</>;
};
