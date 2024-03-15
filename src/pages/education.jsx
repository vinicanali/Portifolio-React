import './education.css'
import { fechtJson } from '../services/axios.jsx';
import { useState, useEffect, useContext  } from 'react';
import { AppContext } from "../components/context.jsx";


export function Education() {     



  const [fechtCompleted, setFechtCompleted] = useState(false);
  const [texto, setTexto] = useState([]);

  useEffect(() => {
    const loadJson = async () => {
      const data = await fechtJson();
      setTexto(data.data.education);
      setFechtCompleted(true);
    };

    loadJson();
   
  }, []);


  if(fechtCompleted){
    return(
      <div className="d-column d-lg-flex scrolllDown mt-5 p-4">
        {educationCard(texto.primeira.imgurl, texto.primeira.school, texto.primeira.img, texto.primeira.degree, texto.primeira.date)}
        {educationCard(texto.segunda.imgurl, texto.segunda.school, texto.segunda.img, texto.segunda.degree, texto.segunda.date)}
      </div>
    )
  }
}


function educationCard(img, facul, linkdin, degree, date) {
  return(
    <div className="card pt-3 m-2 custom-with shadow">
      <img src={img} className="img-fluid  mx-auto" alt="..."/>
      <div className="card-body text-start">
        <div className="d-flex align-items-center justify-content-between my-2 border-bottom p-1">
          <p className="me-1 m-0 h5">{facul}</p>
          <a className="" href={linkdin}>Linkdin</a>
        </div>
        <div className="d-flex flex-column ps-1">
        <p className="m-0">{degree}</p>
        <p className="m-0">{date}</p>
        </div>
      </div>
    </div>
  )
}
