import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import ListGroup from "./components/ListGroup";
import { KhatabookProvider } from "./context/KhatabookContext";

const App = () => {
  return (
    <KhatabookProvider>
      <Navbar />
      <div className="p-10 bg-gray-200 min-h-screen">
        <Form />
        <Dashboard />
        <ListGroup />
      </div>
    </KhatabookProvider>
  );
};

export default App;
