import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import BridalAccessory from "./pages/BridalAccessory";
import BridalBouquet from "./pages/BridalBouquet";
import BridalCrown from "./pages/BridalCrown";
import HeadPiece from "./pages/HeadPiece";
import HennaCrown from "./pages/HennaCrown";
import WeddingAccessory from "./pages/WeddingAccessory";
import React, {useEffect , useState} from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="BridalAccessory" element={<BridalAccessory />} />
          <Route path="bridalBouquet" element={<BridalBouquet />} />
          <Route path="bridalCrown" element={<BridalCrown />} />
          <Route path="headPiece" element={<HeadPiece />} />
          <Route path="hennaCrown" element={<HennaCrown />} />
          <Route path="weddingAccessory" element={<WeddingAccessory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));