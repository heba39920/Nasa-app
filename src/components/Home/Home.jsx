/* eslint-disable react/prop-types */
import "./home.css";

export default function Home(props) {
  const {data}= props;
  return (
    <div className="imgContainer"><img className="bgImage" src={data?.hdurl} alt={data.title || "bg-image"} /></div>
  )
}
