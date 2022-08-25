import "../styles/globals.css";

import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "@material-tailwind/react";

function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <>{getLayout(<Component {...pageProps} />)}</>
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
