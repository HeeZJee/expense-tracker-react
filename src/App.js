import React from "react";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";
import ListTransaction from "./components/ListTransaction/ListTransaction";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import Footer from "./components/Footer/Footer";
import { ContextProvider } from "./store/context";
import registerSW from "./service-worker";

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <Balance />
        <IncomeExpense />
        <ListTransaction />
        <AddTransaction />
      </div>
      <Footer />
    </ContextProvider>
  );
}

export default App;
registerSW();
