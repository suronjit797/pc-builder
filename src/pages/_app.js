import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConfigProvider } from "antd";
import { useState } from "react";
import ThemeContext from "@/context/ThemeContext";
import { Provider } from "react-redux";
import { darkTheme, lightTheme } from "@/theme/themeConfig";
import { store } from "@/redux/store";

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
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </ConfigProvider>
        </ThemeContext.Provider>
      </SessionProvider>
    </div>
  );
}
