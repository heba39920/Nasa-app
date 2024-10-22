/* eslint-disable react/prop-types */
import "./sideBar.css";
export default function SideBar(props) {
  const {toggleSideBar,data} = props;
  return (
    <div className="sideBar">
    <div className="bgOverLay" onClick={toggleSideBar}></div>
    <div className="sideBarContent">  <h2>{data?.title}</h2>
 <div className="descriptionContainer">
 <div><p className="descriptionTitle">{data?.date}</p>
 <p>{data?.explanation}</p></div>
 </div>
  <button className="arrow" onClick={toggleSideBar}><i className="fa-solid fa-arrow-right"></i></button> 
    </div> 
     
    </div>

   
  )
}
