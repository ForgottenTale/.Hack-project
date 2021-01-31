import React, { useState, useContext, } from 'react';

const FoodContext = React.createContext();


export function useTheme() {
    return useContext(FoodContext);
}


export function FoodProvider({ children }) {


    const [state, setS] = useState([])

 
    var data = {
        data: state,
        
    }
    return (
        <FoodContext.Provider value={data} >

            {children}


        </FoodContext.Provider>
    )
}
