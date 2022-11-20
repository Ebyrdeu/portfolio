import {AppProps} from "next/app";
import Head from "next/head";
import {MantineProvider} from "@mantine/core";
import "../styles/globals.css";

export default function App({Component, pageProps}: AppProps) {

  return (
      <>
        <Head>
          <title>Maxim Khnykin</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        </Head>

        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{colorScheme: "dark"}}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </>
  );
}