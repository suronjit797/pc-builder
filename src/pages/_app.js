import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConfigProvider } from "antd";
import { useState } from "react";
import ThemeContext from "@/context/ThemeContext";
import { Provider } from "react-redux";
import { darkTheme, lightTheme } from "@/theme/themeConfig";
import { store } from "@/redux/store";


export default function App({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
        <Provider store={store}>
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
        </Provider>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   const [isDark, setIsDark] = useState(false);

//   return (
//     <ThemeContext.Provider value={{ isDark, setIsDark }}>
//       <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
//         <Provider store={store}>
//           <SessionProvider session={session}>
//             <Component {...pageProps} />
//           </SessionProvider>
//         </Provider>
//       </ConfigProvider>
//     </ThemeContext.Provider>
//   );
// }
