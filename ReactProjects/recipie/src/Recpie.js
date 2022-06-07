import React from "react";


const Recpie=({title,calories,images})=>{
    return(
        <div>
            <h1>{title}</h1>
            <h2>Calories:{calories}</h2>
            <img src={images} alt="" srcset="" />
        </div>
)};

export default Recpie;