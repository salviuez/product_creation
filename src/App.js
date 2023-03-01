import logo from './logo.svg';
import './App.css';
import React from 'react';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { MobileList } from './MobileList';
import { AddMobile } from './AddMobile';
import { EditProduct } from './EditProduct';
import { MobileDetails } from "./MobileDetails";
import { Navigate } from 'react-router-dom';

function App() {


  const navigate = useNavigate();
  return (


    <Paper sx={{
      minHeight: "100vh",
      borderRadius: "0px"
    }} elevation={10}>


      <div className="App">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Button color="inherit" onClick={() => navigate("/mobiles")}>Products</Button>
            <Button color="inherit" onClick={() => navigate("/mobiles/add")}>Add Products</Button>
          </Toolbar>

        </AppBar>

        <Routes>
          <Route path="/mobiles" element={<MobileList />} />
          <Route path="/mobiles/add" element={<AddMobile />} />
          <Route path="/mobiles/:id" element={<MobileDetails />} />
          <Route path="/mobiles/edit/:id" element={<EditProduct />} />


        </Routes>




      </div>

    </Paper>

  );
}

export default App;
