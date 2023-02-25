import React from "react";
import Crudmain from "./Component/Crudmain";
import Formadd from "./Component/Formadd";
import { useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edituser from "./Component/Edituser";
const App = () => {
  let { name } = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Crudmain />} />
        <Route exact path="/formadd" element={<Formadd />} />
        <Route exact path='/formedit/:name' element={<Edituser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
