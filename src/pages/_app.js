import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConfigProvider } from "antd";
import { useState } from "react";
import ThemeContext from "@/context/ThemeContext";
import { darkTheme, lightTheme } from "@/theme/themeConfig";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark-theme" : ""}>
      <SessionProvider session={session}>
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
          <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
            <Component {...pageProps} />
          </ConfigProvider>
        </ThemeContext.Provider>
      </SessionProvider>
    </div>
  );
}
