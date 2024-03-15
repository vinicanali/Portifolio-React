import { createContext, useState } from "react";

export  const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [user0, setUser0] = useState({
        backgroundImage: "url('src/assets/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner (1).jpg')",
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        color: 'white',
        important: true
    })
    const [user1, setUser1] = useState({
        backgroundImage: "url('src/assets/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner.jpg')",
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        color: 'black',
        important: true,
    })
    const [text0, setText0] = useState({

        color: 'white',
        important: true
    })
    const [text1, setText1] = useState({
        color: '#2F4F4F',
        important: true,
    })
    const [container0, setContainer0] = useState({
        border: '1px solid white',
        backgroundColor : 'rgb(3 23 31 / 46%)',
        
    })
    const [container1, setConatiner1] = useState({
        border: '1px solid rgb(136 185 199)',
        backgroundColor : 'rgb(191 216 226 / 46%)',
    })
    const [blur0, setBlur0] = useState({
        backgroundColor: 'rgba(220, 220, 220, 0.456)'
    })
    const [blur1, setBlu1] = useState({
        backgroundColor: 'rgba(80, 80, 80, 0.383)'
    })

    return(
        <AppContext.Provider value={{user0, setUser0, user1, setUser1, text0, setText0 ,text1, setText1, container0, setContainer0, container1, setConatiner1, blur0, setBlur0, blur1, setBlu1}}>
            {children}
        </AppContext.Provider>
    )


}


