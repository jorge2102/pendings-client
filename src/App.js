import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PendingListing from "./containers/pending/PendingListing";
import Header from "./containers/Header";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" exact element={<PendingListing />} />
                    <Route>404 Not Found!</Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;