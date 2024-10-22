/* eslint-disable react/prop-types */
import "./footer.css";

export default function Footer(props) { 
  const {toggleSideBar, data} = props;
  return (

    <footer>
    <div className="bgGradient"></div>
    <div>  
    <h2>{data?.title}</h2>
    <h1>APOD PROJECT</h1>
    </div>
      <button onClick={toggleSideBar}>
      <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  )
}
