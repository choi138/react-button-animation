import { GlobalStyle } from "./style/GlobalStyle";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React from 'react';
import Animation from "./animations";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Animation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
