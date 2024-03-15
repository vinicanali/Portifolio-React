import { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutme.css';
import { AppContext } from "../components/context.jsx";
import { searchLocal } from '../components/localStorage.jsx';
import { fechtJson } from '../services/axios.jsx';
export function Aboutme() {
  const { text0, text1} = useContext(AppContext);
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
    <>
      
          <div className="row gap-2 justify-content-center">
              <div className="col-12 col-md-auto">
                <img src="src/assets/vinicius.png" className="imagePofile mb-3"></img>              
                <h1 style={searchLocal() === "true" ? text0 : text1} >{texto.data.name}</h1>                   
              </div>
              <div className="col-12 col-md-8 d-flex flex-column align-itmes-center justify-content-center">
                  <p className="text-start me-4" style={searchLocal() === "true" ? text0 : text1}>{texto.data.description}</p>
              </div>
          </div>
    </>
  )
}
}

