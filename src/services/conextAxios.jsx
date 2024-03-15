import { createContext, useState } from "react";

export  const AxiosContext = createContext();

export const AppAxiosProvider = ({children}) => {
    const [jsonData, setJsonData] = useState();


    useEffect(() => {
        const loadJson = async () => {
          const data = await fechtJson();
          setJsonData(data);
        };
    
        loadJson();
       
      }, []);



    return(
        <AppContext.Provider value={{jsonData, setJsonData}}>
            {children}
        </AppContext.Provider>
    )


}


