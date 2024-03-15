
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useContext, useState } from 'react';

import { Bar } from './pages/bar.jsx';
import { Relogio } from './pages/relogio.jsx';

import { AppContext, AppProvider } from "./components/context.jsx";
import { saveLocal, searchLocal } from './components/localStorage.jsx';
import { Routing } from './components/routing.jsx';

const DashBoard = () =>{

  const { user0, user1, text0, text1, container0, container1, blur0, blur1} = useContext(AppContext);

  const [isVisible, setIsVisible] = useState(false);
  const text = searchLocal() == 'true' ? 'Light' : 'Dark';

  const toggleVisibility = () => {
    setIsVisible(prevVisibility => !prevVisibility);
    saveLocal("theme", isVisible);
    
  };

  return(
    <> 

    <div className="conteudo d-flex justify-content-center vh-100 p-0">
      <div className="relogio w-100 h-100" id="bloco" style={searchLocal() === "true" ? user0 : user1}>
        <Relogio />
      </div>
      <div className="d-flex align-items-center justify-content-center my-auto vw-100 vh-100 about p-2" style={searchLocal() === "true" ?  blur1 : blur0}>
        <div className="d-flex flex-column align-items-center justify-content-center w-75 my-auto">  
          <div className="position-fixed top-0 mt-5">
            <Bar/>
          </div>  
            <Routing />
 
        </div>
        <div className="form-check form-switch position-fixed d-flex flex-column top-0 end-0 m-3">
          <div className="d-flex flex-column">
         <button type="button" className="btn btn-outline-dark botaoTheme" onClick={toggleVisibility} style={searchLocal() === "true" ?  { ...text0, ...container0 } : { ...text1, ...container1}}>{text}</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


function App() {

  return(
  <AppProvider>
    <DashBoard/>
  </AppProvider>
  )
}

export default App;
