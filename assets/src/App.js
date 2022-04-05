import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Action, Home } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/meetingId=:meetingId" element={<Home />} />
        <Route path="/" element={<Action />} />
      </Routes>
    </Router>
  );
};

export default App;
