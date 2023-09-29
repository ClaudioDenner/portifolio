import { createContext, useState } from 'react';




const ThemeContext = createContext<TypeThemeColor>(DEFAULT_VALUE_THEME);


export const ThemeContextProvider = ({children})=>{

    const [ theme, setTheme] = useState('light')


    return(
     
        {children}
     </ThemeContext.Provider>   
    )

}