import "../styles/globals.css";

import { ThemeProvider } from "@material-tailwind/react";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <>{getLayout(<Component {...pageProps} />)}</>
    </ThemeProvider>
  );
}
