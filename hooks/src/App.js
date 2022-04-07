
 import React , {useState} from 'react';
 import './App.css';
import MyNav from './Components/MyNav/MyNav';
import MoviesData from './Components/MoviesData/Data';
import MoviesList from './Components/MoviesList/MoviesList';
import AddMovie from './Components/AddMovie/AddMovie'; 
import {Routes , Route} from 'react-router-dom';
import MovieDetails from './Components/MovieDetails/MovieDetails';

function App() {
  const[title , setTitle] = useState("");
  const[rate , setRate] = useState(0)
  const [data , setData] =useState (MoviesData)
  const handleTitle =(input)=>{
    setTitle(input)
  }
  const handleRate =(input) =>{
    setRate(input)
  }
  const handleData= (input)=>{
    setData([...  data,input])
  }
  return (
    <div className="App">
    <MyNav 
    handleTitle = {handleTitle}
    handleRate={handleRate} />  
    <AddMovie   handleData ={handleData}/>

    <Routes> 
    <Route
    path="/" element={<MoviesList data={data} title= { title} rate={rate}/>}
    
    />
    <Route path="/movie/:id" element={<MovieDetails/>}/>
    </Routes>
    
    </div>
  );

  }

export default App;
