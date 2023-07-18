import { ReactNode, createContext, useEffect, useState } from 'react'
import { getUserData, userCollection } from '../utils/firestore'
import { DocumentData, doc, getDoc } from 'firebase/firestore'


export const UserDataContext = createContext<null | any>(null)



export interface UserDataDoc {
    userId: string,
    firstname: string,
    lastname: string,
    email: string,
    gender: string,
    birthday: string,
    interest: string[],
    isVolunteer: boolean,
}

export const UserDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userData, setUserData] = useState<UserDataDoc | null>()
    const [userId, setUserId] = useState<string>('')

    useEffect(() => {
        const getData = async () => {
            const data = await getDoc(doc(userCollection, userId))
            if (data.exists()) {
            setUserData(data.data() as UserDataDoc)
            }
        }

        getData()
    }, [userId])
    
        const signinUser = (uid: string) => {
            setUserId(uid)
        }
    
        const signoutUser = () => {
            setUserId('')
        }

        console.log(JSON.stringify(userData))
        return (
        <UserDataContext.Provider value={{ userData, signinUser, signoutUser }}>
            {children}
        </UserDataContext.Provider>
        )
}
