import Email from "./assets/Email"
import Location from "./assets/Location"
import Phone from "./assets/Phone"
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from "react-bootstrap/Table";

function App() {
const [ert,setErt]= useState([])
const [dene,setDene]= useState([])
useEffect(() => {
  veri();
  
}, []);

  const url ="https://randomuser.me/api/"

const veri =async()=>{
  try{
    const {data:{results}} = await axios(url)
    const {picture:{large},name:{title,first,last},email,cell,location:{state,country},registered:{date,age}}=results[0]
    // console.log(results[0]);
    // console.log(last);
    const asd ={large,title,first,last,email,cell,state,country,date,age}
    // console.log(date.slice(0,10))
    
    setErt(asd);
    
  }catch(error){
    console.log(error);
  }
}  
const { title, first, last, state, country} =
  ert;


const adı = `${title} ${first} ${last}`;
const sehir = `${state} - ${country}`;


  return (
    <div style={{}} className="App m-5 ">
      <Table
        style={{
          width: "400px",
          height: "400px",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
        className=" mx-auto rounded-3"
        striped
        bgcolor="f4a261"
        hover
      >
        <thead>
          <tr className=" justify-content-center">
            <th style={{ width: "100px" }}>
              <img className="rounded-circle" src={ert.large}></img>
            </th>
            <th className="justify-content-center align-items-center py-5">
              <p className="d-block">{adı}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Email />
            </td>
            <td colSpan={2}>{ert.email}</td>
          </tr>
          <tr>
            <td>
              <Phone />
            </td>
            <td colSpan={2}>{ert.cell}</td>
          </tr>
          <tr>
            <td>
              <Location />
            </td>
            <td colSpan={2}>{sehir}</td>
          </tr>
          <tr>
            <td colSpan={2}>Age : {ert.age}</td>
          </tr>
          <tr>
            <td style={{ border: "none" }} colSpan={2}>
              Register Date: {ert.date?.slice(0, 10)}
            </td>
          </tr>
        </tbody>
      </Table>

      <button
        onClick={() => {
          return veri();
        }}
        className="btn btn-success"
      >
        RANDOM
      </button>
    </div>
  );
}

export default App;
