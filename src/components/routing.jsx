import { Aboutme } from '../pages/aboutme.jsx';
import { Education } from '../pages/education.jsx';
import { ErrorRoute } from '../pages/erro.jsx';
import { Skills } from '../pages/skills.jsx';
import { Contact } from '../pages/contact.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


 export const Routing = () =>{
  
    return(
        
        <Routes>
            <Route path="/" element={<Aboutme />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<ErrorRoute />} />
        </Routes>
    )
  }
  