import React,{useState,createContext} from "react";
export const MoviContext=createContext();


export const MovieProvider =(props)=>{
    const [movies, setMovie] = useState([
        {
            name: 'HarryPotter',
            Rate: '120Rs',
            id: 124645
        },
        {
            name: 'Avengers',
            Rate: '160Rs',
            id: 125665
        },
        {
            name: 'PercyJackson',
            Rate: '110Rs',
            id: 1233
        }
    ]);
    return(
        <MoviContext.Provider>
            {props.children}
        </MoviContext.Provider>
    );
}