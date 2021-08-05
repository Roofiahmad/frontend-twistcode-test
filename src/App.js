import React from "react";
import TopHeading from "./Components/TopHeading";
import NewAccount from "./Components/NewAccount";
import AddressForm from "./Components/AddressForm";
import ContactForm from "./Components/ContactForm";
import FooterComp from "./Components/FooterComp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TopHeading />
      <NewAccount />
      <AddressForm />
      <ContactForm />
      <FooterComp />
    </div>
  );
}

export default App;
