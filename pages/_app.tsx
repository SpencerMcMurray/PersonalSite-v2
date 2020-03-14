import React from "react";
import App from "next/app";
import ThemeContext from "../components/ThemeContext";

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
    console.log("here");
    this.setState({ isDark: !this.state.isDark });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeContext.Provider
        value={{ isDark: this.state.isDark, flipLights: this.flipLights }}
      >
        <Component {...pageProps} />
      </ThemeContext.Provider>
    );
  }
}

export default MyApp;
