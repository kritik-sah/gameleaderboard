import "@/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { Space_Grotesk } from "next/font/google";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${spaceGrotesk.variable} font-space-grotesk`}>
      <Head>
        <meta charSet="UTF-8" />
        <title>Games LeaderBoard</title>
        <meta name="description" content="Games LeaderBoard" />
        <meta name="keywords" content="Zo world, treasure hunt" />
        <meta name="author" content="Kritik Sah, Rebel" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg" href="/zo-white.svg" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer className="p-6" />
    </main>
  );
}
