import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <Form />
      </div>
      <Card />
    </>
  );
};

export default App;
