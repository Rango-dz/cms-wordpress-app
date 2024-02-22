import { AppProps } from "next/app";
import  "../styles/index.css";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
	/** Renders the page component. */
	return <Component {...pageProps} />;
}

export default MyApp;
