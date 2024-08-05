import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import PossessionsTable from "./components/PossessionsTable";
import DatePicker from "./components/DatePicker";
import possessionsData from "./data/possessionsData"; // créer un fichier data/possessionsData.js avec les données de possessions

function App() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [totalValue, setTotalValue] = useState(0);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const calculateCurrentValue = (possession) => {
    const dateActuelle = new Date(selectedDate);
    return possession.getValeur(dateActuelle);
  };

  const calculateTotalValue = () => {
    const total = possessionsData.reduce((acc, possession) => {
      return acc + calculateCurrentValue(possession);
    }, 0);
    setTotalValue(total);
  };

  return (
    <Container>
      <h1>Gestionnaire de patrimoine économique</h1>
      <DatePicker
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      <Button onClick={calculateTotalValue}>Valider</Button>
      <PossessionsTable
        possessions={possessionsData}
        currentValue={calculateCurrentValue}
      />
      <h2>Valeur totale du patrimoine : {totalValue} Ar</h2>
    </Container>
  );
}

export default App;
