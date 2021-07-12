import React, {createContext, useState} from 'react'
 
export const SelectedNavContext = createContext()
    const SelectedNavContextProvider = ( {children}) => {
        const [selected, setSelected] = useState(''
        )
    
        const selectedNav = (event, newValue) => {
            setSelected(newValue);
           
        }
     
    const selectedNavContextData = {
        selected,
        selectedNav
    }

    
    return (
        <SelectedNavContext.Provider value={selectedNavContextData} >
            {children}
        </SelectedNavContext.Provider>
    )
    }

export default SelectedNavContextProvider
