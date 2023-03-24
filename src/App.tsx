import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import FavouritesPage from "./pages/FavouritesPage/FvouritesPage";
import HomePage from "./pages/HomePage/HomePage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="favourites" element={<FavouritesPage />} />
      </Route>
    </Routes>
  );
};

export default App;
