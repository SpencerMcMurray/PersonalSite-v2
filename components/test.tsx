import { NextPage } from "next";

export interface TestProps {
  msg: string;
}

const Test: NextPage<TestProps> = ({ msg }) => {
  return <h1>{msg}</h1>;
};

export default Test;
