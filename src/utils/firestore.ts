import { DocumentData, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { UserData } from './interface';
import { UserDataDoc } from '../context/UserDataContext';


export const userCollection = collection(db, 'Users')

export const writeUserData = async (uid: string, user: UserData): Promise<string> => {
try {
    await setDoc(doc(userCollection, uid), {
        userId: user.userId,
        firstname: user.firstname,
        lastname: user.lastname,
        gender: user.gender,
        birthday: user.birthday.slice(0, 10),
        isVolunteer: user.isVolunteer,
        email: user.email,
        interest: user.interest,
        });
    return 'success';
} catch (error: any) {
    return error.message;
}
};


export const getUserData = async (uid: string): Promise<null | any> => {
    try {
        const userData = await getDoc(doc(userCollection, uid));

        if (userData.exists()) {
            const user = userData.data();
            return user
        } else {
            return null
        }
    } catch (error: any) {
        console.error("Error fetching user data:", error.message)
    }
    return null
}

