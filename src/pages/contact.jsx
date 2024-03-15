
import { fechtJson } from '../services/axios.jsx'
import { useState, useEffect, useContext } from 'react';
import {  searchLocal } from '../components/localStorage.jsx';
import { AppContext } from "../components/context.jsx";
import './contact.css'



export function Contact() {     
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
            <div className="d-column d-lg-flex mt-5">
                {contactCard(texto.data.contact.linkedin.img, texto.data.contact.linkedin.url, texto.data.contact.linkedin.name, text0, text1)}
                {contactCard(texto.data.contact.twitter.img, texto.data.contact.twitter.url, texto.data.contact.twitter.name, text0, text1)}
                {contactCard(texto.data.contact.insta.img, texto.data.contact.insta.url, texto.data.contact.insta.name, text0, text1)}
            </div>
        )
    }
}


function contactCard(url1, url, name, text0, text1){
    return(
        <div className="d-flex justify-content-center align-items-center my-2">
            <div className="d-flex flex-column justify-content-center align-items-center mx-5 w-50"> 
                        
                <a target="_blank" href={url} style={searchLocal() === "true" ? text0 : text1}>
                    <img src={url1} className="img-fluid"/>
                </a>
                <a target="_blank" className="h3 text-decoration-none" href={url}>{name}</a>
            </div>
        </div>
    )
}
