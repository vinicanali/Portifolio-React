

import { fechtJson } from '../services/axios.jsx'
import { useState, useEffect, useContext } from 'react';
import {  searchLocal } from '../components/localStorage.jsx';
import { AppContext } from "../components/context.jsx";
import './skills.css'
 export const Skills = () =>{
  const {text0, text1} = useContext(AppContext);

    const [fechtCompleted, setFechtCompleted] = useState(false);
    const [texto, setTexto] = useState([]);

    useEffect(() => {
      const loadJson = async () => {
        const data = await fechtJson();
        setTexto(data);
        setFechtCompleted(true);
      };

      loadJson();
    
    }, []);
    if(fechtCompleted){
      return(
        <div className="scroll mt-5">
          <div className="row w-100 align-items-start">
            {skillBlock(texto.data.skills.frontend.image0, texto.data.skills.frontend.name0, text0, text1)}
            {skillBlock(texto.data.skills.frontend.image1, texto.data.skills.frontend.name1, text0, text1)}
            {skillBlock(texto.data.skills.frontend.image2, texto.data.skills.frontend.name2, text0, text1)}
            {skillBlock(texto.data.skills.frontend.image3, texto.data.skills.frontend.name3, text0, text1)}
            {skillBlock(texto.data.skills.frontend.image4, texto.data.skills.frontend.name4, text0, text1)}
            {skillBlock(texto.data.skills.backend.image0, texto.data.skills.backend.name0, text0, text1)}
            {skillBlock(texto.data.skills.backend.image1, texto.data.skills.backend.name1, text0, text1)}
            {skillBlock(texto.data.skills.other.image0, texto.data.skills.other.name0, text0, text1)}
            {skillBlock(texto.data.skills.other.image1, texto.data.skills.other.name1, text0, text1)}
          </div>
        </div>
      )
    }
  }
  
  function skillBlock(src, text, text0, text1) {
    return(
      <div className="col-12 col-lg-4 p-2">
            <div className="d-flex justify-content-start align-items-center p-2 ms-5"> 
              <img src={src} className="img-fluid w-25 m-2"/>         
              <p className="h2 m-2" style={searchLocal() === "true" ? text0 : text1}>{text}</p>
            </div>
          </div>
    )
  }