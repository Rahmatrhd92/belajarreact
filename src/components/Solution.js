import React from 'react'
import {Image} from "react-bootstrap";
import "../Style/index.css";

const Solution = (props) => {
  return (
    <Image  className="gambar"src={props.image} fluid />
  )
}

export default Solution