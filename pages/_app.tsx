import React from "react";
import App from "next/app";
import { SWRConfig } from "swr";
import ThemeContext from "../components/ThemeContext";
import Head from "next/head";

interface AppState {
  isDark: boolean;
}

class MyApp extends App<{}, {}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { isDark: false };
    this.flipLights = this.flipLights.bind(this);
  }

  flipLights() {
    localStorage.setItem("isDark", (!this.state.isDark).toString());
    this.setState({ isDark: !this.state.isDark });
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null)
      localStorage.setItem("isDark", "false");
    this.setState({ isDark: localStorage.getItem("isDark") === "true" });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeContext.Provider
        value={{ isDark: this.state.isDark, flipLights: this.flipLights }}
      >
        <SWRConfig
          value={{
            fetcher: (url: string) => fetch(url).then((res) => res.json()),
          }}
        >
          <Head>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
              integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
              crossOrigin="anonymous"
            />
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
            />
            <link rel="stylesheet" type="text/css" href="main.css" />
            <title>Spencer McMurray</title>
          </Head>
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeContext.Provider>
    );
  }
}

export default MyApp;
