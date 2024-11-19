import { useFormik } from "formik";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Validation from "./Component/Validation";

import Test from "./Component/Test";

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/test" element={<Test/>} />
        <Route  path="/" element={<Validation/>}/>
      </Routes>
    </Router>
    
  );
};

export default App;