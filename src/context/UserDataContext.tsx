import { ReactNode, createContext, useEffect, useState } from 'react'


export const UserDataContext = createContext<null | any>(null)


export const UserDataProvider: React.FC<{children: ReactNode}> = ({children}) => {

    

    return (
        <UserDataContext.Provider value={{}}>
            {children}
        </UserDataContext.Provider>
    ) 
}