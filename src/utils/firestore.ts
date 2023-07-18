import { DocumentData, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { UserData } from './interface';


const userCollection = collection(db, 'Users')

export const writeUserData = async (uid: string, user: UserData): Promise<string> => {
try {
    await setDoc(doc(userCollection, uid), {...user, birthday: user.birthday.slice(0, 10)});
    return 'success';
} catch (error: any) {
    return error.message;
}
};


export const getUserData = async (uid: string): Promise<DocumentData | null> => {
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

