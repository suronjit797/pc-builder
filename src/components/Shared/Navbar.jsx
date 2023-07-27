import React, { useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import ThemeContext from "@/context/themeContext";
import { Button, theme } from "antd";

const Navbar = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <Button type="primary" theme="dark-mode" onClick={() => setIsDark(!isDark)}>
      navbar
    </Button>
  );
};

export default Navbar;
