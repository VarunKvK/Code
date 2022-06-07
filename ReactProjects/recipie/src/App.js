import React,{useEffect,useState} from 'react';
import Recpie from './Recpie';

const App = () => {

  const APP_ID = '2b93c05d';
  const APP_KEY = 'ea89619456a4271f4d0adc37dddfde0f';
  const [recpies,setRecpie]=useState([]);
  const [search,setsearch]=useState("");
  const [query,getQuery]=useState("chicken");

  useEffect(()=>{
    getRecipies();
  },[query]);

  const getRecipies= async()=>{
      const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data=await response.json();
      setRecpie(data.hits);
      console.log(data.hits);

  }

  const getResult=e=>{
    setsearch(e.target.value);
    
  };

  const getSearch=e=>{
    e.preventDefault();
    getQuery(search);
    setsearch("");
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search">
        <input type="text" className="searchinput" value={search} onChange={getResult}/>
        <button className="searchbtn">Search</button>
      </form>
      {recpies.map(recpie=>(
        <Recpie key={recpie.recipe.label}  title={recpie.recipe.label} calories={recpie.recipe.calories} images={recpie.recipe.image}/> 
      ))};
    </div>
  )};

export default App;
