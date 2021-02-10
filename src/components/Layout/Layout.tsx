import { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding:0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 100%;
        line-height: 150%;
    }
`;

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
