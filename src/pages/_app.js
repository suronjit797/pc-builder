import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConfigProvider } from "antd";
import { useState } from "react";
import ThemeContext from "@/context/ThemeContext";
import { Provider } from "react-redux";
import { darkTheme, lightTheme } from "@/theme/themeConfig";
import { store } from "@/redux/store";
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark-theme" : ""}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
              <Component {...pageProps} />
            </ConfigProvider>
          </ThemeContext.Provider>
        </Provider>
      </SessionProvider>
    </div>
  );
}
