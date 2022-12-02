import { useState } from "react"
import { AddCategory , GifGrid } from "./components"


export const GifExpertApp = () => {

const [category,setCategory]= useState([])

const agregarElement = (element)=> {
  if(category.includes(element)) return;
  setCategory([element,...category])
}

  return (
   <>
    <h1>GifExpertApp</h1>

    <AddCategory agregarElement={agregarElement} />
    
    <div>
      {category.map(element => <GifGrid key={element} category={element} /> )}
    </div>
   </>
  )
}


