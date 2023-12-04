import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import JsonPlaceholder from "./page/JsonPlacer";
import FreeTestApi from "./page/FreeTestAPI";
import MockFakeApi from "./page/MockFakeApi";

const MockApi = () => <div>Mock API</div>;

const DummyApi = () => <div>Dummy API</div>;

const DinsserMockApi = () => <div>Dinsser Mock API</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/jsonplaceholder" element={<JsonPlaceholder />} />
        <Route path="/mockapi" element={<MockApi />} />
        <Route path="/mockfakeapi" element={<MockFakeApi />} />
        <Route path="/dummyapi" element={<DummyApi />} />
        <Route path="/freetestapi" element={<FreeTestApi />} />
        <Route path="/dinssermockapi" element={<DinsserMockApi />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
