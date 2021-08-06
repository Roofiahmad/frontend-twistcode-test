import React, { useState } from "react";
import TopHeading from "./Components/TopHeading";
import NewAccount from "./Components/NewAccount";
import AddressForm from "./Components/AddressForm";
import ContactForm from "./Components/ContactForm";
import FooterComp from "./Components/FooterComp";

import "./App.css";

function App() {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [userInput, setUserInput] = useState({
    title: "",
    firstName: "",
    lastName: "",
    mobilePhone: "",
    address: "",
    country: "",
    province: "",
    email: "",
    dob: "",
    month: "",
    year: "",
    subscribeBy: "",
    termAndCondition: "",
  });

  // console.log(userInput);

  return (
    <div className="App">
      <TopHeading />
      <NewAccount
        userInput={userInput}
        setUserInput={setUserInput}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <AddressForm
        userInput={userInput}
        setUserInput={setUserInput}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <ContactForm userInput={userInput} setUserInput={setUserInput} />
      <FooterComp userInput={userInput} setUserInput={setUserInput} />
    </div>
  );
}

export default App;
