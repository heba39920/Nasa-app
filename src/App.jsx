/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import SideBar from "./components/SideBar/Sidebar"


function App() {
const [data , setData]= useState(null);
const [loading, setLoading]= useState(false);
 const [showModal, setShowModal]= useState(false);
 useEffect(()=>{
async function fetchAPIData(){
  // import.meta.env.VITE_NASA_API_KEY
 const NASA_KEY = '0UsPCXFlm6W4iNR3q1dLvKh1Ad6rSofEpzNCCKKs' ;
const API = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
const today =(new Date()).toDateString();
const localKey = `NASA_${today}`;
if (localStorage.getItem(localKey)){
  const  apiData = JSON.parse(localStorage.getItem(localKey));
  setData(apiData);
  return ;
}
localStorage.clear();
try {
  const response = await fetch(API);  
  const apiData = await response.json();
  localStorage.setItem(localKey, JSON.stringify(apiData));
  setData(apiData)
  // console.log(apiData);
  
} catch (error) {
  console.log(error.message);
}
;
}
 fetchAPIData()
 },[]);
function toggleSideBar(){
setShowModal(!showModal);
}
  return (
    <>
   {data? <Home data = {data}/>:(<div className="loadingState"><i className="fa-solid fa-spinner"></i></div>)} 
    {showModal && (<SideBar data={data} toggleSideBar = {toggleSideBar} />)}
    {data && <Footer data={data}  toggleSideBar = {toggleSideBar}/>}
    </>
  )
}

export default App
