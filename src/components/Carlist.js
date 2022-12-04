import React, { useEffect, useState } from 'react';
import { useRef } from "react";
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Addcar from './Addcar';
import Editcar from "./Editcar";



export default function Carlist() {

const [cars, setCars] = useState([]);
const gridRef = useRef();

useEffect(() => fetchCars(), []);

const addCar = (car) => {
    const autot = JSON.stringify(car)
    console.log("Autot stringify: " + autot);
    console.log("carlist.js tiedoston addCar metodissa");
    console.log({car});
    console.log(car.brand);
    fetch("http://carrestapi.herokuapp.com/cars", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(car),
        
})
.then((response) => {
    if(response.ok) {
        fetchCars();
    }
});
};

const fetchCars = () => {
fetch('http://carrestapi.herokuapp.com/cars')
.then(response => response.json())
.then(data => setCars(data._embedded.cars))
}

const deleteCar = (link) => {
    console.log("DELETE FUNKTIO");
    console.log("linkki on: " + link)
    fetch(link, { 
        method: "DELETE" 
    })
    .then((response) => {
      if (response.ok) {
        fetchCars();
      }
    });
  };

  const updateCar = (updateCar, link) => {
    console.log(" UPDATE FUNKTIO");
    fetch(link, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateCar),
    }).then((response) => {
      if (response.ok) {
        fetchCars();
      }
    });
  };

  const [columnDefs, setColumnDefs] = useState([
    { field: "brand", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true },
    { field: "color", sortable: true, filter: true },
    { field: "fuel", sortable: true, filter: true },
    { field: "year", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
    {
      headerName: "",
      width: 100,
      field: "_links.self.href",
      cellRenderer: (params) => (
        
        <IconButton color="error" onClick={() => deleteCar(params.value)}>
          <DeleteIcon />
        </IconButton>

        

      ),
    },
    {
      headerName: "",
      width: 100,
      field: "_links.self.href",
      cellRenderer: (params) => (
        <Editcar updateCar={updateCar}  params={params} />

      ),
    },
  ]);


return (
    <>
    <Addcar addCar={addCar} />
    <div>
        <div className= "ag-theme-material" style={{height: '700px', width: '70%', margin: 'auto'}} >
      <AgGridReact
            rowData={cars}
            columnDefs={columnDefs}
            paginationPageSize={10}
            pagination={true}
            >
            
        </AgGridReact>
          </div>
    </div>
    </>
)

}