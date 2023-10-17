import React from "react"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer";
import Main from "./Layout/Main";

export default class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Main search="hobbit" />
        <Footer />
      </>
    )
  }
}

